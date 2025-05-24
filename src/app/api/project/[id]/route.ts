
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import {uploadToAzureBlob} from "@/app/api/util/blobService";
import {BlobServiceClient} from "@azure/storage-blob";


const prisma = new PrismaClient();

const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING!);

const containerClient = blobServiceClient.getContainerClient(process.env.AZURE_STORAGE_CONTAINER_NAME!);


// Utility to extract the ID from URL
function extractIdFromUrl(req: NextRequest): number | null {
    const idStr = req.nextUrl.pathname.split('/').pop();
    return idStr ? Number(idStr) : null;
}

export async function GET(req: NextRequest) {
    const id = extractIdFromUrl(req);
    if (!id) {
        return NextResponse.json({ message: 'Invalid or missing ID' }, { status: 400 });
    }

    const project = await prisma.project.findUnique({
        where: { id },
        include: { images: true },
    });

    if (!project) {
        return NextResponse.json({ message: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json(project);
}


/*export async function PUT(req: NextRequest) {
    const id = extractIdFromUrl(req);
    if (!id) {
        return NextResponse.json({ message: 'Invalid or missing ID' }, { status: 400 });
    }

    try {
        const formData = await req.formData();

        const project_name = formData.get('project_name') as string;
        const location = formData.get('location') as string;
        const start_date = formData.get('start_date') as string;
        const end_date = formData.get('end_date') as string;
        const budget = formData.get('budget') as string;
        const status = formData.get('status') as string;
        const description = formData.get('description') as string;
        const category = formData.get('category') as string;

        const files = formData.getAll('images');
        const savedImagePaths: { image_name: string }[] = [];

        for (const file of files) {
            if (typeof file === 'object' && 'arrayBuffer' in file) {
                const buffer = Buffer.from(await file.arrayBuffer());
                const fileName = `${Date.now()}-${file.name.replace(/[^a-z0-9.-]/gi, '_')}`;
                const mimeType = file.type;

                const imageUrl = await uploadToAzureBlob(buffer, fileName, mimeType);
                savedImagePaths.push({ image_name: imageUrl });
            }
        }

        // 🔥 Delete all old images before adding new ones
        await prisma.projectImages.deleteMany({
            where: {
                projectId: Number(id),
            },
        });

        const updatedProject = await prisma.project.update({
            where: { id: Number(id) },
            data: {
                project_name,
                location,
                start_date: start_date ? new Date(start_date) : undefined,
                end_date: end_date ? new Date(end_date) : undefined,
                budget,
                status,
                description,
                category,
                images: {
                    create: savedImagePaths, // Set new images
                },
            },
            include: { images: true },
        });

        return NextResponse.json(updatedProject);
    } catch (error) {
        console.error('Project FormData PUT error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}*/
export async function PUT(req: NextRequest) {
    const id = extractIdFromUrl(req);
    if (!id) {
        return NextResponse.json({ message: 'Invalid or missing ID' }, { status: 400 });
    }

    try {
        const formData = await req.formData();

        const project_name = formData.get('project_name') as string;
        const location = formData.get('location') as string;
        const start_date = formData.get('start_date') as string;
        const end_date = formData.get('end_date') as string;
        const budget = formData.get('budget') as string;
        const status = formData.get('status') as string;
        const description = formData.get('description') as string;
        const category = formData.get('category') as string;

        const files = formData.getAll('images');
        const validFiles = files.filter(file => typeof file === 'object' && 'arrayBuffer' in file);
        const savedImagePaths: { image_name: string }[] = [];

        if (validFiles.length > 0) {
            // 🔥 Delete old images only if new images are uploaded
            await prisma.projectImages.deleteMany({
                where: {
                    projectId: Number(id),
                },
            });

            for (const file of validFiles) {
                const buffer = Buffer.from(await file.arrayBuffer());
                const fileName = `${Date.now()}-${file.name.replace(/[^a-z0-9.-]/gi, '_')}`;
                const mimeType = file.type;

                const imageUrl = await uploadToAzureBlob(buffer, fileName, mimeType);
                savedImagePaths.push({ image_name: imageUrl });
            }
        }

        const updatedProject = await prisma.project.update({
            where: { id: Number(id) },
            data: {
                project_name,
                location,
                start_date: start_date ? new Date(start_date) : undefined,
                end_date: end_date ? new Date(end_date) : undefined,
                budget,
                status,
                description,
                category,
                ...(validFiles.length > 0 && {
                    images: {
                        create: savedImagePaths,
                    },
                }),
            },
            include: { images: true },
        });

        return NextResponse.json(updatedProject);
    } catch (error) {
        console.error('Project FormData PUT error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}



function extractBlobNameFromUrl(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 1];
}

export async function DELETE(req: NextRequest) {
    const id = extractIdFromUrl(req); // make sure this returns the project ID from request URL
    console.log("Blob image id ------", id)

    if (!id) {
        return NextResponse.json({ message: 'Invalid or missing ID' }, { status: 400 });
    }

    try {
        const project = await prisma.project.findUnique({
            where: { id },
            include: { images: true },
        });

        if (!project) {
            return NextResponse.json({ message: 'Project not found' }, { status: 404 });
        }

        for (const image of project.images) {
            const blobName = extractBlobNameFromUrl(image.image_name);
            const blobClient = containerClient.getBlockBlobClient(blobName);
            await blobClient.deleteIfExists();
        }

        await prisma.project.delete({
            where: { id },
        });

        return NextResponse.json({ message: 'Project and images deleted successfully' });
    } catch (error) {
        console.error('DELETE error:', error);
        return NextResponse.json({ message: 'Failed to delete project' }, { status: 500 });
    }
}



