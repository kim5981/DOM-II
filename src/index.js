import './less/index.less'


// Your code goes here!

/*------------------------------------------------------------------------------------------------------------
* ---------------------------------------  MOUSE ENTER & MOUSE LEAVE EVENT  ------------------------------------------------*/

const navBtns = document.querySelectorAll(".nav-link");
console.log(navBtns);
// const mouseEnter = () => {
//     navArray.addEventListener("mouseenter", evt => {
//         navBtn.style.color = "red";
//         navArray.forEach(btn => mouseEnter(btn));
// } 
navBtns.forEach(btn => {
    btn.addEventListener("mouseenter", evt => {
        btn.style.color = "SlateGrey" 
    })
    btn.addEventListener("mouseleave", evt => {
        btn.style.color = "black"
    })
} )


/*------------------------------------------------------------------------------------------------------------
* ---------------------------------------   CLICK EVENT  ------------------------------------------------*/


const bus = document.querySelector(".intro img");
bus.addEventListener("click", evt => {
    bus.src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9e824d69132997.5b75a8aba25aa.gif";
})



/*------------------------------------------------------------------------------------------------------------
* ---------------------------------------   DBL CLICK EVENT  ------------------------------------------------*/

const headerNav = document.querySelector(".main-navigation")
headerNav.addEventListener("dblclick", evt => {
    headerNav.style.backgroundColor = "SteelBlue";
})

/*------------------------------------------------------------------------------------------------------------
* ---------------------------------------   KEYDOWN EVENT  ------------------------------------------------*/


function displayOops(evt) {
    if (evt.key === "b") {
        document.body.innerHTML = ""
        const oopsImg = document.createElement("img");
        oopsImg.src = "https://i.ibb.co/F4WXRNB/oops.png";
        oopsImg.classList.add("oops")
     document.body.appendChild(oopsImg);
     window.removeEventListener("keydown", displayOops)
    }
   
}

window.addEventListener("keydown", displayOops)


/*------------------------------------------------------------------------------------------------------------
* ---------------------------------------   SCROLL EVENT  ------------------------------------------------*/
document.addEventListener("scroll", evt => {
    if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.body.style.backgroundColor = "FloralWhite";
    } else
    if(document.body.scrollTop < 250 || document.documentElement.scrollTop < 250) {
        document.body.style.backgroundColor = "white";
    }
})


