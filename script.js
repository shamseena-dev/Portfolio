const slideNavMenu=()=>{
	
	const navLinks=document.querySelector('.navLinks');
	const eachNavLink=document.querySelectorAll('.navLinks li a');
	const burgerMenu=document.querySelector('.burgerMenu');

	burgerMenu.addEventListener('click',()=>{
		navLinks.classList.toggle("nav-active");
		burgerMenu.classList.toggle('toggle');
	})

	
	/*
	 eachNavLink.forEach((link, index) => {
	 	link.style.animation = `navlinksFadeAnimation 2s ease forwards ${index / 7 +10}s`;
	 })
	 
	*/
	 
}

slideNavMenu();

