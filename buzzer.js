// JS script of the buzzer

var canvas = document.getElementById("canvas")
        var ctx = canvas.getContext('2d')
        const TIMER_DURATION = 8

        
        var actualtime = TIMER_DURATION
        var firstPress = true
        var isRunning = false
        // Objets for the sound
        var bip = new Audio('bip.mp3')
        var buzzSound = new Audio('buzz.mp3')


        function restart() {
            console.log("restart")
            //beep
            buzzSound.pause()
            buzzSound.currentTime = 0;
            bip.play()

            actualtime = TIMER_DURATION
            if (!isRunning || firstPress){
                isRunning = true
                main()
                firstPress = false
            } 
        
        }
        

        function main() {
            //console.log("main")
            if (actualtime > 0){
                -- actualtime
                setTimeout(main, 1000)
            }else{
                console.log("BUZZ")
                isRunning = false
                //buzz, we need a sound   
                buzzSound.play()
            }
                

            
        }

        function init() {
            ctx.arc(200,200, 150, 0, 2 * Math.PI)
            ctx.fillStyle = "red"
            ctx.fill()
        }

        init()
        