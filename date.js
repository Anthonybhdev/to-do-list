exports.getDate = function(){; //exports.getDate value is being assigned to the anymous function()
// module.exports = getDate how to pass this function to the app js if only one function is in this file

const today = new Date();

const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
    };



   return day= today.toLocaleDateString("en-US", options);
  
}

exports.getDay = function(){;


const today = new Date();

const options = {
    weekday: "long",
    };



    return day= today.toLocaleDateString("en-US", options); //the function will return the value for day, 
    //if return wasn't used then the function would return itself on the server (app.js) file
   
}