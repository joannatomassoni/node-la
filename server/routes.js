const ctrl = require('./db/controllers');

/*
signup
login
users/post:id
user:id
posts
*/
module.exports = function(app, express) {
  //get all the posts
  app.get('/posts', ctrl.getPosts);
  //sign up for an account
  app.post('/signup', ctrl.createUser);
  //login to an account/get a single user
  app.get('/user:id', ctrl.getSingleUser);
  //get all users
  app.get('/users', ctrl.getUsers);
  //get single user post
  app.get('/user:id/post', ctrl.getSinglePost);
  // app.post('/users:id', )
};