function init(){
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

init()



var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var one = document.querySelector("#one")
var two = document.querySelector("#two")
var three = document.querySelector("#three")
var four = document.querySelector("#four")
var five = document.querySelector("#five")
var six = document.querySelector("#six")
var seven = document.querySelector("#seven")

gsap.from("#nav",{
  y:"-100%",
  duration:1,
  delay:.5
})
gsap.to("#nav",{
  y:0,
  duration:1.5
  // delay:.5
})
gsap.from("#page-1",{
  y:"100%",
  duration:1,
  delay:2
})
gsap.to("#page-1",{
  y:"-1%",
  duration:1,
  delay:2
})
gsap.to("#page-1",{
  y:"0%",
  duration:.5,
  delay:3
})


document.querySelector("body").addEventListener("scrollY",function(dets){
  cursor.style.top = dets.y + "px"
})
document.querySelector("body").addEventListener("mousemove",function(dets){
  cursor.style.left = dets.x + "px"
  cursor.style.top = dets.y + "px"
})


var m_check = 0
document.querySelector("#menu-button").addEventListener("click",function(){
  if(m_check==0){

    one.style.opacity = 1
    two.style.opacity = 1
    three.style.opacity = 1
    four.style.opacity = 1
    five.style.opacity = 1
    six.style.opacity = 1
    seven.style.opacity = 1

  gsap.to("#mb2",{
    width:0,
    duration:.5
  })
  gsap.to("#mb1",{
    rotate:"35deg",
    duration:.5
  })
  gsap.to("#mb3",{
    rotate:"-35deg",
    duration:.5
  })

  document.querySelector("#menu-scr").style.scale = 1

  document.querySelector("#mb3").style.backgroundColor="#FEF9F3"
  document.querySelector("#mb2").style.backgroundColor="#FEF9F3"
  document.querySelector("#mb1").style.backgroundColor="#FEF9F3"
  document.querySelector("#nav3-2").style.backgroundColor="transparent"
  document.querySelector("#nav3-2").style.color="#FEF9F3"
  document.querySelector("#nav3-3").style.color="black"
  document.querySelector("#nav3-3").style.backgroundColor="#FEF9F3"
  document.querySelector("#nav").style.backgroundColor="transparent"
  document.querySelector("#nav").style.color="#FEF9F3"
  m_check = 1
}
else{
  
  m_check = 0

  one.style.opacity = 0
  two.style.opacity = 0
  three.style.opacity = 0
  four.style.opacity = 0
  five.style.opacity = 0
  six.style.opacity = 0
  seven.style.opacity = 0

gsap.to("#mb2",{
  width:"4vw",
  duration:.5
})
gsap.to("#mb1,#mb3",{
  rotate:"0deg",
  duration:.5
})

document.querySelector("#menu-scr").style.scale = 0

document.querySelector("#mb2").style.backgroundColor="black"
document.querySelector("#mb3").style.backgroundColor="black"
document.querySelector("#mb1").style.backgroundColor="black"
document.querySelector("#nav3-2").style.backgroundColor="#FEF9F3"
document.querySelector("#nav3-3").style.backgroundColor="black"
document.querySelector("#nav3-3").style.color="white"
document.querySelector("#nav3-2").style.color="black"
document.querySelector("#nav").style.backgroundColor="#FEF9F3"
document.querySelector("#nav").style.color="black"
}
})

//FIRST PAGE TEXT

var first = 1
setInterval(function(){
  if (first == 1) {
    gsap.to("#f1,#f2",{
      top:"0",
      duration:1,
    })
    first += 1
  }
 
  else if(first == 2){
    gsap.to("#f1,#f2",{
      top:"300%",
      duration:1,
    })
    gsap.to("#se1,#se2",{
      top:"-100%",
      duration:1,
      delay:.2
    })
    first += 1
  }
  else if(first == 3){
    gsap.to("#se1,#se2",{
      top:"0%",
      duration:1,
    })
    gsap.to("#t1",{
      top:"-200%",
      duration:1,
    })
    gsap.to("#t2",{
      top:"-155%",
      duration:1,
    })
    first += 1
  }
  else if(first == 4){
    gsap.to("#t1,#t2",{
      top:"0%",
      duration:1,
    })
    gsap.to("#fr1",{
      top:"-310%",
      duration:1,
    })
    gsap.to("#fr2",{
      top:"-210%",
      duration:1,
    })
    first += 1
  }
  else if(first == 5){
    gsap.to("#fr1,#fr2",{
      top:"0%",
      duration:1,
    })
    gsap.to("#f1,#f2",{
      top:"0%",
      duration:1,
    })
    first = 2
  }
},4000);

// FIRST PAGE IMAGE

var second = 1
setInterval(function(){
  if(second == 1){
    gsap.to("#fi1",{
      scale:1,
      filter:"blur(0)",
      duration:.6
    })
    second += 1
  }
  else if(second == 2){
    gsap.to("#fi1",{
      scale:0,
      filter:"blur(1rem)",
      duration:.6
    })
    gsap.to("#fi2",{
      scale:1,
      filter:"blur(0)",
      duration:.6
    })
    second += 1
  }
  else if(second == 3){
    gsap.to("#fi2",{
      scale:0,
      filter:"blur(1rem)",
      duration:.6
    })
    gsap.to("#fi3",{
      scale:1,
      filter:"blur(0)",
      duration:.6
    })
    second += 1
  }
  else if(second == 4){
    gsap.to("#fi3",{
      scale:0,
      filter:"blur(1rem)",
      duration:.6
    })
    gsap.to("#fi4",{
      scale:1,
      filter:"blur(0)",
      duration:.6
    })
    second += 1
  }
  else if(second == 5){
    gsap.to("#fi4",{
      scale:0,
      filter:"blur(1rem)",
      duration:.6
    })
    gsap.to("#fi1",{
      scale:1,
      filter:"blur(0)",
      duration:.6
    })
    second = 2
  }
}, 4000);

//LOADER

gsap.to("#l-in",{
  left:"0%",
  duration:4,
  repeat:-1
})

// NUM CHANGE

var third = 1
setInterval(function(){
  if (third == 1) {
    gsap.to("#nc1",{
      left:0,
      duration:.2,
      opacity:1
    })
    third += 1
  }
  else if (third == 2) {
    gsap.to("#nc1",{
      opacity:0,
      left:"100%",
      duration:.2
    })
    gsap.to("#nc2",{
      opacity:1,
      left:"-3%",
      duration:.2
    })
    third += 1
  }
  else if (third == 3) {
    gsap.to("#nc2",{
      opacity:0,
      left:"100%",
      duration:.2
    })
    gsap.to("#nc3",{
      opacity:1,
      left:"-3%",
      duration:.2
    })
    third += 1
  }
  else if (third == 4) {
    gsap.to("#nc3",{
      opacity:0,
      left:"100%",
      duration:.2
    })
    gsap.to("#nc4",{
      opacity:1,
      left:"-3%",
      duration:.2
    })
    third += 1
  }
  else if (third == 5) {
    gsap.to("#nc4",{
      opacity:0,
      left:"100%",
      duration:.2
    })
    gsap.to("#nc1",{
      opacity:1,
      left:0,
      duration:.2
    })
    third = 2
  }
},4000);

// document.querySelector(".dates").addEventListener("mouseenter",function(dets){
//   gsap.to("#roam",{
//     transform:"scale(1) rotate(-45deg)",
//     duration:.6
//   })
// })
document.querySelector(".dates").addEventListener("mousemove",function(dets){
  document.querySelector(".dates>#roam").style.left = (dets.x-270) + "px"
  document.querySelector(".dates>#roam").style.top = (dets.y+2300) + "px"
  console.log(dets.x,dets.y)
})
document.querySelector("#r2").addEventListener("mousemove",function(dets){
  document.querySelector("#r2>#roam").style.left = (dets.x-270) + "px"
  document.querySelector("#r2>#roam").style.top = (dets.y+2400) + "px"
  console.log(dets.x,dets.y)
})
document.querySelector("#r3").addEventListener("mousemove",function(dets){
  document.querySelector("#r3>#roam").style.left = (dets.x-300) + "px"
  document.querySelector("#r3>#roam").style.top = (dets.y+2540) + "px"
  console.log(dets.x,dets.y)
})
document.querySelector("#r4").addEventListener("mousemove",function(dets){
  document.querySelector("#r4>#roam").style.left = (dets.x-270) + "px"
  document.querySelector("#r4>#roam").style.top = (dets.y+2700) + "px"
  console.log(dets.x,dets.y)
})
document.querySelector("#r5").addEventListener("mousemove",function(dets){
  document.querySelector("#r5>#roam").style.left = (dets.x-270) + "px"
  document.querySelector("#r5>#roam").style.top = (dets.y+2840) + "px"
  console.log(dets.x,dets.y)
})
document.querySelector("#r6").addEventListener("mousemove",function(dets){
  document.querySelector("#r6>#roam").style.left = (dets.x-270) + "px"
  document.querySelector("#r6>#roam").style.top = (dets.y+2940) + "px"
  console.log(dets.x,dets.y)
})

// document.querySelector(".dates").addEventListener("mouseleave",function(){
//   gsap.to("#roam",{
//     transform:"scale(0) rotate(-45deg)",
//     duration:.6
//   })
// })

function p1_clicked(params) {
  
  document.querySelector("#p4-b1>.btn-down").style.transform = "translate(6%,-13%)";
  document.querySelector("#p4-b1").style.transform = " translate(-2%,5%)";
  document.querySelector("#p4-b1").style.backgroundColor = "black";
  document.querySelector("#p4-b1>.btn-down").style.backgroundColor = "white";
  gsap.to("#break span",{
    top:100,
    duration:.45,
    stagger:0.15
  })
  gsap.to("#group span",{
    top:0,
    duration:.45,
    stagger:0.15,
    delay:.5
  })
  gsap.to("#br-img",{
    scale:0,
    filter:"blur(1.5rem)",
    duration:.5,
  })
gsap.to("#gc-img",{
  scale:1,
  filter:"blur(0)",
  duration:.5,
  delay:.1
  
})
}
function p2_clicked(params) {
  document.querySelector("#p4-b2>.btn-down").style.transform = "translate(6%,-13%)";
  document.querySelector("#p4-b2").style.transform = " translate(-2%,5%)";
  document.querySelector("#p4-b2").style.backgroundColor = "black";
  document.querySelector("#p4-b2>.btn-down").style.backgroundColor = "white";

  gsap.to("#group span",{
    top:100,
    duration:.45,
    stagger:0.15
  })
  gsap.to("#break span",{
    top:0,
    duration:.45,
    stagger:0.15,
    delay:.5
  })
  gsap.to("#gc-img",{
    scale:0,
    filter:"blur(1.5rem)",
    duration:.5,
  })
gsap.to("#br-img",{
  scale:1,
  filter:"blur(0)",
  duration:.5,
  delay:.1
  
})
}
function p1_unclicked(params) {
  document.querySelector("#p4-b1>.btn-down").style.transform = "translate(0%,0%)";
  document.querySelector("#p4-b1").style.transform = " translate(0%,0%)";
  document.querySelector("#p4-b1").style.backgroundColor = "transparent";
  document.querySelector("#p4-b1>.btn-down").style.backgroundColor = "transparent";
}
function p2_unclicked(params) {
  document.querySelector("#p4-b2>.btn-down").style.transform = "translate(0%,0%)";
  document.querySelector("#p4-b2").style.transform = " translate(0%,0%)";
  document.querySelector("#p4-b2").style.backgroundColor = "transparent";
  document.querySelector("#p4-b2>.btn-down").style.backgroundColor = "transparent";
}
p1_clicked()
document.querySelector("#p4-b1").addEventListener("click",function(){


  p1_clicked()
  p2_unclicked()
})
document.querySelector("#p4-b2").addEventListener("click",function(){

  p2_clicked()
  p1_unclicked()
})