import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  term: String,
  minRating: Number,
  minViews: Number,
  addPlaylistMark: String,
  dateTimeUpload: String,
  videosLength: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
