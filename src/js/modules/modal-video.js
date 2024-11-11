const video = document.querySelector("iframe");
const videoModal = document.querySelector(".modal__video");
const videoOverlay = document.querySelector(".video__button");
const videoCloseBtn = document.querySelector(".video__info__btn");
const videoURL = "https://www.youtube.com/embed/iR7b2NjgAO8?mute=1";

videoOverlay.addEventListener("click", () => {
  videoModal.classList.add("open__video");
  video.src = videoURL + "&autoplay=1";
});

const closeVideoModal = () => {
  videoModal.classList.remove("open__video");
  video.src = "";
};

videoModal.addEventListener("click", closeVideoModal);
videoCloseBtn.addEventListener("click", closeVideoModal);
