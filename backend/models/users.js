const mongoose= require('mongoose');
import bcrypt from 'bcrypt';

const UserSchema= new mongoose.Schema({
  name:{ type: String, required: true},
  email:{type: String, required: true},
  password:{type: String, required: true}
});

UserSchema.pre('save', function(next){
  const user = this;

  if(this.isModified('password') ||this.isNew){
    bcrypt.genSalt(10, function(saltError, salt){
      if (saltError){
        return next(saltError);
      } else {
        bcrypt.hash(user.password, sale, function(hashError, hash) {
          if (hashError){
            return next(hashError);
          }
          user.password= hash;
          next();
        });
      }

    });
  } else {
    return next();
  }
});

module.exports=User=mongoose.model('user', UserSchema);