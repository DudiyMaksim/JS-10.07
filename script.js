var images=['inst.jfif','tt.png','twit.png','yt.jfif']
nIndex = 0;

var rblock = false;
var lblock = true;

var img = document.getElementById('lb');
img.addEventListener('mouseover', function(){
    if(!lblock){
        img.style.cursor='pointer'
    }
    else{
        img.style.cursor='auto'
    }
})
var img2 = document.getElementById('rb');
img2.addEventListener('mouseover', function(){
    if(!rblock){
        img2.style.cursor='pointer'
    }
    else{
        img2.style.cursor='auto'
    }
})
var main = document.getElementById('main');
function ButtonClickL(){
    if(!lblock){
        if(nIndex==1){
            img.style.opacity=0.5;
            lblock=true;
        }
        img2.style.opacity=1;
        rblock = false;
        nIndex--;
        main.src=images[nIndex];
    }
}
function ButtonClickR(){
    if(!rblock){
        if(nIndex==2){
            img2.style.opacity=0.5;
            rblock=true;
        }
        img.style.opacity=1;
        lblock = false;
        nIndex++;
        main.src=images[nIndex];
    }
}