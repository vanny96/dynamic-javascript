const menuButton = document.getElementById("menu");
const menuDropDown = document.querySelector("ul.menu-dropdown");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const menuDropDownHeight = menuDropDown.clientHeight;
menuDropDown.style.height= 0;

menuButton.addEventListener("click", async function(e){
    e.preventDefault();

    if(!menuDropDown.classList.contains("active")){
        menuDropDown.classList.remove("deactive");
        menuDropDown.classList.add("active");
    
        for(let i = 0; i<=menuDropDownHeight; i+=3){
            if(i<=menuDropDownHeight-3){
                menuDropDown.style.height = `${i}px`;
                await sleep(1);
            } else {
                menuDropDown.style.height = `${menuDropDownHeight}px`;
            }
        }
    } else {
        menuDropDown.classList.remove("active");
        menuDropDown.classList.add("deactive");
    
        for(let i = menuDropDownHeight; i>=0; i-=3){

            if(i>=3){
                menuDropDown.style.height = `${i}px`;
                await sleep(1);
            } else {
                menuDropDown.style.height = 0;
            }
        }
    }
})


