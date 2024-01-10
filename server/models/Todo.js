import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  detail: String,
  date: Date,
}, {
  timestamps: true,
});

const Todo = mongoose.model('Todo', Schema);

export default Todo;

