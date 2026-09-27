const postRepository = require('../repositories/post');

async function getPosts(category, take) {
  return postRepository.getAll(category, take);
}

async function getPost(id) {
  return postRepository.getById(id);
}

async function createPost(data) {
  return postRepository.addPost(data);
}

module.exports = { getPosts, getPost, createPost };