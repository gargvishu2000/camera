let video=document.querySelector("video");
let captureBtnCont=document.querySelector("capture-btn-cont");
let captureBtn=document.querySelector("capture-btn");
let transparentColor="transparent";

let recorder;
let constraints={
    video:true,
    audio:true
}
navigator.mediaDevices.getUserMedia(constraints)
    .then((stream)=>{
        video.srcObject=stream;

        //recorder=new MediaRecorder();
    });

    //click photo
    captureBtnCont.addEventListener("click",() => {
        let canvas=document.createElement("canvas");
        let tool=canvas.getContext("2d");
        canvas.width=video.videoWidth;
        canvas.height=video.videoHeight;

        tool.drawImage(video,0,0,canvas.width,canvas.height);

        //to apply filters on photo
        //tool.fillRect - fillReactangle with color or gradient given by user
        //it fills the photo catured with the given color.
        tool.fillStyle=transparentColor;
        tool.fillRect(0,0,canvas.width,canvas.height);

        let imageUrl=canvas.toDataURL();
        let img=document.createElement("img");
        img.url

    })