/*
    1.Find Even or odd
    2.Positive or negative or 0
    3.Find if a number is positive and even
*/ 
var number = 20;
if(number%2==0)
{
    document.writeln(number+" is Even"+"<br>");
}
else
{
    document.writeln(number+" is ODD"+"<br>");
}

var input = -5;

if(input > 0)
{
    document.writeln(input + " is positive"+"<br>");
}
else if (input < 0)
{
    document.writeln(input + " is negative"+"<br>");
}
else
{
    document.writeln(input + " It is Zero"+"<br>");
}

input = 40;
var result = (input > 0 && (input%2 == 0))?(input+" is positive and even"):(input+"neither is positive or even");

document.writeln(result);
