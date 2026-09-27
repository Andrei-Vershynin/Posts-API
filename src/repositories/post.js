const posts = [
  { id: 1, title: 'book Node.js', content: 'Node.js basics for beginners who want to build backend APIs.', author: 'Andrii', category: 'programming' },
  { id: 2, title: 'book TypeScript', content: 'Why TypeScript matters and how it improves JavaScript projects.', author: 'Andrii', category: 'programming' },
  { id: 3, title: 'book Breakfast Ideas', content: 'A few simple ideas to start your morning right.', author: 'Olena', category: 'lifestyle' },
  { id: 4, title: 'book Travel Destinations', content: 'Best places to visit in 2026 for every type of traveler.', author: 'Ivan', category: 'travel' },
  { id: 5, title: 'book JavaScript', content: 'A deep dive into closures and why they matter.', author: 'Andrii', category: 'programming' },
];

let nextId = posts.length + 1;

function getAll(category, take) {
  let result = posts;

  if (category) {
    result = result.filter((post) => post.category === category);
  }

  if (take !== undefined) {
    result = result.slice(0, take);
  }

  return result;
}

function getById(id) {
  return posts.find((post) => post.id === id);
}

function addPost({ title, content, author, category }) {
  return new Promise((resolve) => {
    const newPost = {
      id: nextId++,
      title,
      content,
      author: author || 'Anonymous',
      category: category || 'general',
    };

    posts.push(newPost);
    resolve(newPost);
  });
}

module.exports = { getAll, getById, addPost };