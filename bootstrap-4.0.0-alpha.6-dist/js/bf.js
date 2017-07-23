function cell(left, right, prim, val) {
	this.left = back;		// Pointer to cell on left
	this.right = forw;		// Pointer to cell on right
	this.prim = prim;		// Is this cell a primitive byte?
	this.val = val			// Value of cell (can be type as well)
}

// Interpreter values
curr_cell = new cell(null, null, true, 0);

code = []
functions = {};


function parseBF(code) {
	index = 0;
	while (index < code.length) {
		switch(code[index]) {
			case '<':
				break;
			case '>':
				break;
			case '%':
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
		}
		index++
	}
}
