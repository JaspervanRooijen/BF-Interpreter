function cell(left, right, val) {
	this.left = back;		// Pointer to cell on left
	this.right = forw;		// Pointer to cell on right
	// this.tp = tp;			// Type of the cell
	this.val = val			// Value of cell (can be type as well)
}

// Interpreter values
curr_cell = new cell(null, null, 'null');
scope = ''

code = []
functions = {};


function parseBF(code) {
	index = 0;
	while (index < code.length) {
		switch(code[index]) {
			case '<':
				curr_cell = curr_cell.left;
				break;
			case '>':
				if (curr_cell.right !== null) {
					curr_cell = curr_cell.right
				} else {
					curr_cell = new cell(curr_cell, null, 'null')
				}
				break;
			case '%':
				index++;
				while (code[index] != '%') {
					index++;
				} index++;
				break;
			case 'b':
				curr_cell.val = 0;
				break;
			case '+':
				if (Number.isInteger(curr_cell.val)) {
					curr_cell.val += 1;
				} else {
					console.log("Cell " + curr_cell + " is not the primitive type b (byte)");
				}
				break;
			case '-':
				if (Number.isInteger(curr_cell.val)) {
					curr_cell.val -= 1;
				} else {
					console.log("Cell " + curr_cell + " is not the primitive type b (byte)");
				}
				break;
			case '|':
				index++;
				curr_cell = code[index].charCodeAt(0);
				break;
			case '.':
				if (Number.isInteger(curr_cell.val)) {
					console.log(String.fromCharCode(curr_cell.val));
				} else {
					console.log("Cell " + curr_cell + " is not the primitive type b (byte)");
				}
				break;
			case ',':
				var new_val = prompt("Enter value:");
				curr_cell.val = new_val;
				break;
			case '[':
				if (Number.isInteger(curr_cell.val)) {
					check_value = index;
					loop_code = [];
					index++;
					while (code[index] != ']') {
						loop_code.push(code[index]);
						index++;
					}
					while (check_value != 0) {
						parseBF(loop_code);
					}
					index++;
				} else {
					console.log("Loop entered on a non-byte");
				}
				break;
			case '(':
				if (Number.isInteger(curr_cell.val)) {
					check_value = index;
					loop_code = [];
					index++;
					while (code[index] != ')') {
						loop_code.push(code[index]);
						index++;
					}
					if (check_value == 0) {
						parseBF(loop_code);
					}
					index++;
				} else {
					console.log("Loop entered on a non-byte");
				}
				break;
			case '^':
				break;
			case '?':
				break;
			case '!':
				break;
			case '*':
				break;
			case '&':
				break;
			case '@':
				break;
			case '$':
				break;
			case ':':
				break;
			case '/':
				break;
			case '~':
				break;
			default:
				// execute function if defined
		}
		index++
	}
}
