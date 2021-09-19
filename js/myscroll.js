

var sheight = document.getElementById("center").scrollHeight - document.querySelector(".buffer-page").clientHeight;
var soffset = document.getElementById("center").offsetHeight;

//const scrollvalue = soffset;
var scrollCount = 0

var pageNumberTotal = +(sheight / soffset).toFixed(0) + 1

var asides = document.getElementsByClassName('aside');
var formulas = document.getElementsByClassName('formula');


// move Text up (scroll down)
function move_up() {
  let soffset2 = document.getElementById("center").offsetHeight;

  let pageBuffer = document.querySelector(".buffer-page")
  let bottom = pageBuffer.getBoundingClientRect().y
  let bufferHeight = pageBuffer.getBoundingClientRect().height
 // document.getElementById("pageNumberCounter").innerHTML=`${Math.abs((+(soffset2 / (bottom - soffset2))).toFixed(0)) + 2}`
 let countPage = document.getElementById("pageNumberCounter").innerHTML
 

 let maxPage = document.getElementById("pageNumberTotal").innerHTML
console.log(+countPage >= +maxPage)
 if (+countPage >= +maxPage) {return} 
  //if (bottom < soffset2 ) {return} 
  document.getElementById("pageNumberCounter").innerHTML = +countPage + 1

  document.getElementById('center').scrollTop += soffset2;

  scrollCount++;
  
  for (let i = 0; i < asides.length; i++) {
      let el = asides.item(i)
      el.style.transform = `translate(0,-${scrollCount * soffset2}px)`
  }
  for (let i = 0; i < formulas.length; i++) {
      let el = formulas.item(i)
      el.style.transform = `translate(0,-${scrollCount * soffset2}px)`
  }
  
 // document.getElementById("pageNumberCounter").innerHTML=`${scrollCount+1}`
}

function move_start() {
    document.getElementById('center').scrollTop = 0;
    
    for (let i = 0; i < asides.length; i++) {
      let el = asides.item(i)
      el.style.transform = "translate(0,0px)"
    }
    for (let i = 0; i < formulas.length; i++) {
      let el = formulas.item(i)
      el.style.transform = "translate(0,0px)"
    }
    
    scrollCount = 0;
  document.getElementById("pageNumberCounter").innerHTML=`${scrollCount+1}`

}

// move text down, scroll up
function move_down() {
    if (scrollCount == 0) { return }

    document.getElementById('center').scrollTop -= soffset;
    scrollCount--;
    
    for (let i = 0; i < asides.length; i++) {
      let el = asides.item(i)
      el.style.transform = `translate(0,-${(scrollCount) * soffset}px)`
    }
    for (let i = 0; i < formulas.length; i++) {
      let el = formulas.item(i)
      el.style.transform = `translate(0,-${(scrollCount) * soffset}px)`
    }
    
  document.getElementById("pageNumberCounter").innerHTML=`${scrollCount+1}`
}


document.getElementById("button-scroll").addEventListener("click",move_up);
document.getElementById("button-start").addEventListener("click",move_start);
document.getElementById("button-up").addEventListener("click",move_down);

export const myscroll = () => {
  //document.getElementById("pageNumberTotal").innerHTML=`${pageNumberTotal-1}`
}
