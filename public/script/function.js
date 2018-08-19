
//declaration
var curmins;
var cursecs;
  var vid = document.getElementById('my_video');
  var btn = document.getElementById('playpausebtn');
  var seekSlider = document.getElementById('seekslider');
  var curtimetext = document.getElementById('curtimetext');
  var durtimetext = document.getElementById('durtimetext');
  var contentName = document.getElementById('contentName');
  var contentURL  = document.getElementById('contentURL');
  var contents = document.getElementById('3');

  //event listener
  btn.addEventListener("click",playPause,false);
  seekSlider.addEventListener("change",vidSeek,false);
  vid.addEventListener("timeupdate",seektimeupdate,false);

function initializePlayer(){

  function content(){
    contentName.innerHTML = "Name: "+videoData.name;
    contentURL.innerHTML = "Video URL: "+videoData.url;
  }

  content();
  displayContentTimely();

}



function displayContentTimely(){
  if (curmins==0 && cursecs==10) {
    contents.innerHTML = "Content: "+videoData.content1;
  }
  if (curmins==0 && cursecs==20) {
    contents.innerHTML = "Content: "+videoData.content2;
  }
}




function seektimeupdate(){
var nt = vid.currentTime * (100/vid.duration);
seekslider.value = nt;
curmins = Math.floor(vid.currentTime/60);
cursecs = Math.floor(vid.currentTime - curmins*60);
var durmins = Math.floor(vid.duration/60);
var dursecs = Math.round(vid.duration - durmins*60);
if(cursecs < 10){
  cursecs = "0"+cursecs;
}
if (dursecs < 10) {
  dursecs = "0"+dursecs;
}
curtimetext.innerHTML = curmins+":"+cursecs;
durtimetext.innerHTML = " / "+durmins+":"+dursecs;
displayContentTimely();
}


function vidSeek(){
var seekTo = vid.duration * (seekSlider.value/100);
vid.currentTime = seekTo;
displayContentTimely();

}

function playPause() {
    if (vid.paused) {
      vid.play();
      btn.innerHTML = "Eduflix Pause";
    }
    else {
      vid.pause();
      btn.innerHTML = "Eduflix Play";
    }

}
window.onload = initializePlayer;
