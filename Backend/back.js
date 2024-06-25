const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { spawn } = require('child_process');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let data = "";

app.get('/', (req, res) => {
    res.send("value is: " + data.text);
});

app.post('/', (req, res) => {
    data = req.body;
    console.log('Data received:', data);

    const inputText = req.body.text;
    const pythonProcess = spawn('python3', ['model.py', inputText]);

    pythonProcess.stdout.on('data', (data) => {
        const valueFromPython = data.toString();
        console.log(valueFromPython.trim())
        res.send({ status: 'success', value: valueFromPython.trim() });
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`Error: ${data}`);
        res.status(500).send({ status: 'error', message: 'Failed to fetch value from Python script' });
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});