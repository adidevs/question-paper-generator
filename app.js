import express from 'express';
import bodyParser from 'body-parser';
import questionPaperGenerator from './QuestionPaperGenerator.js';
// import downloader from './questionPaperDownloader.js';
import fs from 'fs';

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render("index");
}
);

app.post('/', (req, res) => {
    console.log(req.body);
    const questions = questionPaperGenerator(req.body);
    res.json(questions);
}
);

// app.get('/download', async (req, res) => {
//     const questions = [
//         { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Easy", marks: 5 },
//         { question: "Chemical formula of water", subject: "Chemistry", topic: "Molecules", difficulty: "Medium", marks: 8 },
//         // Add more questions as needed
//     ]

//     const fileBuffer = await downloader(questions);

//     if (!fileBuffer || fileBuffer.length === 0) {
//         return res.status(500).send('Error generating Word document');
//     }

//      // Set the response headers for downloading the file
//      res.setHeader('Content-disposition', 'attachment; filename=questions.docx');
//     res.setHeader('Content-type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');

//     // Send the buffer as the response
//     res.end(fileBuffer);

//     //Delete the file from the server after downloading
    
// });

app.listen(process.env.PORT || 3000, () => {
    console.log('Question Generator is listening on port 3000!');
}
);

