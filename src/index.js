import './less/index.less'


// Your code goes here!

/*------------------------------------------------------------------------------------------------------------
* ---------------------------------------  MOUSE ENTER & MOUSE LEAVE EVENT  ------------------------------------------------*/

const navBtns = document.querySelectorAll(".nav-link");
const h1 = document.querySelector("h1");

navBtns.forEach(btn => {
    btn.addEventListener("mouseenter", evt => {
        btn.style.color = "LightPink" 
    })
    btn.addEventListener("mouseleave", evt => {
        btn.style.color = "black"
    })
} )

h1.addEventListener("mouseenter", evt => {
    h1.style.color = "LightPink"
})
h1.addEventListener("mouseleave", evt => {
    h1.style.color = "black"
})


/*------------------------------------------------------------------------------------------------------------
* ---------------------------------------   CLICK EVENT  ------------------------------------------------*/


const bus = document.querySelector(".intro img");
bus.addEventListener("click", evt => {
    bus.classList.add("wheel");
    bus.src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9e824d69132997.5b75a8aba25aa.gif";
})



/*------------------------------------------------------------------------------------------------------------
* ---------------------------------------   DBL CLICK EVENT  ------------------------------------------------*/

const headerNav = document.querySelector(".main-navigation")
headerNav.addEventListener("dblclick", evt => {
    headerNav.style.backgroundColor = "LavenderBlush";
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

/*------------------------------------------------------------------------------------------------------------
* ---------------------------------------   SELECT EVENT  ------------------------------------------------*/

const alertSelection = (evt) => {
    const selection = document.body.select();
    console.log(selection);
    alert( `You selected: ${selection}` )
}
window.addEventListener("select", alertSelection);

/*------------------------------------------------------------------------------------------------------------
* ---------------------------------------   WHEEL EVENT  ------------------------------------------------*/
const allH2 = document.querySelectorAll("h2");

function wheel (evt) {
    const fontSize = allH2.style.fontSize;
    let value = Number(fontSize.substr(0, fontSize.length-2));

    //when ~wheeling~ up
    if (evt.deltaY < 0) {
        if(value < 50) {
            value++;
        }
    }
    //when ~wheeling~ down
    if(evt.deltaY > 0) {
        if(value > 5) {
            value--;
        }
    }
    allH2.style.fontSize = value + "px";
}

allH2.forEach(h2 => {
    h2.addEventListener("wheel", wheel)
})


/*------------------------------------------------------------------------------------------------------------
* ---------------------------------------  CANCEL EVENT  ------------------------------------------------*/

/*------------------------------------------------------------------------------------------------------------
* ---------------------------------------   LOAD EVENT  ------------------------------------------------*/
window.addEventListener("load", evt => {
    alert("Let's start the fun bus ᕕ(⌐■_■)ᕗ ♪♬")
})
