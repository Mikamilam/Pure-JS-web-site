function showMenu() {
    var menu = document.getElementById('menu')
    menu.classList.toggle('open')
}

function modalClose() {
    document.querySelector('.modal-over').classList.remove('show')
    document.querySelector('body').style.overflowY = 'scroll'
}


document.addEventListener('DOMContentLoaded', function(){
	document.querySelectorAll('a[href^="#"]')
		.forEach(anchor => {
    		anchor.addEventListener('click', 
    			function (e) {
        			e.preventDefault();

       	 			document.querySelector(this.getAttribute('href')).scrollIntoView({
            			behavior: 'smooth'
        			});
        			if(anchor.id !== "top")
        			showMenu()
    			});
		});

    var works = document.querySelectorAll('.portfolio-items > div')
    const modalInnerHtml = document.querySelector('.modal').innerHTML
    for(var i=0;i<works.length;i++){
        works[i].addEventListener('click',
            function(e){
                document.querySelector('.modal-over').classList.add('show')
                var modal = document.querySelector('.modal')
                modal.innerHTML = modalInnerHtml + this.innerHTML
                document.querySelector('body').style.overflowY = 'hidden'
            })
    }
});

window.onscroll = function () {
    var top = document.getElementById('top')
    var header = document.getElementsByTagName('header')[0]
    if (window.pageYOffset > 65) {
        top.classList.add('show')
        header.classList.add('scroll')
    }else{
        top.classList.remove('show')
        header.classList.remove('scroll')
    }
}

var index = 0;
document.addEventListener('DOMContentLoaded', function(){
    var right = document.querySelector('.right')
    var left = document.querySelector('.left')
    var sliderUnits = document.querySelectorAll('.slider-unit')
    var slider = document.querySelector('.slider')
    var buttons = document.querySelectorAll('#testimonials > div > ul > li')
    right.addEventListener('click', function(){
        buttons[index].classList.remove('current')
        if(index === sliderUnits.length-1) index=0
            else index++
        slider.style.marginLeft = index * (-1324) + 'px'
        buttons[index].classList.add('current') 
    })
    left.addEventListener('click', function(){
        buttons[index].classList.remove('current')
        if(index === 0) index=sliderUnits.length-1
            else index--
        slider.style.marginLeft = index * (-1324) + 'px'
        buttons[index].classList.add('current') 
    })
    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click', function(e){
            buttons[index].classList.remove('current')
            index = +this.id
            slider.style.marginLeft = index * (-1324) + 'px'
            buttons[index].classList.add('current')
        })
    }

})