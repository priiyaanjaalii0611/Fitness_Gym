var mongoose=require('mongoose');

// create an schema
var userSchema = new mongoose.Schema({
            fullname: String,
            email: String,
            password: String
        });

userTable=mongoose.model('registers',userSchema);
        
module.exports={
     
     fetchData:function(callback){
        var userData=userTable.find({});
        userData.exec(function(err, data){
            if(err) throw err;
            return callback(data);
        })       
     }
}
