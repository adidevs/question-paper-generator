import * as Docx from 'docx';
import fs from 'fs';
import { SectionType } from "docx"

const downloader = async(questions) => {
    const doc = new Docx.Document({
        sections: [
            {
                properties: {},
                children: [
                    new Docx.Paragraph({
                        children: [new Docx.TextRun('List of Questions')],
                    }),
                ],
            },
        ],
    });

    questions.forEach((question, index) => {
        doc.addSection({
            properties: {
                    type: SectionType.CONTINUOUS,
            },
            children: [
                new Docx.Paragraph({
                    children: [new Docx.TextRun(`Question ${index + 1}: ${question.question}`)],
                }),
                new Docx.Paragraph({
                    children: [
                        new Docx.TextRun(`Subject: ${question.subject}, Topic: ${question.topic}, Difficulty: ${question.difficulty}, Marks: ${question.marks}`),
                    ],
                }),
            ],
        });
    });

    // Create a buffer with the Word document content
    return Docx.Packer.toBuffer(doc);
};

export default downloader;
