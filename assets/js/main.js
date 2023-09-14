const EXERCISES_DATA = [
	{
		name: 'Push-Up',
		imageUrl: 'assets/images/push-up.jpg',
		description:
			'The hands are placed under the shoulders with the elbows extended. Keeping the back and legs straight with the toes touching the ground. The body is lowered until the upper arm is parallel to the ground.',
	},
	{
		name: 'Pull-Up',
		imageUrl: 'assets/images/pull-up.jpg',
		description:
			'A pull-up is an upper-body exercise. The body is pulled up vertically. From the top position, the participant lowers their body until the arms and shoulders are fully extended.',
	},
	{
		name: 'Dips',
		imageUrl: 'assets/images/dips.jpg',
		description:
			'A dip is an upper-body strength exercise. Close grip dips primarily train the triceps, with major synergists being the anterior deltoid, the pectoralis muscles, and the rhomboid muscles of the back.',
	},
];

const BENEFITS_DATA = [
	{
		name: 'Increase body strength and endurance',
		icon: 'assets/icons/strength.png',
		description:
			"Calisthenics builds up your muscle's endurance-your strength and holding power. It is a practical strength that you can use every day rather than simply lifting weights up in one direction.",
	},
	{
		name: 'Improve biomechanics',
		icon: 'assets/icons/posture.png',
		description:
			'The routines primarily involve stretching muscles which is why it can help with flexibility and preventing locked-up or shortened muscles. Improved posture is another end result of calisthenics.',
	},
	{
		name: 'Enhance physical aesthetics',
		icon: 'assets/icons/aesthetic.png',
		description:
			'If you aim to have a healthy body with lesser fats, calisthenics is the best way to achieve that. As you follow its agility- and strength-improving movements, you consciously sculpt your body in a certain way where you get abs and muscles.',
	},
	{
		name: 'Improves mental health',
		icon: 'assets/icons/mental-health.png',
		description:
			'A healthy body homes a healthy mind. We all know that exercising has a direct, intrinsical impact on your mental wellness, and calisthenics can be your ultimate buddy in improving your mental health.',
	},
];

// Navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
	let scrollPos = window.scrollY;

	if (scrollPos > 130) {
		navbar.style.background = '#0f0f11';
	} else {
		navbar.style.background = 'transparent';
	}
});

// Drawer
const menuButton = document.querySelector('.menu-button');
const navItems = document.querySelector('.nav-items');
menuButton.addEventListener('click', () => {
	navItems.classList.toggle('open');
});

// Exercises
const exercisesContainer = document.querySelector('.exercises-cards');
exercisesContainer.innerHTML = EXERCISES_DATA.map(
	(exercise) =>
		`
    <article class="card">
			<div class="card-image">
      	<img src="${exercise.imageUrl}" alt="${exercise.name}" />
			</div>
      
      <div class="card-body">
        <h3 class="card-title">${exercise.name}</h3>
        <p class="card-description">${exercise.description}</p>
      </div>
    </article>
      `
).join('');

// Benefits
const benefitsContainer = document.querySelector('.benefits-example');
benefitsContainer.innerHTML = BENEFITS_DATA.map(
	(benefit) =>
		`
    <article class="benefits-body">
			<div class="benefits-icon">
				<img src="${benefit.icon}" alt="${benefit.name}">
			</div>

			<article class="benefits-copywrite">
				<h3 class="benefits-title">${benefit.name}</h3>
      	<p class="benefits-description">${benefit.description}</p>
			</article>
    </article>
      `
).join('');

// Aside
const bio = document.querySelector('.bio');
const bioContent = document.querySelector('.bio .bio-content');
bio.addEventListener('click', () => {
	bio.classList.toggle('hidden');
	bioContent.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
	if (!bio.contains(event.target)) {
		bio.classList.add('hidden');
		bioContent.classList.add('hidden');
	}
});

// Footer Year
const currentYear = new Date().getFullYear();
const footerYear = document.getElementById('footer-year');
footerYear.innerText = currentYear;
