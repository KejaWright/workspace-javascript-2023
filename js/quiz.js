function randInt(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
var M = Math.floor(Math.random()*200+300);
var N =randInt(100, M);
var K =randInt(1, 10);
console.log(M,N,K);

//put random num in html
document.getElementById("s1").textContent = M.toString();
document.getElementById("s2").textContent = N.toString();
document.getElementById("s3").textContent = K.toString();

//get correct answer
var T = N+K;
var S = N-K;

document.querySelector('[value ="1"]').nextSibling.nodeValue = M.toString()+"-"+T.toString();
document.querySelector('[value ="2"]').nextSibling.nodeValue = M.toString()+"-"+S.toString();
document.querySelector('[value ="3"]').nextSibling.nodeValue = M.toString()+"-"+N.toString()+"-"+K.toString();
document.querySelector('[value ="4"]').nextSibling.nodeValue = M.toString()+"-"+N.toString()+"+"+K.toString();

//action ckilck and change stile
function changestyle(e){
    e.preventDefault();//preven default action
    //get style
    var classname = this.getAttribute("class");
    //change style of this element if selected
    if (classname=="answer"){
        this.setAttribute("class","answer selected");
    }
    else{
        //change style if unselected
        this.setAttribute("class","answer unselected");
    }   
    this.animate([{transform: 'rotate(0deg)'},{transform:'rotate(180deg)'}], {duration:3000, fill:"forwards"});
}

//add event listener
for(var i=0; i<4; i++){
    document.getElementsByClassName("answer")[i].addEventListener("click", changestyle, false);
}