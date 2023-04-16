let showtime = document.getElementById("showtime")
    let dan = new Date()
    let but1 = document.getElementById("but1");
    let but2 = document.getElementById("but2");
    but1.innerHTML = dan.getHours();
    but2.innerHTML = dan.getMinutes(); 
    let network = document.getElementById("network")
    let amount = document.getElementById("amount")
    let show = document.getElementById("result")
    let show1 = document.getElementById("result1")
    let input1 = document.getElementById("pin")
    let cardpin = Math.floor(Math.random() * 1000000000000000)

    document.getElementById("container").style.display = "none"
    function call() {
        document.getElementById("container").style.display = "block"
        document.getElementsById("phonecall").style.display = "none"

    }

    function generate() {
        if (network.value === "empty" && amount.value === "empty1") {
            alert("Select Your Network Provider and Airtime Amount")
        } else if (amount.value === "empty1") {
            alert("Select Airtime Amount")
        } else if (network.value === "empty") {
            alert("Select Your Network Provider")

        } else {
            show.innerHTML = cardpin;
            console.log(cardpin);
        }
    }

    function load() {
        if (network.value === "GLO" && input1.value.startsWith("*123*") && input1.value.includes(cardpin) && input1.value.endsWith("#")) {
            alert("You have successfully recharge" + " " + "#" + amount.value + " " + network.value)
        }
        else if (network.value === "MTN" && input1.value.startsWith("*555*") && input1.value.includes(cardpin) && input1.value.endsWith("#")) {
            alert("You have successfully recharge" + " " + "#" + amount.value + " " + network.value)
        }
        else if (network.value === "AIRTEL" && input1.value.startsWith("*126*") && input1.value.includes(cardpin) && input1.value.endsWith("#")) {
            alert("You have successfully recharge" + " " + "#" + amount.value + " " + network.value)
        }
        else if (network.value === "9MOBILE" && input1.value.startsWith("*222*") && input1.value.includes(cardpin) && input1.value.endsWith("#")) {
            alert("You have successfully recharge" + " " + "#" + amount.value + " " + network.value)
        } else {
            alert("The recharge card is invalid")
        }
    }

    let cam_screen = document.getElementById("cam_screen");
    let phframe = document.getElementById("phframe");
    let iccon = document.getElementById("iccon");
    let video = document.getElementById("video");
    let canvas = document.getElementById("canvas")
    cam_screen.style.display = "none";

    async function startCam() {
        iccon.style.display = "none"
        cam_screen.style.display = "block"
        let thepix = await navigator.mediaDevices.getUserMedia({ audio: false, video: true })
        video.srcObject = thepix
    }

    function takepix() {
        canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
        let img_link = canvas.toDataURL('image/jpg');
        console.log(img_link);
    }