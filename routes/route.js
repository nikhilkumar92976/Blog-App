const express = require('express');
const router = express.Router();

// Importing controllers
const {createComment} = require('../controllars/commentController');
const {createLike, deleteLike} = require('../controllars/likeController');
const {createPost,getPosts} = require('../controllars/postController');

//creating routs
router.post('/comments/create',createComment);
router.post('/posts/create',createPost);
router.get('/posts',getPosts);
router.post('likes/like',createLike);
router.post('/likes/unlikes',deleteLike);
