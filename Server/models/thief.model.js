const mongoose = require('mongoose');
//inorder to add the random salt secret 
const bcrypt = require('bcryptjs');

var thiefSchema = new mongoose.Schema({
    fullName :{
        type : String
    },
    email : {
        type  : String
    },
    password : {
        type : String
    },
    saltSecret : String
});


//write pre-event to generate salt secret before saving thief data

//before calling save function, pre-event will be getting automatically triggered.
thiefSchema.pre('save',function(next){

    bcrypt.genSalt(10,(err,salt)=>{
        //randomly generating salt secret

        bcrypt.hash(this.password,salt,(err,hash)=>
        {
            this.password=hash;
            this.saltSecret = salt;
            next(); //then only remaining save will be working     
        });
      
      
    });
});

mongoose.model('Thief',thiefSchema);
