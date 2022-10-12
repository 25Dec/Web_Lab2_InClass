const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
	let inputContent = document.getElementById("inputContent");

	navigator.clipboard.writeText(inputContent.value);
	alert("The text was copied: " + inputContent.value);
});
