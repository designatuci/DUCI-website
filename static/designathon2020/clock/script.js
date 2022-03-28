//
//  Variables
//
var lastVisit = ""
var elements = {}
let SCHEDULE = [
    {
        start: 1605340799,
        note: "Time remaining to sign up"
    },{
        start: 1605922200,
        note: "Time until Design-a-thon begins"
    },{
        start: 1606060800,
        note: "Time until submissions are due"
    },{
        start: 1606086000,
        note: "Time until finalists are announced"
    },{
        start: 1606095000,
        note: "Time until finalist case studies are due"
    },{
        start: 1606101300,
        note: "Time until winners are announced"
    }
]
//
//  Main start
//

function initialize() { 

    // MARK: Regular Initialize
    ready()

}




//
//  MARK: Functions
//


function initializeCountdown() {
    updateCountdown()
}
function updateCountdown() {
    getGlobalTime((minutes)=>{
        var time = minutes*60
        var i = 0
        while (SCHEDULE[i].start < time) {
            ++i
            if (i>SCHEDULE.length-1) {
                console.log("done")
                $("#timer .time .days").text("0")
                $("#timer .time .hours").text("0")
                $("#timer .time .minutes").text("0")
                $("#timer .text").text("The event has ended. Thank you for coming!")
                return
            }
        }
        const timeInterval = SCHEDULE[i].start - time
        $("#timer .time").removeClass("loading")
        $("#timer .time .days").text(Math.floor(timeInterval/86400))
        $("#timer .time .hours").text(Math.floor((timeInterval/3600)%24))
        $("#timer .time .minutes").text(Math.floor((timeInterval/60)%60))
        $("#timer .text").text(SCHEDULE[i].note)
        setTimeout(() => {
            updateCountdown()
        }, 60000);
    })
}


function ready(wait = 0) {

    setTimeout(() => {
        $("body").addClass("ready")
    }, 200+wait);

    initializeCountdown()

}


function getGlobalTime(callback) {
    // Minutes since epoch in GMT
    $.post("https://currentmillis.com/time/minutes-since-unix-epoch.php",(data)=>{
        callback(parseInt(data))
    })
}

