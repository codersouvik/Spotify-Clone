let songIndex=0;
let audioelement=new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songs=[
    {songname:"arab bgm",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songname:"vikram bgm",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songname:"dabbang bgm",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songname:"lady gaga bgm",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songname:"bts bgm",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songname:"shakira bgm",filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
    {songname:"lopez bgm",filepath:"songs/7.mp3",coverpath:"covers/7.jpg"},
    {songname:"kntara bgm",filepath:"songs/8.mp3",coverpath:"covers/8.jpg"},
]
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0)
    {
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        }
    else
    {
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioelement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    console.log(progress);
    myprogressbar.value=progress;

})
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogressbar.value*audioelement.duration/100;
})