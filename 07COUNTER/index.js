//* komik bir hesaplama programıdır.

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increasedBtn = document.getElementById("increasedBtn");
const countLabel = document.getElementById("countLabel");

const videoContainer = document.getElementById("videoContainer");

const closeVideo = document.getElementById("closeVideo");

let count = 0;
increasedBtn.addEventListener("click", () => {
    count ++;
    countLabel.textContent = count;

    closeVideo.onclick = function(){
        videoContainer.classList.add("hidden");
    }

    if (count % 3 === 0) {
       
        videoContainer.classList.remove("hidden");
    }else{
        videoContainer.classList.add("hidden");

    }


    decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
    }

    resetBtn.onclick=function(){
    count = 0;
    countLabel.textContent = count;
    }   


    })







