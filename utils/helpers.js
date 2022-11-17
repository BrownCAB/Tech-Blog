// helper methoth for timestamp format
module.export = {
    format_time: (date) => {
        // use 'toLocaleTimeString()' method for fomat time as H:MM:SS AM/PM
        return date.toLocaleTimeString();
        },
    };  
    