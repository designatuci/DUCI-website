//
//  Variables
//
var startTime = 0 
var lastVisit = ""
var elements = {}
var gl
var w,h = 0
var run = false
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
    }
]
//
//  Main start
//

function initialize() { 

    // MARK: Regular Initialize
    $("#hero").height( $(window).height() )

    initializeCountdown()

    lastVisit = Cookie.get("lastVisitSpecial")
    if ( lastVisit == "" || parseInt(lastVisit) + 864000 <= time() ) {
        $("body").addClass("longIntro")
        setTimeout(() => {
            $("body").addClass("expand")
        }, 1200);
        ready(200)
    } else {
        $("body").addClass("expand")
        ready()
    }
    Cookie.set("lastVisitSpecial",time())


    $(".metalink").click(function (e){
        scrollTo = $(e.target).attr("scrollTo")
        if (scrollTo != "#hero") {
            pageScrolled = true
            $("body").addClass("scrolled")
        } else {
            pageScrolled = false
            $("body").removeClass("scrolled")
        }
        if ( 600 < Math.abs($('html').scrollTop() - $(scrollTo).offset().top) ) {
            // fancy scroll
            if ( 0 < $('html').scrollTop() - $(scrollTo).offset().top) {
                // downwards
                $('html').scrollTop( $(scrollTo).offset().top + 64 )
                $('html').animate({
                    scrollTop: $(scrollTo).offset().top - 48
                }, duration=300 )
            } else {
                // upwards
                $('html').scrollTop( $(scrollTo).offset().top - 64 )
                $('html').animate({
                    scrollTop: $(scrollTo).offset().top - 48
                }, duration=300)
            }
        } else {
            // simple scroll
            $('html').animate({
                scrollTop: $(scrollTo).offset().top - 48
            }, 300)
        }
    });



    // Initialize Shader
    elements.view = document.getElementById("view")
    gl = elements.view.getContext("webgl")
    try {
        gl = elements.view.getContext("webgl")
    } catch (e) {
        elements.view.remove()
        return
    }
    elements.gl = gl

    layout()

    // Set preferences
    gl.clearColor( 1.0, 1.0, 1.0, 1.0)
    gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT)
    //gl.enable(gl.DEPTH_TEST)
    //gl.enable(gl.CULL_FACE)

    // Create shaders
    var vertexShader = gl.createShader(gl.VERTEX_SHADER)
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(vertexShader, VertexShaderText)
    gl.shaderSource(fragmentShader, FragmentShaderText)
    gl.compileShader(vertexShader)
    gl.compileShader(fragmentShader)
    // Create program
    var program = gl.createProgram()
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    gl.useProgram(program)

    // View vertice Create buffer
    const Verticies = new Float32Array([
        -1.0, -1.0, 
         1.0, -1.0, 
        -1.0,  1.0, 
        -1.0,  1.0, 
         1.0, -1.0, 
         1.0,  1.0
    ])

    var vertexBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, Verticies, gl.STATIC_DRAW)

    var positionAttribLocation = gl.getAttribLocation(program, "vertex")
    gl.vertexAttribPointer(
        positionAttribLocation,    // Attribute location
        2,                  // Number of elements per attribute
        gl.FLOAT,           // Type of elements
        gl.FALSE,
        2 * Float32Array.BYTES_PER_ELEMENT, // Size of single vertex
        0                                   // offset from beginning of a single vertex to this attribute
    )
    gl.enableVertexAttribArray(positionAttribLocation)

    // MARK: Set uniforms
    elements.aspectRatio = h/w
    elements.screenUniformIndex = gl.getUniformLocation(program, "aspectRatio")
    gl.uniform1f(elements.screenUniformIndex, elements.aspectRatio)

    var T = 0
    var TUniformIndex = gl.getUniformLocation(program, "time")

    // MARK: Main render loop
    elements.loop = ()=>{ elements.frames += 1

        T = Math.min((performance.now()-100.0-startTime) * 0.001, 7.0)
        gl.uniform1f(TUniformIndex, T)

        gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT)
        gl.drawArrays(gl.TRIANGLES, 0, 6)

        if (run&&T==7) {
            RESOLUTION = 2.0
            stop()
            layout()
            elements.loop()
        }

        if (run) requestAnimationFrame(elements.loop)
    }

    // elements.loop()
    startTime = performance.now()
    start()



}




//
//  MARK: Functions
//

function start() {
    run = true
    requestAnimationFrame(elements.loop)
}

function stop() {
    run = false
}

function time() {
    return Math.round(new Date() / 1000);
}

resizeCooldown = false
function resize() {
    $("#hero").css('min-height', $(window).height())
    layout()
    if(!run) {
        if (!resizeCooldown) {
            elements.loop()
            resizeCooldown = true
            setTimeout(() => {
                layout()
                elements.loop()
                resizeCooldown = false
            }, 500);
        }
    }
}

function initializeCountdown() {
    // updateCountdown()
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
                $("#timer .text").text(" ")
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

}


function getGlobalTime(callback) {
    // Minutes since epoch in GMT
    $.post("https://currentmillis.com/time/minutes-since-unix-epoch.php",(data)=>{
        callback(parseInt(data))
    })

}


var pageScrolled = false
function scroll() {
    
    s = window.pageYOffset

    if (s > 50) {
        if (!pageScrolled) {
            pageScrolled = true
            $("body").addClass("scrolled")
        }
        if (run && s > window.innerHeight) {
            stop()
        }
    } else {
        if (pageScrolled) {
            pageScrolled = false
            $("body").removeClass("scrolled")
        }
        if (!run && s < window.innerHeight) {
            start()
        }
    }

}


function layout() {
    w = window.innerWidth * RESOLUTION
    h = window.innerHeight * RESOLUTION
    elements.view.width = w
    elements.view.height = h
    gl.viewport(0,0,w,h)
    if (elements.aspectRatio) {
        elements.aspectRatio = h/w
        gl.uniform1f(elements.screenUniformIndex, elements.aspectRatio)
    }

}


//
//  Libraries
//

class Cookie {
    static set(name,value,exDays=-1) {
        if (exDays>0) {
            var d = new Date()
            d.setTime(d.getTime() + (exDays*24*60*60*1000))
            var expires = "expires="+ d.toUTCString()
            document.cookie = name + "=" + value + ";" + expires + ";path=/"
        } else {
            document.cookie = name + "=" + value + ";path=/"
        }
    }
    static get(name) {
        var name = name + "="
        var decodedCookie = decodeURIComponent(document.cookie)
        var ca = decodedCookie.split(';')
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i]
            while (c.charAt(0) == ' ') {
            c = c.substring(1)
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length)
            }
        }
        return ""
    }
    static clear() {
        document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    }
    static delete(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}