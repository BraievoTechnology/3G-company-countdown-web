import { NextRequest, NextResponse } from 'next/server';
import {
    Document,
    Packer,
    Paragraph,
    Table,
    TableCell,
    TableRow,
    WidthType,
    TextRun,
    AlignmentType,
    BorderStyle,
} from 'docx';
import { uploadToAzureBlob } from '@/app/api/util/blobService';

interface Project {
    project_name: string;
    nameClient: string;
    clientContact: string;
    start_date: string;
    end_date: string;
    budget: string;
    description: string;
    inputManMonths: number;
}

function generateFileName(): string {
    const now = new Date();
    const timestamp = now.toISOString().replace(/[-:T.]/g, '').slice(0, 14);
    return `projects-table-${timestamp}.docx`;
}

function createTableCell(text: string, widthPercent: number): TableCell {
    return new TableCell({
        width: {
            size: widthPercent * 100,
            type: WidthType.PERCENTAGE,
        },
        margins: { top: 100, bottom: 100, left: 100, right: 100 },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
            bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
            left: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
            right: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
        },
        children: [
            new Paragraph({
                children: [new TextRun({ text, size: 20 })],
                alignment: AlignmentType.LEFT,
            }),
        ],
    });
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const projects: Project[] = Array.isArray(body) ? body : body.projects;

        if (!Array.isArray(projects)) {
            return NextResponse.json({ message: 'Invalid project list' }, { status: 400 });
        }

        const tableRows: TableRow[] = [];

        // Header Row with Updated Widths
        const tableHeader = new TableRow({
            tableHeader: true,
            children: [
                createTableCell("Name Project", 12),
                createTableCell("Client Name", 7),       // reduced
                createTableCell("Client Contact", 7),    // reduced
                createTableCell("Project Period (From/To)", 10),
                createTableCell("Services Provided", 4),              // reduced
                createTableCell("Cost", 55), // increased
                createTableCell("Input in Man Months", 5), // adjusted
            ],
        });

        tableRows.push(tableHeader);

        for (const project of projects) {
            const period = `${project.start_date ? new Date(project.start_date).toLocaleDateString() : '-'} - ${project.end_date ? new Date(project.end_date).toLocaleDateString() : '-'}`;

            tableRows.push(
                new TableRow({
                    children: [
                        createTableCell(project.project_name ?? '-', 12),
                        createTableCell(project.nameClient ?? '-', 7),
                        createTableCell(project.clientContact ?? '-', 7),
                        createTableCell(period, 10),
                        createTableCell(project.description ?? '-', 55),
                        createTableCell(project.budget ?? '-', 4),
                        createTableCell(project.inputManMonths?.toString() ?? '-', 5),
                    ],
                })
            );
        }

        const doc = new Document({
            creator: 'Next.js App',
            title: 'Project Experience Table',
            description: 'Structured table data for project experience',
            sections: [
                {
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "PROJECTS BY 3G CONSULTANTS (PVT) LTD.",
                                    bold: true,
                                    size: 26,
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                            spacing: { after: 300 },
                        }),
                        new Table({
                            rows: tableRows,
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                    ],
                },
            ],
        });

        const buffer = await Packer.toBuffer(doc);
        const fileName = generateFileName();
        const mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        const blobUrl = await uploadToAzureBlob(buffer, fileName, mimeType);

        return NextResponse.json({ message: 'Document generated', filePath: blobUrl }, { status: 200 });
    } catch (error) {
        console.error('DOCX generation error:', error);
        return NextResponse.json({ message: 'Failed to generate document' }, { status: 500 });
    }
}
