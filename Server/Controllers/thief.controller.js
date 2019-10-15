const mongoose = require('mongoose');
const Thief = mongoose.model('Thief');
var ObjectId = require('mongoose').Types.ObjectId;


module.exports.register = (req,res,next) =>{

    var thief = new Thief();
    console.log('FullName:' + req.body.fullName);
    console.log('Email:' + req.body.email);
    console.log('Password:' + req.body.password);
    thief.fullName = req.body.fullName;
    thief.email = req.body.email;
    thief.password = req.body.password;
    console.log('Thief name:' + thief.fullName);
    console.log('Thief Email:' + thief.email);
    console.log('Thief password:' + thief.password);

    thief.save((err,doc) =>
    {
        if(!err)
        {
            res.send(doc);
        }
        else
        {
           // res.send(err);
        }
    });
    
    console.log('Successfully called register function within thief.controller.register');
}

module.exports.getThieves = (req,res,next)=>
{
    
    Thief.find((err,docs)=>{

        if(!err) res.send(docs);
        else 
        {
            console.log('Error in retrieving information:' + JSON.stringify(err,undefined,2));
        }
    });
}

module.exports.updateThiefByID = (req,res,next)=>
{
    if(!ObjectId.isValid(req.params.id))
    {
        console.log('object to be updated not found');
    }
    var thief = {
        fullName  : req.body.fullName,
        email : req.body.email,
        password : req.body.password
    };
    
    Thief.findByIdAndUpdate(req.params.id,{$set:thief},(err,docs)=>
    {
            if(!err)
            {
                console.log('successfully updated by ID:');
                res.send(docs);
            }
            else{
                res.status(400);
            }
           
    });

}

module.exports.deleteThiefByID = (req,res,next)=>
{
    console.log('im in deleteThiefByID');
    if(!ObjectId.isValid(req.params.id)){
        console.log('object to be deleted not found');}

    Thief.findByIdAndRemove(req.params.id,(err,docs)=>{
        console.log('find ID and remove:' + req.params.id);
        if(!err) 
        {
            console.log('successfully deleted ThiefDetails:' + req.params.id);
            res.send(docs);
        }
        else
        {
            console.log('not deleted ThiefDetails:' + req.params.id);
        res.status(400);
        }
        

    });
}