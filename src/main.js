import App from "./App.svelte";

const app = new App({
	target: document.getElementById("app"),
});

export default App;

function preventDefault(e) {
	e.preventDefault();
}

function disableScroll() {
	document.body.addEventListener("touchmove", preventDefault, {
		passive: false,
	});
}
function enableScroll() {
	document.body.removeEventListener("touchmove", preventDefault);
}

disableScroll();
