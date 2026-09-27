const { Router } = require('express');
const { getPostsHandler, getPostByIdHandler, createPostHandler } = require('../handlers/post');

const router = Router();

router.get('/posts', getPostsHandler);
router.get('/posts/:id', getPostByIdHandler);
router.post('/posts', createPostHandler);

module.exports = router;