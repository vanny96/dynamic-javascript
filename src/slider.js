const leftSlider = document.querySelector("div.slide-left");
const rightSlider = document.querySelector("div.slide-right");

let slides = document.getElementsByClassName("slide");

const selectSlide = (index) => {
    for(let i = 0; i < slides.length; i++){
        let slide = slides[i];

        slide.classList.remove("deselected");
        slide.classList.remove("selected");

        if(i === index){
            slide.classList.add("selected");
        
        } else {
            slide.classList.add("deselected");
        }
    }
}

const returnSelectedSlide = () => {
    for(let i = 0; i<slides.length; i++){
        if(slides[i].classList.contains("selected")){
            return i;
        }
    }
}


leftSlider.addEventListener("click", () => {
    let index = returnSelectedSlide();
    if(index != 0){
        selectSlide(index-1);
    } else {
        selectSlide(slides.length-1);
    }
})

rightSlider.addEventListener("click", () => {
    let index = returnSelectedSlide();
    if(index != slides.length-1){
        selectSlide(index+1);
    } else {
        selectSlide(0);
    }
})
