module.exports.getDate = getDate;
exports.getDay = getDay;

var getDate = () => { 
let today = new Date();

var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
}
let day = today.toLocaleDateString('en-US', options)
return day;
                    //passes the current day
                    //to the title as ejs
}


function getDay() { 
    let today = new Date();
    
    var options = {
        weekday: 'long',

    }
    
    let day = today.toLocaleDateString('en-US', options)
    return day;
                        //passes the current day
                        //to the title as ejs
    
    }