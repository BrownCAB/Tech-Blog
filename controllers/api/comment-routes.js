//Imports and Requirements
const router = require('express').Router();
const { Post, User, Comment} = require('../../models');

// Create Comment
router.post('/:id', (req, res) => {
    // Check the session to make sure user is logged in
    Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      // use the id from the session
      user_id: req.session.user_id,
    })
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });

// Update Comment
router.put('/:id', (req, res) => {
    Comment.update(
      {
        comment_text: req.body.comment_text,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No comment found with this user id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// Delete Comment
router.delete('/:id', (req, res) => {
    Comment.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No Comment found with this user id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;