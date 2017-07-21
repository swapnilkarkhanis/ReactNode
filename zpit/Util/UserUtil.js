module.exports = {
    verifyUser: function (userName, password){
        //console.log("printing isValidUser?"+userId);
        var result = false;
        if(userName == null || userName == 'undefined' || password == null || password == 'undefined'){
            result = false;
        }else{
            //get user validated against DB credentials
            result = true;
        }
        return result;
    }
};

