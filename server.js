const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/blogdb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Define a schema for the blog post
const blogPostSchema = new mongoose.Schema({
    title: String,
    content: String
});

// Define a model based on the schema
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

// API endpoint to retrieve blog posts
app.get('/api/posts', (req, res) => {
    BlogPost.find()
        .then(posts => {
            res.json(posts);
        })
        .catch(error => {
            console.error('Error retrieving blog posts:', error);
            res.status(500).json({ error: 'An error occurred' });
        });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
