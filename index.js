/** @format */

const cards = document.querySelectorAll('article');

const handleMove = (e, element) => {
	const x = e.clientX;
	const y = e.clientY;

	const { left, width, top, height } = element.getBoundingClientRect();

	const middleX = left + width / 2;
	const middleY = top + height / 2;

	const offsetX = ((x - middleX) / width) * 30;
	const offsetY = ((y - middleY) / height) * 30;

	element.style.setProperty('--rotateX', offsetX + 'deg');
	element.style.setProperty('--rotateY', -1 * offsetY + 'deg');
};

cards.forEach(card => {
	card.addEventListener('mousemove', e => handleMove(e, card));
});
