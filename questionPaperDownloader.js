// import fs from 'fs';
// import Docxtemplater from 'docxtemplater';

// const downloader = async (questions) => {
//     try {
//         // Load the template file (example: template.docx) synchronously
//         const templateContent = fs.readFileSync('./questions.docx', 'binary');

//         // Create a new docxtemplater instance
//         const doc = new Docxtemplater();
        
//         // Load the template content
//         doc.loadZip(templateContent);

//         // Set the data for the template
//         const templateData = {
//             questions: questions.map((question, index) => ({
//                 index: index + 1,
//                 question: question.question,
//                 subject: question.subject,
//                 topic: question.topic,
//                 difficulty: question.difficulty,
//                 marks: question.marks,
//             })),
//         };

//         // Apply the data to the template
//         doc.setData(templateData);

//         // Render the template with the data
//         doc.render();

//         // Get the rendered document as a Buffer
//         const buffer = doc.getZip().generate({ type: 'nodebuffer' });

//         return buffer;
//     } catch (error) {
//         console.error('Error generating document:', error);
//         throw error; // Rethrow the error to handle it at the calling function or route
//     }
// };

// export default downloader;
