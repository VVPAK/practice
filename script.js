function generateTable() {
	var col = parseInt(document.getElementById("col").value);
	var row = parseInt(document.getElementById("row").value);
	
	var body = document.body;
	var table = document.createElement("table");

	for (var i = 0; i < row; i++) {
		var tr = table.insertRow();
		for (var j = 0; j < col; j++) {
			var td = tr.insertCell();
			td.appendChild(document.createTextNode('Cell #' + ' ' + (i * col + j + 1)));
		}
	}

	body.appendChild(table);
}