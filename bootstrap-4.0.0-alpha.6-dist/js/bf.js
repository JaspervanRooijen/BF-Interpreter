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
				break;
			case '+':
				break;
			case '-':
				break;
			case '|':
				break;
			case '.':
				break;
			case ',':
				break;
			case '[':
				break;
			case '(':
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
