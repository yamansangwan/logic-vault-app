// posting logics

const postModel = require("../models/post.model")

async function createPost(req, res) {

        const { title , note, category, status, todo } = req.body

        const newPost = await postModel.create({
            title, note , category, status, todo
        })
    

        res.status(201).json({
            message : "Post Created Successfully",
            post : newPost
        })

        
}

async function updatePost(req, res) {

//    const { title , note, category, status, todo } = req.body

   const updatedPost = await postModel.findByIdAndUpdate(
    { _id : req.params.id }, {
    title: req.body.title,
    note: req.body.note,
    category: req.body.category,
    status: req.body.status,
   })

    res.status(200).json({
        message: "Post Updated Successfully",
        post: updatedPost
    });

}

async function deletePost(req, res) {
    // await postModel.findByIdAndDelete({ _id: req.params.id })
    const deletedPost = await postModel.findByIdAndDelete(req.params.id)

    // console.log(deletedPost)

    res.status(200).json({
        message: "Post Deleted Successfully",
    }
)
}


async function getPosts(req , res) {
    const fetchedPosts = await postModel.find()
    res.status(200).json({
        message : "fetched posts",
        posts : fetchedPosts
    })
} 

module.exports = { createPost, updatePost, deletePost, getPosts }