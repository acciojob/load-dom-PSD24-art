//your JS code here. If required

let el =document.createElement("p")
el.innerText = "DOM Load success"

window.addEventListener("DOMContentLoaded", ()=>{
	document.body.appendChild(el);
})
 