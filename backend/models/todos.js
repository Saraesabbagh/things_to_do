const mongoose= require('mongoose');

const TodoSchema= new mongoose.Schema({
  user_id:{type: String, required:true },
  title:{ type: String, required: true},
  description:{type: String, required: true},
  done:{type: Boolean, required: true}
});

module.exports=Todo=mongoose.model('todo', TodoSchema);