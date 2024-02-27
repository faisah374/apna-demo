import inquirer
 from "inquirer";
 let answers =await inquirer_1.default.prompt([{
    name:"age",
    type: "number",
    message:"enter your age"

 }]);
 console.log("insaha allah, in" + (60 - answers.age)+" years you will be 60 years old");






