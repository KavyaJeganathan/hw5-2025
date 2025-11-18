var video;

// PAGE LOAD
window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
	video.load();
});

// PLAY BUTTON
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = (video.volume * 100) + "%";
});

// PAUSE BUTTON
document.querySelector("#pause").addEventListener("click", function () {
    console.log("Pause Video");
	video.pause();
});

// SLOW DOWN
document.querySelector("#slower").addEventListener("click", function () {
	console.log("New video speed:", video.playbackRate);
    video.playbackRate =  video.playbackRate * 0.9;
});

// SPEED UP
document.querySelector("#faster").addEventListener("click", function () {
	console.log("New video speed:", video.playbackRate);
    video.playbackRate = video.playbackRate / 0.9;
});

// SKIP AHEAD
document.getElementById("skip").addEventListener("click", function () {
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }else{
		video.currentTime = video.currentTime + 10;
	}
    console.log("Current video location:", video.currentTime);
});

//MUTE
document.getElementById("mute").addEventListener("click", function () {
    if (video.muted === false) {
        video.muted = true;
        this.innerHTML = "Unmute";
    } else {
        video.muted = false;
        this.innerHTML = "Mute";
    }
});

//VOLUME SLIDER
document.getElementById("slider").addEventListener("input", function () {
    video.volume = this.value / 100;
    document.getElementById("volume").innerHTML = (video.volume * 100) + "%";
});

//STYLED
document.getElementById("vintage").addEventListener("click", function () {
    video.classList.add("oldSchool");
});

//ORIGINAL
document.getElementById("orig").addEventListener("click", function () {
    video.classList.remove("oldSchool");
});