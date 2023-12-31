function setLightTheme(link, icon) {
	link.href = 'static/style-light.css';
	icon.href = 'assets/icon-light.png';
	localStorage.setItem('darkMode', 'false');
}

function setDarkTheme(link, icon) {
	link.href = 'static/style-dark.css';
	icon.href = 'assets/icon-dark.png';
	localStorage.setItem('darkMode', 'true');
}

function checkThemePreference(link, icon) {
	let prefersDarkMode = false;

	if (window.matchMedia) {
		prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	}

	if (prefersDarkMode) {
		setDarkTheme(link, icon);
	} else {
		setLightTheme(link, icon);
	}
}

function toggleTheme() {
	const link = document.getElementById('theme-style');
	const icon = document.getElementById('icon');

	if (localStorage.getItem('darkMode') === 'true') {
		setLightTheme(link, icon);
	} else {
		setDarkTheme(link, icon);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	document.body.style.visibility = 'hidden';

	const link = document.getElementById('theme-style');
	const icon = document.getElementById('icon');
	
	const storedDarkMode = localStorage.getItem('darkMode');
	if (storedDarkMode === null) {
		checkThemePreference(link, icon);
	} else if (storedDarkMode === 'true') {
		setDarkTheme(link, icon);
	} else {
		setLightTheme(link, icon);
	}
	
	document.body.style.visibility = 'visible';

	const themeToggleLink = document.getElementById('theme-toggle-link');
	themeToggleLink.addEventListener('click', (event) => {
		event.preventDefault();
		toggleTheme();
	});

	document.addEventListener('keydown', (event) => {
		if (event.ctrlKey && event.shiftKey && event.key === 'T') {
			event.preventDefault();
			toggleTheme();
		}
	});
});
