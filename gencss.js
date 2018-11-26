const fs = require('fs');
const groups = 10

function create(color) {
	for (let i = 0;i<=groups;i++) {
		fs.writeFile( (`${i}${color}.css`), "", err => {
			console.log(err) }
		)
	}
}


create("r")
create("b")
