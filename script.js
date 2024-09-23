let menu = document.querySelector(".menu-btn");
let menuItems = document.querySelector(".menu-items");
let menuBtnHover;

// X shape animation
let xShape = gsap.timeline({ paused: true });

xShape.to(".top-menu-bar", {
	width: 30,
	rotate: 45,
	right: 9,
	duration: 0.2,
});
xShape.to(".bottom-menu-bar", {
	width: 30,
	rotate: -45,
	duration: 0.2,
}, "<");


function toggleMenu() {
	menu.classList.toggle("open");
	if (document.querySelector(".menu-btn.open")) {
		xShape.play();
		menuItems.style.display = "flex";
		gsap.to(menuItems, {
			duration: 1,
			left: 0,
			opacity: 1,
			ease: "power3.out"
		});

	} else {
		xShape.reverse();
		gsap.to(menuItems, {
			duration: 1,
			left: 100,
			opacity: 0,
			ease: "power3.out"
		});
	}
}

// Hover animation for lines of menu button
function menuHoverTimeline() {

	let tl = gsap.timeline({
		paused: true,
	});

	tl.to(".menu-btn", {
		width: 50,
		borderRadius: 25,
		ease: "power2.inOut",
		duration: 0.75,
	}, 0);

	if (!(document.querySelector(".menu-btn.open"))) {
		tl.to(".top-menu-bar", {
			width: 30,
			ease: "power2.inOut",
			duration: 0.75,
		}, 0);
		tl.to(".bottom-menu-bar", {
			width: 25,
			ease: "power2.inOut",
			duration: 0.75,
		}, 0);
	}

	return tl;
}

function menuHoverAnim(option) {

	if (option == 0) {
		menuBtnHover = menuHoverTimeline();
		menuBtnHover.play();
	} else menuBtnHover.reverse();

}

// Listeners for hover animtion of menu button
menu.addEventListener("mouseenter", () => menuHoverAnim(0));
menu.addEventListener("mouseleave", () => menuHoverAnim(1));