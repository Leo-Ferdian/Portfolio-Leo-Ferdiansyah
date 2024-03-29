/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll("nav_link");

function linkAction() {
	const navMenu = document.getElementById("nav-menu");
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills_content"),
	skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills() {
	let itemClass = this.parentNode.className;

	for (i = 0; i < skillsContent.length; i++) {
		skillsContent[i].className = "skills_content skills_close";
	}
	if (itemClass === "skills_content skills_close") {
		this.parentNode.className = "skills_content skills_open";
	}
}

skillsHeader.forEach((el) => {
	el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
	tabsContent = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.target);

		tabsContent.forEach(tabContent => {
			tabContent.classList.remove('qualification_active');
		});
		target.classList.add('qualification_active');

		tabs.forEach(tab => {
			tab.classList.remove('qualification_active');
		});
		tab.classList.add('qualification_active');
	});
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services_modal'),
	modalBtns = document.querySelectorAll('.services_button'),
	modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick){
	modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) =>{
	modalBtn.addEventListener('click',() =>{
		modal(i)
	})
})

modalCloses.forEach((modalClose) =>{
	modalClose.addEventListener('click', () =>{
		modalViews.forEach((modalView) =>{
			modalView.classList.remove('active-modal')
		})
	})
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio_container , .certificate_container', {
	cssMode: true,

	navigation: {
		nextEl:'.swiper-button-next',
		prevEl:'.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
});

/*==================== TESTIMONIAL ====================*/
const swiperTestimonial = new Swiper('.testimonial_container', {
	loop : true,
	grabCursor: true,
	spaceBetween: 40,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	breakpoints:{
		768:{
			slidesPerView: 2,
		}
	}
});

/*==================== SEND EMAIL ====================*/
function openGmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var project = document.getElementById('project').value;
    var message = document.getElementById('message').value;

    var subject = "Contact Form Submission";
        var body = "Name: " + name + "\nEmail: " + email + "\nProject: " + project + "\nMessage: " + message;
        var mailtoURL = 'https://mail.google.com/mail/?view=cm&to=leoferdiansyah28@gmail.com&subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

        window.open(mailtoURL, '_blank');
}


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');
        const menuLink = document.querySelector('.nav_menu a[href*="' + sectionId + '"]');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            menuLink.classList.add('active-link');
        } else {
            menuLink.classList.remove('active-link');
        }
    });
}

function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 40;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
}

document.querySelectorAll('.nav_menu a[href^="#"]').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        scrollToSection(sectionId);
    });
});

window.addEventListener('scroll', scrollActive);


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Tambahkan efek animasi ketika tombol di klik
themeButton.addEventListener('click', () => {
    // Tambahkan kelas untuk efek animasi
    themeButton.classList.add('clicked');

    // Tambahkan atau hapus tema gelap / ikon
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // Simpan tema dan ikon yang dipilih oleh pengguna
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());

    // Hapus kelas animasi setelah beberapa saat
    setTimeout(() => {
        themeButton.classList.remove('clicked');
    }, 300);
});