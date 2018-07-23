// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");

// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("hbs", exphbs({
    defaultLayout: "main",
    extname: ".hbs"
}));
app.set("view engine", "hbs");

// Data
var articles = [{
        title: "Why your Web Development sucks",
        author: "Clic Bate",
        link: "https://www.linkedin.com/in/paul-laird/",
        timestamp: "4:00 PM ET",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum tortor tellus, maximus tincidunt erat tincidunt ultricies. Vestibulum sodales enim diam, eu ultrices quam suscipit et. In in justo tincidunt, ornare odio eget, tempus tortor. Nulla facilisi. Cras odio lacus, finibus et tincidunt vel, bibendum eget urna."
    },
    {
        title: "8 things you think you understand about Web Development but you really don't",
        author: "Clic Bate",
        link: "https://www.linkedin.com/in/paul-laird/",
        timestamp: "4:00 PM ET",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum tortor tellus, maximus tincidunt erat tincidunt ultricies. Vestibulum sodales enim diam, eu ultrices quam suscipit et. In in justo tincidunt, ornare odio eget, tempus tortor. Nulla facilisi. Cras odio lacus, finibus et tincidunt vel, bibendum eget urna."
    },
    {
        title: "6 incredible Web Development hacks",
        author: "Clic Bate",
        link: "https://www.linkedin.com/in/paul-laird/",
        timestamp: "4:00 PM ET",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum tortor tellus, maximus tincidunt erat tincidunt ultricies. Vestibulum sodales enim diam, eu ultrices quam suscipit et. In in justo tincidunt, ornare odio eget, tempus tortor. Nulla facilisi. Cras odio lacus, finibus et tincidunt vel, bibendum eget urna."
    },
    {
        title: "6 reasons to be addicted to JavaScript",
        author: "Clic Bate",
        link: "https://www.linkedin.com/in/paul-laird/",
        timestamp: "4:00 PM ET",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum tortor tellus, maximus tincidunt erat tincidunt ultricies. Vestibulum sodales enim diam, eu ultrices quam suscipit et. In in justo tincidunt, ornare odio eget, tempus tortor. Nulla facilisi. Cras odio lacus, finibus et tincidunt vel, bibendum eget urna."
    },
    {
        title: "What the government doesn't want you to know about JavaScript",
        author: "Clic Bate",
        link: "https://www.linkedin.com/in/paul-laird/",
        timestamp: "4:00 PM ET",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum tortor tellus, maximus tincidunt erat tincidunt ultricies. Vestibulum sodales enim diam, eu ultrices quam suscipit et. In in justo tincidunt, ornare odio eget, tempus tortor. Nulla facilisi. Cras odio lacus, finibus et tincidunt vel, bibendum eget urna."
    },
    {
        title: "Why JavaScript is destroying America",
        author: "Clic Bate",
        link: "https://www.linkedin.com/in/paul-laird/",
        timestamp: "4:00 PM ET",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum tortor tellus, maximus tincidunt erat tincidunt ultricies. Vestibulum sodales enim diam, eu ultrices quam suscipit et. In in justo tincidunt, ornare odio eget, tempus tortor. Nulla facilisi. Cras odio lacus, finibus et tincidunt vel, bibendum eget urna."
    },
    {
        title: "5 BS facts about Web Development that everyone thinks are true",
        author: "Clic Bate",
        link: "https://www.linkedin.com/in/paul-laird/",
        timestamp: "4:00 PM ET",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum tortor tellus, maximus tincidunt erat tincidunt ultricies. Vestibulum sodales enim diam, eu ultrices quam suscipit et. In in justo tincidunt, ornare odio eget, tempus tortor. Nulla facilisi. Cras odio lacus, finibus et tincidunt vel, bibendum eget urna."
    }
];

// Routes

// Returns a single item using an id
app.get("/articles/:name", function (req, res) {
    for (var i = 0; i < articles.length; i++) {
        if (articles[i].name === req.params.name) {
            return res.render("article", articles[i]);
        }
    }
});

// Returns all the items - This route should also scrape prior
app.get("/", function (req, res) {
    res.render("index", {
        articles: articles
    });
});

// Returns all the items (used ased for UX so path is not empty)
app.get("/articles", function (req, res) {
    res.render("index", {
        articles: articles
    });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});