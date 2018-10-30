//Jobs
//https://jobs.lever.co/stickermule/0f245285-54e4-4002-90d8-fe4389234eea/apply
//details
//https://www.stickermule.com/career/0f245285-54e4-4002-90d8-fe4389234eea

/*Selector*/ g=(k)=>{return document.querySelector(k)};
/*Selector All*/ gA=(k)=>{return document.querySelectorAll(k)};
/*//Create Elemet */
create=(k)=>{return document.createElement(k)}; /*Append Child Element*/
append=(k,l)=>{return k.appendChild(l)}; /*Insert Element Before*/
iB=(j,k,l)=>{return j.insertBefore(k,l)};
// hide=(k)=>{return k.style.display = "none"}
function hidee(k,l) {
  k = document;
  l =  "none";
  return k.style.display = l;
}
let div = g(".box");
div.addEventListener("click",e=>{});
const val = g("#file_p");
// for (var i = 0; i < val.files.length; i++) {
val.addEventListener("change",e=>{
//Drag multiple files using a for loop condition
for (var i = 0; i < val.files.length; i++) {

 //get a file one by one
var filupld = val.files[i];
//Get the name of a file
let imgAlt = filupld.name;
/*Let' store data in object*/
const store = {
alt:`${val.files[i].name}`,
type:`${val.files[i].type}`,
url: `${window.URL.createObjectURL(filupld)}`
};

  //
let lb = g("#extender"); lb.innerHTML = store.type;
const mainC = g(".box-co");
const plac = create("a");
plac.id="displ";
plac.classList.add("box-I");
plac.classList.add("displ");
plac.href=`${store.url}`;
//Home
// let poster = "C:\\Users\\NEMIE\\Desktop\\app\\modern_portfolio-master\\dist\\img\\projects\\project5.jpg"  ;
//office
let poster = "https://www.nduccio.com/wp-content/uploads/2018/03/no_album.png"  ;
plac.innerHTML +=`<video class="img"src="${store.url}" ></video><p class="p">${imgAlt}</p>`;
append(mainC,plac); 

//Get a video Thumbnail
let no_video = gA(".img");
for(let i=0; i< no_video.length;i++){
no_video[i].currentTime = 3;
}

//
let displ = gA(".displ");
for (let i=0;i<displ.length;i++) {
//displ[0].classList.add('active');
displ[i].addEventListener("click",(e)=>{
e.preventDefault();
//Initializer - Play First Song
initVideo(displ[i]);
g("#video").src = displ[i].href;
g("#stop").click();
if( g("#stop").click){
setTimeout(()=>{
g("#video").play();player.className = "pause";
},500);

}
});
};

}

});

// }
pl=()=>{
if (video.paused) {
video.play();
player.className = "pause";
}else if(video.played){
video.pause();
player.className = "play";
}else{
video.pause();
}
}
mute=()=>{
video.muted = !video.muted;
sound.classList.toggle('muted');
if(video.muted) {
volume.value = 0;
}
else{
volume.value = 5;
}
}
stp=()=>{
video.pause();
video.currentTime = 0;
player.className = "play";
}

//Player

fun=()=>{
video.removeEventListener("timeupdate",move);
video.currentTime = prog.value;
setInterval(function(){
video.addEventListener("timeupdate",move);
},100);
showDuration()
}
move=()=>{
prog.value=video.currentTime;
var q = video.duration;
prog.max = q;
// time2.innerHTML=Math.floor(video.currentTime)+"secs";
// time.innerHTML="Total:"+Math.floor(video.duration)+" secs";
}
volumeV=()=>{

video.volume = volume.value/10;
let tit = video.volume;
volume.title = `volume = ${String(tit).slice(1-2)}00`;

}

songEnd=()=>{
g("#next").click();

};
// Context Menu function
  let context = g('.contextmenu');
  let context_a = g('.contextmenu a');
contextnu = (e)=>{
context.classList.toggle("hide");
context.style.position = "absolute ";
context.style.top = e.clientY+"px";
context.style.left = e.clientX+"px";
e.preventDefault();
};

//Call button_B_menu
context_a.addEventListener("click",()=>{
  
  button_B_menu.click();
});
const video = g("#video");
let videoCont =  g("#video-container");
let sound =    g("#sound");
let menu =    g("#menug");
let player =  g("#play");
let stoper =  g("#stop");
let prog =  g("#volume");
let full =    g("#full");
let fullscre =    g("#fulls");
let randomColor =    g("#dots");
//let progp =   g("#volumeP");
let volume =   g("#volumeV");
player.addEventListener("click",pl);
stoper.addEventListener("click",stp);
sound.addEventListener("click",mute);
prog.addEventListener("change",fun);
prog.addEventListener("click",fun);
volume.addEventListener("change",volumeV);
video.addEventListener("change",pl);
video.addEventListener("ended",songEnd);
video.addEventListener("contextmenu",contextnu);
randomColor.addEventListener("click",loadr);

//Create a Back Menu button
(createBMenu=(event)=> {
let backMenu = create("button");
    backMenu.classList.add("back_menu");
    g("body").append(backMenu);
//Hide back bottom bar as default
   if(g(".back_menu").style.display != "none"){
      g(".back_menu").style.display = "none"
}else{

      g(".back_menu").style.display = "block"
}

})(); 

let button_B_menu = g(".back_menu");
button_B_menu.addEventListener("click",()=>{
 // alert(145 / 524);
  button_B_menu.classList.toggle("rotate");

  //Add Image video possibilities
let v_controls = g(".controls");
  v_controls.classList.toggle("hide");
  let vdeo = g("#video");
  vdeo.classList.toggle("position");
});

full.addEventListener("click",()=>{

if(full.className == "full"){
  //
full.className = "fullex";
//
videoCont.className = "boxf";


// menu.style.display="none";
g(".boxf").style.order="1";
g(".box-co").style.order="2";
menu.style.order="3";
menu.style.maxWidth="100%";

//Hide the button menu bar
g(".footer").style.bottom = "-145px";

let backMenu = g(".back_menu");
if(g(".footer").style.bottom == "0px"){
backMenu.style.display = "none";
}else{
 backMenu.style.display = "block ";
}


}else if(full.className == "fullex"){
full.className = "full";
videoCont.className = "box";
g(".box").style.order="1";
g(".box-co").style.order="3";
menu.style.order="2";
menu.style.maxWidth="30%";
//menu.style.display="block";

//Show the button menu bar
g(".footer").style.bottom = "0px";
//Hide the Back Menu button
let backMenu = g(".back_menu");
// backMenu.style.display = "none";

if(g(".footer").style.bottom == "-145px"){
 
backMenu.style.display = "block";
}else{ 
backMenu.style.display = "none";
}

}else{
console.error("something is wrong")
}
});
fulls.addEventListener("click",fullscreen);
video.addEventListener("dblclick",fullscreen);
document.addEventListener("keydown",e=>{

if(e.keyCode == '32'){

player.click();
}if(e.keyCode == '70'){

fulls.click();
} if(e.keyCode == '77'){

sound.click();
} if(e.keyCode == '78'){

g("#next").click();
}if(e.keyCode == '80'){

g(".prev").click();
}if(e.keyCode == '83'){

g("#stop").click();
}
});
//This applies on to target Video(by double clicking) and and Fullscreen/fulls(By clicking)
function fullscreen(e){
const target = e.target;
if(target == fulls || target == video){
if(5==5 || document.fullscreenelement === null || document.fullscreenelement !== videoCont){
reqFull().call(videoCont);
fulls.classList.toggle("fulls");
}
if(5==5 || document.fullscreenelement !== null || document.fullscreenelement === videoCont){
exitFull().call(document);
fulls.classList.toggle("canselF");
}
}
}
//Request Fullscreen
function reqFull(){
let root = document.documentElement;
return root.requestFullscreen ||  root.webkitRequestFullscreen ||  root.mozRequestFullscreen ||  root.msRequestFullscreen
}
//Exit Fullscreen
function exitFull(){
let root = document;
return root.exitFullscreen ||  root.webkitExitFullscreen ||  root.mozExitFullscreen ||  root.msExitFullscreen
}
//start Running the Range after playing
fun();
volumeV();
//let's put A drag and drop posibility
allow=(e)=>{
e.preventDefault();
e.dataTransfer.files;
}
drop=(e)=>{
e.preventDefault();
const data = e.dataTransfer.files;
val.files=data;
}

function initVideo(element){
//var song = element.href;
//video.src = song;
element.click();
//Create a New video Object
//video = new Video('media/' + song);
let list = gA("#playlist a");
list.forEach((e)=>{
e.classList.remove('active')
});

element.classList.add('active');
}
//Next Button
g('#next').addEventListener('click',(p)=>{
let list = gA('#playlist>a.active');
list.forEach(e=>{
if(e.nextSibling !== null){
initVideo(g('#playlist a:first-child'));
var next = e.nextSibling;
initVideo(next);
} if(e.nextSibling == null) {
video.pause();
let nextg = g('#playlist a:first-child');
initVideo(nextg);
}
});
});
//Prev Button
g('.prev').addEventListener('click',function(){
let list = gA('#playlist>a.active');
list.forEach(e=>{
if(e.previousElementSibling !== null){
var next = e.previousElementSibling;
initVideo(next);
video.play();
} if(e.previousElementSibling == null) {
video.pause();
let prevg = g('#playlist a:last-child');
initVideo(prevg);
}
});
});

function loadr() {
var col1,col2,col3,col4,code;
col1 = Math.floor(Math.random()*205+21)
col2 = Math.floor(Math.random()*205+21)
col3 = Math.floor(Math.random()*205+21)
col4 = Math.random()*1.0;
col4 = Math.round(col4*1000+Number.EPSILON)/1000;
code =  'rgba'+"("+col1+','+col2+','
+col3+','+col4+")";
videoCont.style.background = code;

}

//Time Duration
function showDuration(){
   
  video.addEventListener('timeupdate', function(){
    //Get hours and minutes
    var s = parseInt(video.currentTime % 60);
    var m = parseInt((video.currentTime / 60) % 60);
    //Add 0 if seconds less than 10
    if (s < 10) {
      s = '0' + s;
    }
    //g('#cosume').innerHTML = `${m}:${s}`; 
    var value = 0;
    if (video.currentTime > 0) {
      value = Math.floor((100 / video.duration) * video.currentTime);
    g('.max').style.width=`${value}%`;}
    
    //Get hours and minutes for Total
    var st = parseInt(video.duration % 60);
    var to = parseInt((video.duration / 60) % 60);
    g('#total').innerHTML=`${m}:${s}/${to}:${st}`;
  });
}g('.max').addEventListener("click",(e)=>{
 // alert(e.clientX);
 //video.pause();
  // g('#volume').value=`${e.clientX}`;
    video.currentTime=`${Number(e.clientX -500 / getStyleValue(g('.max'), "width").replace("px", "") ).toFixed()}`;
   alert(`${Number(e.clientX -500 / getStyleValue(g('.max'), "width").replace("px", "")) -80 -235}`);
    //console.dir(`${Number(e.clientX -60 / getStyleValue(g('.max'), "width").replace("px", "")).toFixed()}`);
   
}); 



function getStyleValue(elmnt,style) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(elmnt,null).getPropertyValue(style);
    } else {
        return elmnt.currentStyle[style];
    }
}


/*
  let coo = g("#controls");

document.addEventListener("mousemove",e=>{
  let target = e.target
  if(target == coo){ e.preventDefault();
    setTimeout(()=>{
       coo.classList.remove("opa")
    },100);
  }else{
    e.preventDefault();
    setTimeout(()=>{
       coo.classList.toggle("opa")
    },500);
  setInterval(()=>{   document.addEventListener("mousedown",e=>{
  let target = e.target
  if(target !== coo){
   if(coo.className != "opa" ){  
       coo.classList.add("opa")
    }
   
  }});},3700);  
  }



  
});
  coo.addEventListener("mouseleave",(e)=>{
    if(coo.classList.contains("opa") ){
      setInterval(()=>{
       coo.classList.toggle("opa")
    },700);
   }
   }); 
if(coo.classList.contains("opa") ){
      setTimeout(()=>{
       coo.classList.remove("opa")
    },700);
   }else{
      
      setTimeout(()=>{
       coo.classList.add("opa")
    },500);
  
   }


*/






