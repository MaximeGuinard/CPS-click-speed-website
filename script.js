var now = 0;
var log = document.getElementById('log');

document.getElementById('click').addEventListener('mousedown', markInterval);

function markInterval() {
	const interval = performance.now() - now;
	now = performance.now();
	if (interval < 1000) {
		const p = document.createElement('p');
		p.textContent = interval.toFixed(2);
		log.appendChild(p);
		log.scrollTop = log.scrollHeight;
	}
}