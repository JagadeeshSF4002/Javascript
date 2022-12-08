//for loop

for(let i=0;i<5;i++)
{
    document.write("<span style='border:3px solid black;padding:10px;'>"+i+"</span>");
}
document.write("<h3>For loop </h3> <hr> <br> ")
//while loop

let i=2;
while(i != 10)
{
    document.write("<span style='border:3px solid black;padding:10px;'>"+i+"</span>");
    i=i+2;
}
document.write("<h3> while loop </h3> <hr> <br>")
//do while loop

i=1;
do 
{
    document.write("<span style='border:3px solid black;padding:10px;'>"+i+"</span>");
    i=i+3;
} while (i != 10);
document.write("<h3> do while</h3> <hr> <br>")
//for each loop

const my_array = ["Iphone","OnePlus","RedMi","Oppo","Honor","Realme","HTC","Nokia","Hauwei"];
my_array.forEach(function(elem,index){ 
    document.write(`<span style='border:3px solid black;padding:10px;'>${index}</span>`);
    document.write(`<span style='border:3px solid black;padding:10px;'>${elem}</span>`);
});
document.write("<h3>ES5 For Each is used </h3> <hr> <br>");


my_array.forEach((elem,index) => document.write(`<span style='border:3px solid black;padding:10px;'>${elem}</span>`));
document.write("<h3>ES5 For Each Arrow Function is used </h3> <hr> <br>");

for(let data of my_array)
{
    document.write(`<span style='border:3px solid black;padding:10px;'>${data}</span>`);
}
document.write("<h3> ES6 For of is used </h3> <hr> <br>");

for(let[index,elem] of my_array.entries())
{
    document.write(`<span style='border:3px solid black;padding:10px;'>${index}</span>`);
    document.write(`<span style='border:3px solid black;padding:10px;'>${elem}</span>`);
}
document.write("<h3> ES6 for of for accessing a index using entries method </h3> <hr> <br>");



for(let property in my_array)//Its only getting index
{
    document.write(`<span style='border:3px solid black;padding:10px;'>${property}</span>`);
    document.write(`<span style='border:3px solid black;padding:10px;'>${my_array[property]}</span>`);
}
document.write("<h3>ES6 for in loop </h3> <hr> <br>");