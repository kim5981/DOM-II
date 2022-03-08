import './less/index.less'


// Your code goes here!

//* 1. mouseenter event : mouse over "Sign Me Up" btns and change their colors

// const imgBorder = document.querySelectorAll(".img-content");
// imgBorder.addEventListener("mouseenter", evt => {
//     imgBorder.style.borderColor = "CadetBlue";

// })

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

//* 6. 