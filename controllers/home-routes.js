const router = require('express').Router();
const {Post, User} = require('../models')

//TODO: get all posts
router.ger('/', async(res, req) => {
    try{
        //retrive all posts from db
        const dbPostData = await Post.findAll({
            include: {User}
        });
        //serialize data retrieved
        const posts = dbPostDara.map(post => post.get({plain:true}))
        console.log(posts)
        //respond 
        res.render('homepage', { posts });

    } catch (error) {
        res.status(500).json(erro)
    }
})

//TODO: get single posts
router.get('/post/:id', async(res, req) => {
    res.send(`Render signle posts with id ${req.param.id}
    `)
})


//TODO: get login route
router.get('/login', async(res, req) => {
    res.send('Render Login veiw')
})

//TODO: get sign-up route
router.get('/singup', async(res, req) => {
    res.send('Render signup veiw')
})

//TODO: get logout route
router.get('/logout', async(res, req) => {
    res.send('Render logout veiw')
})

module.exports = router;