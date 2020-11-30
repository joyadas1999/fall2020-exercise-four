const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

const firebaseConfig = {
  apiKey: "AIzaSyD9El5PdwlQZb4fr3LuFF053Bj7GDbd860",
  authDomain: "exercise-four-fall2020-c966a.firebaseapp.com",
  databaseURL: "https://exercise-four-fall2020-c966a.firebaseio.com",
  projectId: "exercise-four-fall2020-c966a",
  storageBucket: "exercise-four-fall2020-c966a.appspot.com",
  messagingSenderId: "522067838227",
  appId: "1:522067838227:web:2f35c212a606febd5046e6"
};

const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index.js");
const postRoute = require("./routes/post.js");
const createRoute = require("./routes/createBlogpost.js");

app.use("/", indexRoute);
app.use("/post", postRoute);
app.use("/create", createRoute);

app.listen(port, () =>
  console.log(`Exercise Four is running at localhost: ${port}`)
);
