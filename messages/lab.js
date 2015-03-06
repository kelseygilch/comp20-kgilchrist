
function parse() {
	request = new XMLHttpRequest();

	request.open("GET", "data.json", true);

	request.onreadystatechange = parseData;

	request.send();
}

function parseData() {
	if (request.readyState == 4 && request.status != 404) {
		messagesDiv = document.getElementById("messages");
		converted = JSON.parse(request.responseText);

		for (i = 0; i < converted.length; i++) {
			messagesDiv.innerHTML += "<p>" + converted[0]["content"] + " " converted[0]["username"] "</p>";
		}
	}
}