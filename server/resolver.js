import Todo from "./models/Todo.js";
import { gql } from "apollo-server-express";

const resolvers = {
  Query: {
    welcome: () => {
      return "Welcome to ckmobile";
    },
    getTodos: async () => {
      try {
        const todos = await Todo.find({});
        return todos;
      } catch (error) {
        console.error("Error fetching todos:", error);
        throw error; 
      }
    },
    getTodo:async(root,args)=>{
      console.log(args.id);
      try {
        const find=await Todo.findById(args.id);
        return find;

        
      } catch (error) {
        console.log(error)
        
      }
    },
    deleteTodo:async(root,args)=>{
      const {id}=args;
      try {
        const delete_todo=await Todo.findByIdAndDelete(id);
        console.log(delete_todo)
        return "delete hogya h bhai"

        console.log("delete hogya bhai");
      } catch (error) {
        console.log(error);
        
      }
    }
  },
  Mutation:{
    addTodo:async(root,args)=>{
        console.log("AARA H")
        const newTodo=await new Todo({title:args.title,detail:args.detail,date:args.date})
        await newTodo.save();
        console.log("data saved")
        return newTodo

    },
    updateTodo: async (root, args) => {
      const { title, id } = args;
      console.log(title, id);
      console.log("Data yahan tak to aara hai.");
    
      try {

        const find_todo = await Todo.findOneAndUpdate(
          { _id: id },
          { $set: { title: title } },
          { new: true } 
        );
    
        console.log("Hogya update bhai", find_todo);
        return find_todo; 
      } catch (error) {
        console.error("Error updating todo:", error.message);
        throw error; 
      }
    }
    
   

  }
};

export default resolvers;

