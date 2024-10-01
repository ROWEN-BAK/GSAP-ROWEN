function Uno(){
var tl = gsap.timeline({ defaults: {opacity: 0, duration: 2, ease:"back"}})
tl.from('.text1', {rotation: 720, y:160, scale: 0.7})
.from ('.text2', {y:160, scale: 0.7})
return tl
}

function Dos(){
    var tl = gsap.timeline({ defaults: {opacity: 0, duration: 4}})
    tl.from('.text3', {rotation: 1440, x:500, y:160, scale: 0.1, ease:"expo"})
    .from('.text4', {y:250, scale:0.3, ease:"elastic"})
    return tl
}

function Tres(){
    var tl = gsap.timeline({ defaults: {opacity: 0, duration: 3}})
    tl.from('.text5', {y:500, scale:0.4, rotation:2880, ease:"expo"})
    .from('.text6', {y:300, scale:2, ease:"elastic"})
    return tl
}

var master = gsap.timeline();
master
.add(Uno(), "+=3")
.add(Dos(), "+=5")
.add(Tres(), "-=3")

document.getElementById("play").onclick = ()=> master.play()
document.getElementById("pause").onclick = ()=> master.pause()
document.getElementById("reverse").onclick = ()=> master.reverse()
document.getElementById("restart").onclick = ()=> master.restart()

