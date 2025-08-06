function changeImage(imagesrc){
    document.getElementById('top-image').src=imagesrc;
}
//increase
function increaseQuality(){
    const qualityinput=document.getElementById('quality');
    qualityinput.value=parseInt(qualityinput.value)+1;
}
function decreaseQuality(){
    const qualityinput=document.getElementById('quality');
    if(parseInt(qualityinput.value)>1){
    qualityinput.value=parseInt(qualityinput.value)-1;
}
}
