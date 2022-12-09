function PublishYear(controlID,number)
{
    var control = document.getElementById(controlID);
    var collection = document.getElementsByClassName("errorC");

    if(control.value == "" || !(/[0-9]/).test(control.value) ||  control.value >= 2022)
    {
        control.style.border = "1.5px solid";
        control.style.borderColor = "rgb(179, 8, 8)";
        collection[number].innerHTML =`Please Enter the valid ${controlID} year`;    
    }
    else
    {
        control.style.border = "1.5px solid green";
        var collection = document.getElementsByClassName("errorC");
        collection[number].innerHTML ="";
    }
}

function Price(controlID,number)
{
    var control = document.getElementById(controlID);
    
    console.log(control.value);

    var collection = document.getElementsByClassName("errorC");
    if(control.value == "" || !(/[0-9]/).test(control.value) || (/[a-z]/).test(control.value))
    {
        control.style.border = "1.5px solid";
        control.style.borderColor = "rgb(179, 8, 8)";
        collection[number].innerHTML =`Please Enter the valid ${controlID} year`;    
    }
    else
    {
        control.style.border = "1.5px solid green";
        var collection = document.getElementsByClassName("errorC");
        collection[number].innerHTML ="";
    }

}
function validateFields(controlID,number)
{
        var collection = document.getElementsByClassName("errorC");  
        var control = document.getElementById(controlID);
    
        if(control.value == "" || control.value == null)
        {
            control.style.border = "1.5px solid";
            control.style.borderColor = "rgb(179, 8, 8)";
            collection[number].innerHTML =`Please Enter the ${controlID}`;    
        }
        else if( control.value > 0 || (/[0-9]/).test(control.value) )
        {
            control.style.border = "1.5px solid";
            control.style.borderColor = "rgb(179, 8, 8)";
            collection[number].innerHTML =`Numerical value not allowed`;
        }
        else if( (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/).test(control.value))
        {
            control.style.border = "1.5px solid";
            control.style.borderColor = "rgb(179, 8, 8)";
            collection[number].innerHTML =`Special character not allowed`;
        }
        else if((control.value).length > 50)
        {
            control.style.border = "1.5px solid";
            control.style.borderColor = "rgb(179, 8, 8)";
            collection[number].innerHTML =`${controlID} length should not exceed 50`;
        } 
        else
        {
            control.style.border = "1.5px solid green";
            var collection = document.getElementsByClassName("errorC");
            collection[number].innerHTML ="";
        }
}


function IsInputText(controlID,event,number)
{
    var control = document.getElementById(controlID);
    var ch = String.fromCharCode(event.which);
    var collection = document.getElementsByClassName("errorC");

    if((/[0-9]/).test(ch))
    {
        collection[number].innerHTML =`Numerical value not allowed`;
        control.style.border = "1.5px solid";
        control.style.borderColor = "rgb(179, 8, 8)";
    }
    else if((/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/).test(ch))
    {
        collection[number].innerHTML =`Special character is not allowed`;
        control.style.border = "1.5px solid";
        control.style.borderColor = "rgb(179, 8, 8)";
    }
    else
    {
        control.style.border = "1.5px solid green";
        collection[number].innerHTML ="";
    }


}

function IsValidEmail(controlID,number)
{

    var control = document.getElementById(controlID);
    var collection = document.getElementsByClassName("errorC");

    if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(control.value))
    {
        collection[number].innerHTML =`Please enter valid Email Address`;
        control.style.border = "1.5px solid";
        control.style.borderColor = "rgb(179, 8, 8)";
    }
    else
    {
        control.style.border = "1.5px solid green";
        var collection = document.getElementsByClassName("errorC");
        collection[number].innerHTML ="";
    }
}

function setData()
{

      var values = [];
      
      function BookInfo(name,numbers)
      {
        this.name = name;
        this.numbers = numbers;
    
      }
      var object1 = new BookInfo("bookName",0); 
      var object2 = new BookInfo("mail",1);
      var object3 = new BookInfo("name",2);
      var object4 = new BookInfo("published",3);
      var object5 = new BookInfo("price",4);

      values.push(object1);
      values.push(object2);
      values.push(object3);
      values.push(object4);
      values.push(object5);

      var flag = false;
      values.forEach( (element) => {   
            if(document.getElementById(element.name).value == "")
            {
                validateFields(element.name,element.numbers);
                flag = true;
            } 
      });

      
      if(!flag)
      {
        let formData = 
        {
            category : document.getElementById("option").value,
            bookName : document.getElementById("bookName").value,
            mail : document.getElementById("mail").value,
            name : document.getElementById("name").value,
            published : document.getElementById("published").value,
            price : document.getElementById("price").value
        }

        localStorage.setItem('formData',JSON.stringify(formData));
        alert("Successfully Saved the data..."); 
      }       
}


function resetField()
{
    var books = document.getElementById("bookName");
    var mails = document.getElementById("mail");
    var names = document.getElementById("name");
    var publisheds = document.getElementById("published");
    var prices = document.getElementById("price");

    var collection = document.getElementsByClassName("errorC");

    var bgC = "1px solid black";
    books.style.border = bgC;
    collection[0].innerHTML = "";
    mails.style.border = bgC;
    collection[2].innerHTML = "";
    names.style.border = bgC;
    collection[1].innerHTML = "";
    publisheds.style.border = bgC;
    collection[3].innerHTML = "";
    prices.style.border = bgC;
    collection[4].innerHTML = "";
}