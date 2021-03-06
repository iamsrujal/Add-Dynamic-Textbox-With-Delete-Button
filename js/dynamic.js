function createTextBox() {
	// this will return list of row inside count id
	var count = document.getElementById("cont").getElementsByClassName("row");
	// this will return last row div id
	var length = count[count.length-1].id;
	length++;
	//another div is created with row className
	var row = document.createElement("div");
	row.className = "row";
	// another div is created with col-md-2 class name
	var col = document.createElement("div");

	col.className = "col-md-2 mt-2";
	// assign increamented id to the div
	row.setAttribute("id",length);

	// create textbox
	var textBox = document.createElement("input");
	textBox.setAttribute("type","text");
	textBox.setAttribute("name", "txt" + length);
	textBox.setAttribute("id", "txt" + length);

	// append textbox into div
	col.appendChild(textBox);
	// textbox div append to the div className as row
	row.appendChild(col);

	// another div for delete button
	var col2 = document.createElement("div");
	col2.className = "col-md-1 mb-2";

	// delete button is created
	var delBtn = document.createElement("input");
	delBtn.setAttribute("type","button");
	delBtn.setAttribute("name","btn" + length);
	delBtn.setAttribute("value","Delete");
	delBtn.setAttribute("class","btn btn-danger");
	delBtn.setAttribute("id","btn" + length);
	delBtn.setAttribute("onclick","deleteTextBox(this)");

	// append delete button into div
	col2.appendChild(delBtn);
	// delete div append to the div classname as row
	row.appendChild(col2);
	// entire row is appended to the div id as cont 
	document.getElementById("cont").appendChild(row);
}
function deleteTextBox(txtName) {
	// will return the length of div tag which class name is row
	var count = document.getElementById("cont").getElementsByClassName("row");
	var length = count.length-1;
	// this will store the id of delete button
	var strBtn = txtName.id;
	if(length == 0) {
		document.getElementById(strBtn).remove();
		document.getElementById(strBtn.replace("btn","")).remove();
	} else {
		document.getElementById(strBtn.replace("btn","")).remove();	
	}
}
