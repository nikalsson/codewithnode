const Post = require('../models/post');

module.exports = {
    async postIndex(req, res, next) {
        let posts = await Post.find({}); // find all the posts in the DB
        res.render('posts/index', { posts }) // render all the posts from the DB in views/posts/index.ejs (views is by default as is .ejs)
    },

    postNew(req, res, next) {
        res.render('posts/new');
    },

    async postCreate(req, res, next){
        // use req.body to create a new Post
        let post = await Post.create(req.body.post);
        res.redirect(`/posts/${post.id}`)
    },

    async postShow(req, res, next){
        let post = await Post.findById(req.params.id);
        res.render('posts/show', { post });
    },

    async postEdit(req, res, next){
        let post = await Post.findById(req.params.id);
        res.render('posts/edit', { post });
    },

    async postUpdate(req, res, next){
        let post = await Post.findByIdAndUpdate(req.params.id, req.body.post);
        res.redirect(`/posts/${post.id}`);
    },

    async postDelete(req, res, next){
        let post = await Post.findByIdAndRemove(req.params.id);
        res.redirect('/posts');
    }
}