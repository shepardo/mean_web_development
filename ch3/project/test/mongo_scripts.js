use mean
db.posts.insert({"title": "First Post", "user": "bob"})
db.posts.find()
show collections
db.posts.drop()
db.posts.insert({"title": "Second Post", "user": "alice"})
db.posts.update({"user": "alice"}, {"title": "Second Post", "user": "alice"}, {upsert: true})
db.posts.save({"title": "Second Post", "user": "alice"})
db.posts.find()
db.posts.find({})
db.posts.find({"user": "alice"})
db.posts.find({"user": { $in: ["alice", "bob"]}})
db.posts.find({"user": "alice", "commentsCount": { $gt: 10}})
db.posts.find({ $or: [{ "user": "alice"}, {"user": "bob"}]})
db.posts.update({"user": "alice"}, { $set: {"title": "Second Post"}}, { multi: true })
db.posts.save({
  "_id": ObjectId("50691737d386d8fadbd6b01d"),
  "title": "Second Post",
  "user": "alice"
});
db.posts.remove();
db.posts.remove({"user": "alice"}, true);
