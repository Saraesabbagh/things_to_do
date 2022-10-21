const mongoose= require('mongoose');

const TodoSchema= new mongoose.Schema({
  title:{ type: String, required: true},
  description:{type: String, required: true},
  done:{type: Boolean, requird: true}
});

module.exports=Todo=mongoose.model('todo', TodoSchema);