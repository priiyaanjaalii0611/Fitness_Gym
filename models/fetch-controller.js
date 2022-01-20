var fetchModel= require('./fetch-model');
module.exports={
 
    fetchData:function(req, res){
      
      fetchModel.fetchData(function(data){
          res.render('user-table',{userData:data});
      })
    }
}