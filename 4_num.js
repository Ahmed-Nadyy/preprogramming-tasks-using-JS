function doo(){

    let suggestionNumber = 100;
let frth = 0;
let a=0;
for (let i = 0; i <= suggestionNumber; i++) {
  for (let j = 0; j <= suggestionNumber; j++) {
    for (let k = 0; k <= suggestionNumber; k++) {
      if (i != j && j != k && k != i) {
        frth = suggestionNumber - (i + j + k);
        console.log(frth + " " + i + " " + j + " " + k);
        a=1;
      }
      if(a==1){break;}
    }
    if(a==1){break;}
  }
  if(a==1){break; }
}

}


doo();



/*
psudo code of suggestion 4 numbers -- Ahmed NAdy Essa
1   هعمل فور لوب بتمشي من 1 لحد عدد معين عاوز الفور توقف عندها
2    هعمل فور تانية نيستد نفس الكلام 
3   هعمل فور تالتة عشان تخمن الرقم التالت 
4   لو ال 3 اعداد ميساووش بعض روح لرقم 6 لو لا روح ل 7
6   هعمل معادلة بتطرحلي قيمة الرقم الي عاوز اخمنله 4 ارقام من ال 3 ارقام الي تم تخمينهم ومن ثم اطبع الاربع ارقام ومن ثم هخلي قيمة البووليان ب 1 
7   لو البولييان بتاعي ب 1 هوقف كل اللوبس
8   لو ب 0 هكمل اللوب لحد ما تبقا ب واحد او اللوب تخلص


*/