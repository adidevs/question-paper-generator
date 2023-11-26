import express from 'express';
import bodyParser from 'body-parser';
import questionPaperGenerator from './QuestionPaperGenerator.js';
import downloader from './questionPaperDownloader.js';
import fs from 'fs';

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());

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

app.post('/download', async (req, res) => {
    
    const questions = req.body.questions;
    console.log(questions);

    const fileBuffer = await downloader(questions);

    if (!fileBuffer || fileBuffer.length === 0) {
        return res.status(500).send('Error generating Word document');
    }

     // Set the response headers for downloading the file
     res.setHeader('Content-disposition', 'attachment; filename=questions.docx');
    res.setHeader('Content-type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');

    // Send the buffer as the response
    res.send(fileBuffer);

    //Delete the file from the server after downloading
    
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
}
);

