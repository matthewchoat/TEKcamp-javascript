console.log("time to start the timer!");

var timer = { //create the main timer function
    secondsTot: 0, //initialize the seconds total count to zero
    start: function() { //create the Start button function
        if (!this.interval) { //if statement if Not this interval
            var self = this; //declare self variable assign to this

            function display(val) { return val > 9 ? val : "0" + val; } //create the display function to show the time in minutes/seconds
            this.interval = setInterval(function() { //assign this.interval to a set interval based on a new function
                self.secondsTot += 1; //increment the seconds total for each interval

                document.getElementById("min").innerHTML = display(Math.floor(self.secondsTot / 60 % 60));
                document.getElementById("sec").innerHTML = display(parseInt(self.secondsTot % 60));
            }, 1000);
        }
    },

    reset: function() {
        timer.secondsTot = null;
        clearInterval(this.interval);
        document.getElementById("min").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";
        delete this.interval;
    },
    stop: function() {
        clearInterval(this.interval);
        delete this.interval;
    },
};


document.getElementById("startBtn").addEventListener("click", function() { timer.start(); });
document.getElementById("stopBtn").addEventListener("click", function() { timer.stop(); });
document.getElementById("resetBtn").addEventListener("click", function() { timer.reset(); });