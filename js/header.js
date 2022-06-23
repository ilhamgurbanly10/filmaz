
// background-images

flashFullScreenBackgroundImages("very-slow");

// the-end-of-background-images



// user-modal-container

const hideUserModal = () => {

	const btn = document.querySelector('.fl-modal-con-closer');
	const modal = document.querySelector('#userModalContainer');

	const hide = () => modal.classList.remove('fl-show');

	btn.addEventListener('click', hide);
}

hideUserModal();


const showSpecificModalForm = () => {

	const signInBtn = document.querySelector('.sign-in-btn');
	const signUpBtn = document.querySelector('.sign-up-btn');
	const modal = document.querySelector('#userModalContainer');
	const switchSignInBtn = document.querySelector('.switch-sign-in-btn');
	const switchSignUpBtn = document.querySelector('.switch-sign-up-btn');

	const showSignIn = () => { switchSignInBtn.click(); showModal(); }

	const showSignUp = () => { switchSignUpBtn.click(); showModal(); }

	const showModal = () => modal.classList.add('fl-show');

	signInBtn.addEventListener('click', showSignIn);
	signUpBtn.addEventListener('click', showSignUp);

}

showSpecificModalForm();

// the-end-of-user-modal-container



// md-menu

const mdMenu = () => {

	// elements-and-values
	const toggler = document.querySelector('.fl-navbar-toggler');
	const mdMenu = document.querySelector('.fl-md-menu');
	const dropdownTogglers = document.querySelectorAll('.md-menu-dropdown-toggler');
	const backButtons = document.querySelectorAll('.md-menu-dropdown-back-btn');

	// functions
	const toggleMenu = () => { mdMenu.classList.toggle('fl-show'); toggler.classList.toggle('fl-active'); }

	const showMenu = () => { mdMenu.classList.add('fl-show'); toggler.classList.add('fl-active'); }

	const hideMenu = () => { mdMenu.classList.remove('fl-show'); toggler.classList.remove('fl-active'); }

	function showDropdown() {

		toggler.removeEventListener('click', toggleMenu);
		toggler.classList.remove('fl-active');
		mdMenu.classList.remove('fl-show');

		const tar = this.getAttribute('target');
		const el = document.querySelector(''+tar+'');
		el.classList.add('fl-show');

	}

	function hideDropdown() {

		toggler.addEventListener('click', toggleMenu);
		toggler.classList.add('fl-active');
		mdMenu.classList.add('fl-show');

		this.closest('.md-menu-dropdown').classList.remove('fl-show');

	}

	// adding-functions
	for (let i = 0; i < dropdownTogglers.length; i++) { 
		dropdownTogglers[i].addEventListener('click', showDropdown); 
		backButtons[i].addEventListener('click', hideDropdown);
	}

	toggler.addEventListener('click', toggleMenu);
	
}

mdMenu();

// the-end-of-md-menu