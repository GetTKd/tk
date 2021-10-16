import Swup from 'swup';
const swup = new Swup();

const countEl = document.getElementById('count');
updateVisitCount();
function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/gettkd/yourmother/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}
