import './less/index.less'


// Your code goes here!

//* 1. mouseenter event 
const navBtn = document.querySelectorAll(".nav-link");
const navArray = Array.from(navBtn);
navArray.forEach(button => {
 button.addEventListener("mouseenter", evt => {
    navBtn.style.color = "red";
})
})

//* 2. mouseleave event : reset the colors for buttons ^^

//* 3. click event : make the picture of bus disappear

const bus = document.querySelector(".intro img");
bus.addEventListener("click", evt => {
    bus.src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9e824d69132997.5b75a8aba25aa.gif";
})


//* 4. dblclick event : 
const headerNav = document.querySelector(".main-navigation")
headerNav.addEventListener("dblclick", evt => {
    headerNav.style.backgroundColor = "LightCyan";
})

//* 5. keydown event

function displayOops() {
    const oopsImg = document.createElement("img");
    oopsImg.src = "https://i.ibb.co/F4WXRNB/oops.png";
    oopsImg.classList.add("oops")
 document.body.appendChild(oopsImg);
}

function clear() {
    document.body.innerHTML = "";
}

window.addEventListener("keydown", evt => {
    if (evt.key === "b") {
     clear();
    }
   return displayOops();
})


//* 6. scroll event
//<a href="https://www.freeiconspng.com/img/38014">world, travel transparent</a>
document.addEventListener("scroll", evt => {
    if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.body.style.backgroundColor = "azure";
    } else
    if(document.body.scrollTop < 250 || document.documentElement.scrollTop < 250) {
        document.body.style.backgroundColor = "white";
    }
})

