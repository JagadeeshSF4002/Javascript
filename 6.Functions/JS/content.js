//functions
for(let i=2;i<20;i=i+2)
{
    document.write(`<span style="border:1px solid black;font-size:28px;">Addition of ${i} and ${i+2} is ${Addition(i,i+2)} </span> <br><br>`);
}

function Addition(a,b)
{
    return a+b;
}