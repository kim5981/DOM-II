import './less/index.less'


// Your code goes here!

//* 1. mouseenter event : mouse over "Sign Me Up" btns and change their colors

// const signUp = document.querySelectorAll(".btn");
// signUp.addEventListener("mouseenter", evt => {
//     signUp.style.backgroundColor = "none";
//     signUp.style.borderColor = "CadetBlue";
// })

//* 2. mouseleave event : reset the colors for buttons ^^

//* 3. click event : make the picture of bus disappear

//* 4. dblclick event : replace the picture of bus with a gif of moving bus

//* 5. keydown event : when "B" is pushed a pop-up of a ghost comes up?

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