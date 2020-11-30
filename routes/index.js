const express = require("express");

const router = express.Router();

const firebase = require("firebase");

const db = firebase.firestore();

const blogposts = db.collection("blogposts");

router.get("/", (req, res) => {
  const blogpostsArray = [];
  blogposts
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        blogpostsArray.push(doc.data());
      });
      return res.send(blogpostsArray);
    })
    .catch(function(e) {
      console.warn("error:", e);
      return res.send(error);
    });
});

module.exports = router;
