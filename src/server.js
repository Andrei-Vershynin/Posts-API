const express = require('express');
const postRouter = require('./routers/post');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(postRouter);

app.use((err, req, res, next) => {
  if (err) {
    return res.status(400).json({ message: 'Invalid request' });
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;