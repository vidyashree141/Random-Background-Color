function changebg(){
    let r=Math.trunc(Math.random()*256);
    let g=Math.trunc(Math.random()*256);
    let b=Math.trunc(Math.random()*256);
    let body=document.querySelector('body');
    body.style.cssText=`background-color:rgb(${r},${g},${b})`;
    let header=document.querySelector('h1');
    header.innerHTML=`rgb(${r},${g},${b})`;
}