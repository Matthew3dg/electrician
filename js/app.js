function openMenu() {
	document.getElementById('menu__burger').classList.toggle('active');
	document.getElementById('menu__wrapper').classList.toggle('active');
	document.getElementById('body').classList.toggle('lock');
}
function closeMenu() {
	document.getElementById('menu__burger').classList.remove('active');
	document.getElementById('menu__wrapper').classList.remove('active');
	document.getElementById('body').classList.remove('lock');
}
