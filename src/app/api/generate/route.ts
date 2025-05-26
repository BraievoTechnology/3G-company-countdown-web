import { NextRequest, NextResponse } from 'next/server';
import {
    Document,
    Packer,
    Paragraph,
    TextRun,
    ExternalHyperlink,
} from 'docx';
import { uploadToAzureBlob } from '@/app/api/util/blobService';

interface ProjectImage {
    id: number;
    projectId: number;
    image_name: string;
}

interface Project {
    id: number;
    project_name: string;
    location: string;
    start_date: string;
    end_date: string | null;
    budget: string;
    status: string;
    description: string;
    category: string;
    images: ProjectImage[];
}

function generateFileName(): string {
    const now = new Date();
    const timestamp = now.toISOString().replace(/[-:T.]/g, '').slice(0, 14);
    return `projects-${timestamp}.docx`;
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const projects: Project[] = Array.isArray(body) ? body : body.projects;

        if (!Array.isArray(projects)) {
            return NextResponse.json({ message: 'Invalid request format. Expected an array of projects.' }, { status: 400 });
        }

        const doc = new Document({
            sections: [],
            styles: {
                paragraphStyles: [
                    {
                        id: 'Hyperlink',
                        name: 'Hyperlink',
                        basedOn: 'Normal',
                        next: 'Normal',
                        run: {
                            color: '#0000FF',
                            underline: {
                                type: 'single',
                            },
                        },
                    },
                ],
            }
        });

        const children: Paragraph[] = [];

        for (const project of projects) {
            const startYear = new Date(project.start_date).getFullYear();
            const endYear = project.end_date ? new Date(project.end_date).getFullYear() : 'Ongoing';

            children.push(
                new Paragraph({ text: `Project Name: ${project.project_name}`, heading: 'Heading1' }),
                new Paragraph({ text: `Location: ${project.location}` }),
                new Paragraph({ text: `Start Year: ${startYear}` }),
                new Paragraph({ text: `End Year: ${endYear}` }),
                new Paragraph({ text: `Budget: ${project.budget}` }),
                new Paragraph({ text: `Status: ${project.status}` }),
                new Paragraph({ text: `Category: ${project.category}` }),
                new Paragraph({ text: `Description: ${project.description}` }),
            );

            const imagesToShow = project.images.slice(0, 8);
            for (const image of imagesToShow) {
                const imageUrl = image.image_name;
                const link = new ExternalHyperlink({
                    children: [
                        new TextRun({
                            text: 'Click to View Image',
                            color: '#0000FF',
                            underline: {
                                type: 'single',
                            },
                        }),
                    ],
                    link: imageUrl,
                });
                children.push(new Paragraph({ children: [link] }));
            }

            children.push(new Paragraph({ text: '------------------------------------------' }));
        }


        doc.addSection({ children });

        const buffer = await Packer.toBuffer(doc);

        const fileName = generateFileName();
        const mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

        const blobUrl = await uploadToAzureBlob(buffer, fileName, mimeType);

        return NextResponse.json({ message: 'Document generated', filePath: blobUrl }, { status: 200 });
    } catch (error) {
        console.error('Error generating document:', error);
        return NextResponse.json({ message: 'Failed to generate document' }, { status: 500 });
    }
}
