
let y =4;
let spaces = y - 1;

for (let line = 1; line <= y; line++) {
    let stars = 2*line - 1;

    
    for (let k = 1; k <= spaces; k++)// Print spaces
        process.stdout.write(' ');

    
    for (let j = 1; j <= stars; j++)// Print stars
        process.stdout.write('*');

    
    spaces = spaces - 1;
    console.log();
}
let yy =5;
let spacess =1;
for (let line = y; line >= 1; line--) {
    let stars = 2*line - 1;

    
    for (let k = 1; k < spacess; k++)// Print spaces
        process.stdout.write(' ');

    spacess = spacess +1;
    for (let j = 1; j <= stars; j++)// Print stars
        process.stdout.write('*');

    
    spaces = spaces - 1;
    console.log();
}
