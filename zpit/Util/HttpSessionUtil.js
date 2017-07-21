module.exports = {
    isValidUser: function (userId){
        //console.log("printing isValidUser?"+userId);
        var result = false;
        if(userId == null || userId == 'undefined'){
            result = false;
        }else{
            result = true;
        }
        return result;
    }
};

