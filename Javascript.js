let btnOpen = document.getElementById('open');
let btnclose = document.getElementById('close');
let continar = document.querySelector('.continar');

btnclose.onclick = function(){
	continar.classList.add('hidde');
	btnclose.classList.add('hidde');
	btnOpen.classList.remove('hidde');
}

btnOpen.onclick = function(){
	btnOpen.classList.add('hidde');
	continar.classList.remove('hidde');
	btnclose.classList.remove('hidde')
}