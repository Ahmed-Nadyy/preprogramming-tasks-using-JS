function doo(){


    let y = 6;
let spaces = y - 1;

for (let line = 1; line <= y; line++) {
    let stars = line - 1;

    let spaceString = ' '.repeat(spaces);
    let starString = '*'.repeat(stars);

    process.stdout.write(spaceString + starString);

    spaces = spaces - 1;
    console.log();
}

}

doo();


/* 
psudo code of pyramid   -- Ahmed Nady Essa

1   هنعرف طول الهرم الي المفروض يوقف عنده 
2    وبعدين هنعمل فور لوب هتمشي لحد طول الهرم 
3   وبعدين هنجسب في كل لفة عدد النجوم هيبقا كام وعدد المسافات هيبقا كام علي حسب شكل الهرم 
4   وبعدين هستخدم فانكشن الريبيت عشان تكررلي النجوم والسبيسز عشان مش هينقع استخدم اللوب 
5  وبعدها اطبع كونسل دوت لوج عشان انزل سطر




*/