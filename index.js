const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { readFile, readFileSync, writeFile, writeFileSync } = require('fs');
const app = express();
const port = 3000;
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send("RRRAAAAAHHHHH");
});

app.post('/chat/sendMessage', (req, res) => {
    const data = req.body;
    console.log(req.body);
    res.json({status:200, recieved:data});
})



app.listen(port, () => console.log(`App listening on  http://172.58.209.62:${port}`));