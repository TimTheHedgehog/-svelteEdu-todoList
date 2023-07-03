<script>
	let counter1 = 0;
	let counter2 = 0;
	let tens = 0;
	let string1;
	let string2;

	function counterButtonHandler1() {
		counter1++;
	}

	function numberOfTens(x) {
		if (x % 10 == 0 && x > 1) return tens++;
		return tens;
	}

	$: {
		string1 = `Counter1 is ${counterHandler(counter1)}`;
	}
	$: {
		string2 = `The number of tens ${numberOfTens(counter1)}`;
	}

	function counterHandler(counter) {
		return counter++;
	}
</script>

<button on:click={counterButtonHandler1}>
	1Button {counter1}
</button>
<h2>{string1}</h2>
<h2>{string2}</h2>

<style>
	
	button {
		padding: 10px 30px;
	}
</style>