const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuid = require("uuid");
var mysql = require('mysql');
const fs = require("fs");
const app = express();
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());

var mysqlConnection=mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'legend_facts'
});

mysqlConnection.connect((err)=>{
  if(!err)
    console.log('DB connection succeded.');
  else
    console.log('DB connection failed \n Error: '+JSON.stringify(err,undefined,2));
});

app.get('/legend_facts', (req, res) => {
    var faq = readJSONFile();
    res.send(faq);
})



app.get('/legend_facts/:id', (req, res) => {
    const faq = readJSONFile();
    let faq1;
    var id = req.params.id;

    if (!faq) res.status(404).send('Nu a putut fi gasit un fact cu id-ul specificat')

    for(let i = 1; i < faq.length; i++) {
        if(faq[i].id === id) {
            faq1 = faq[i];
            break;
        }
    }
    res.send(faq1);
})




app.post('/legend_facts', (req, res) => {
    var faq1 = req.body;
    var faq = readJSONFile();
    faq1.id = uuid.v1();
    faq.push(faq1);
    writeJSONFile(faq);
    res.send(faq1);
})



app.delete('/legend_facts/:id', (req, res) => {
    var id = req.params.id;
    var faq = readJSONFile();
    var newFaq = [];

    for(let i = 0; i < faq.length; i++) {
        if(faq[i].id !== id) {
            newFaq.push(faq[i]);
        }
    }

    writeJSONFile(newFaq);
})



app.put('/legend_facts/:id', (req, res) => {
    var id = req.params.id;
    var newFaq1 = req.body;

    var faq = readJSONFile();

    for(let i = 0; i < faq.length; i++) {
        if(faq[i].id === id) {
            faq[i] = newFaq1;
        }
    }
    writeJSONFile(faq);
    res.send(faq);
})




function readJSONFile() {
  return JSON.parse(fs.readFileSync("db.json"))["legend_facts"];
}


function writeJSONFile(content) {
  fs.writeFileSync(
    "db.json",
    JSON.stringify({ legend_facts: content }),
    "utf8",
    err => {
      if (err) {
        console.log(err);
      }
    }
  );
}

app.listen("3000", () =>
  console.log("Server started at: http://localhost:3000")
);
