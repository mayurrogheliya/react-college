const express = require('express')
const url = require('url')
const fs = require('fs')
const { log } = require('console')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//     console.log(req.query.url);
//     const parsedUrl = url.parse(req.query.url);
//     console.log("domain", parsedUrl.hostname);
//     console.log("host", parsedUrl.host);
//     console.log("path", parsedUrl.path);
//     console.log("port", parsedUrl.port);
//     console.log("protocol", parsedUrl.protocol);
//     console.log("parsedUrl", parsedUrl);
//     res.send('Hello World!')
// })

app.get('/readfile', (req, res) => {
    // var data = fs.readFileSync("data.json");
    // res.send(data);
    fs.readFile("data.json", (err, data) => {
        if (err) throw err;
        res.send(JSON.parse(data));
    })
})

function readData() {
    var data = fs.readFileSync("data.json");
    data = JSON.parse(data);
    return data;
}

function saveData(data) {
    fs.writeFileSync("data.json", JSON.stringify(data));
}

app.get("/", (req, res) => {
    console.log(req.query.url);
    var parsedUrl = url.parse(req.query.url);
    if (parsedUrl.protocol && parsedUrl.hostname) {
        var shortcode = Math.floor(Math.random() * 100000);
        var data = readData();
        if (!data[shortcode] && !Object.keys(data).find(key => data[key] == parsedUrl.href)) {
            data[shortcode] = parsedUrl.href;
        }
        saveData(data);
    }
    res.send("Hello World!");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))   