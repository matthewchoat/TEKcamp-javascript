console.log("time to start the timer!");

let timer = { //create the main timer function
    secondsTot: 0, //initialize the seconds total count to zero
    start: function() { //create the Start button
        if (!this.interval) { //if statement if Not this interval (keep from looping indefinitely)
            let self = this; //declare self variable assign to this

            function display(val) { return val > 9 ? val : "0" + val; } //create the ternary function function to show the time in minutes/seconds if value is under 10sec
            this.interval = setInterval(function() { //assign this.interval to a set interval based on a new function
                self.secondsTot += 1; //increment the seconds total for each interval

                document.getElementById("min").innerHTML = display(Math.floor(self.secondsTot / 60 % 60)); //using Math.floor primitive, find the remainder of 60/60 and divide by the current total seconds. Display as minute vaule.
                document.getElementById("sec").innerHTML = display(parseInt(self.secondsTot % 60)); //using parseInt primitive, display the remainder of 60 by the current total seconds.
            }, 1000); //set interval to 1000 ms, 1 minute.
        }
    },

    reset: function() { //create reset function
        timer.secondsTot = null; //set the total seconds to null
        clearInterval(this.interval); //clear the current interval
        document.getElementById("min").innerHTML = "00"; //set the min display to zero
        document.getElementById("sec").innerHTML = "00"; //set the sec display to zero
        delete this.interval; //delete the current interval
    },
    stop: function() { //create the stop function
        clearInterval(this.interval); //clear the current interval
        delete this.interval; //delete the current interval
        //this function is very similar to reset, but it leaves the current min/sec display instead of reseting to zero
    },
};


document.getElementById("startBtn").addEventListener("click", function() { timer.start(); }); //link the start button
document.getElementById("resetBtn").addEventListener("click", function() { timer.reset(); }); //link the reset button
document.getElementById("stopBtn").addEventListener("click", function() { timer.stop(); }); //link the stop button