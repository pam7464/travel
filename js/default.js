window.onload=function(){
    let btnNav = document.getElementById('btn-nav');
    btnNav.addEventListener('click',function(){
        let _header =document.querySelector('.header');
        let _nav = document.querySelector('.nav');
        _header.classList.toggle('show-nav');
        _nav.classList.toggle('show-nav');
    });
}
function mySlider(_target){
    $(_target).bxSlider();
} 
function disBlock(eventEle,_target){
    eventEle.addEventListener('click',function(){
        _target.style.display = 'block';
    })
}
function disNone(eventEleTarget){
    for(let idx=0;idx<eventEleTarget.length;idx++){
        eventEleTarget[idx].addEventListener('click',function(){
            this.style.display = 'none'; 
        })
    }    
}
function smScl(_target){
    $(_target).smoothScroll({
        speed: 600,
    });
}