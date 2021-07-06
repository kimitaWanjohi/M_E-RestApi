const express = require('express');
const Post = require('../models/Post')
const router = express.Router();
 
// GETTING ALL POSTS
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});


// GETTING A SINGLE POST 

router.get('/:postId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId)
        res.json(post);
    }catch(err){
        res.json({messsage: err})
    }
})

// POSTING A POST
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
        const createdPost = await post.save()
        res.json(createdPost)
    }catch(err){
        res.json({ message: err})
    }
})

// UPDATE A POST 

router.patch('/:postId', async (req, res) => {
    try{
        await Post.updateOne(
            {_id: req.params.postId},
            { $set: {title: req.body.title, description: req.body.description}}
        )
        res.json({
            "success": true
        })
    }catch(err){
        res.json({
            message: err
        })
    }
})

// DELETE A POST 
router.delete('/:postId', async (req, res) => {
    await Post.remove({_id: req.params.postId})
    res.json({"success": "true"});
})

module.exports = router; 