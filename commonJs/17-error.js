function MyException(message) {
    this.name = 'MyException';
    this.message = message;
}
 
throw new MyException("Not allowed operation");

function getDayName(dayNumber) {
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thuesday', 'Friday', 'Saturday', 'Sunday'];
    var key = dayNumber - 1;
    if (!days[key]) {
        throw new Error("Invalid day number");
    }
    return days[key];
}
 
try {
    var dayNumber = 10;
    var dayName = getDayName(dayNumber);
} catch (exc) {
    alert("Something went wrong");
}