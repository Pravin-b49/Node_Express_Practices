const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    fs.readdir("./file", (err, files) => {
        if (err) return res.send("Error reading folder");
        res.render("index", { files });
    });
});

app.get('/file/:filename', (req, res) => {
    fs.readFile(`./file/${req.params.filename}`, "utf-8", (err, filedata) => {
        if (err) return res.send("File not found");
        res.render("show", { filename: req.params.filename, filedata });
    });
});

app.get('/edit/:filename', (req, res) => {
    res.render('edit', { filename: req.params.filename });
});

app.get('/delete/:filename', (req, res) => {
    res.render('delete', { filename: req.params.filename });
});

app.post('/delete/:filename', (req, res) => {
    const file = req.params.filename;
    fs.unlink(`./file/${file}`, (err) => {
        if (err) {
            console.error("Error deleting file:", err);
        }
        console.log(`${file}`, "File Deleted Successfully.!");
        res.redirect("/");
    });
});

app.post('/edit', (req, res) => {
    fs.rename(`./file/${req.body.previous}`, `./file/${req.body.new}`, (err) => {
        if (err) console.log(err);
        res.redirect("/");
    });
});

app.post('/create', (req, res) => {
    const name = req.body.title.split(' ').join('') + ".txt";
    fs.writeFile(`./file/${name}`, req.body.details, (err) => {
        if (err) console.log(err);
        res.redirect('/');
    });
});

app.listen(3000, () => {
    console.log("Server is running on Port 3000");
});
