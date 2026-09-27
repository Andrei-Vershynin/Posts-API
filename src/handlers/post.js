const postService = require('../services/post');

const POSITIVE_INTEGER_REGEX = /^\d+$/;

async function getPostsHandler(req, res) {
    const { category, take } = req.query;

        if (category !== undefined && typeof category !== 'string') {
            return res.status(422).json({ message: 'Query parameter "category" must be a string' });
        }

        if (take !== undefined && (!POSITIVE_INTEGER_REGEX.test(take) || Number(take) <= 0)) {
            return res.status(422).json({ message: 'Query parameter "take" must be a positive integer' });
        }

        const posts = await postService.getPosts(category, take ? Number(take) : undefined);

        return res.status(200).json(posts);
}

async function getPostByIdHandler(req, res) {
    const { id } = req.params;

        if (!POSITIVE_INTEGER_REGEX.test(id)) {
            return res.status(422).json({ message: 'Route parameter "id" must be a positive integer' });
        }

        const post = await postService.getPost(Number(id));

        if (!post) {
            return res.status(404).json({ message: `Post with id ${id} not found` });
        }

        return res.status(200).json(post);
}

async function createPostHandler(req, res) {
    const body = req.body || {};
    const { title, content, author, category } = body;

        if (!title || typeof title !== 'string' || !title.trim()) {
            return res.status(422).json({ message: 'Field "title" is required and must be a non-empty string' });
        }

        if (!content || typeof content !== 'string' || !content.trim()) {
            return res.status(422).json({ message: 'Field "content" is required and must be a non-empty string' });
        }

        if (author !== undefined && typeof author !== 'string') {
            return res.status(422).json({ message: 'Field "author" must be a string' });
        }

        if (category !== undefined && typeof category !== 'string') {
            return res.status(422).json({ message: 'Field "category" must be a string' });
        }

  const newPost = await postService.createPost({ title, content, author, category });

  return res.status(201).json(newPost);
}

module.exports = { getPostsHandler, getPostByIdHandler, createPostHandler };