

function validateID(controlID)
{
    var control = document.getElementById(controlID);
    if(control.value == "")
    {
        control.style.border = '2px solid red';
    }
    else
    {
        control.style.border = '2px solid green';
    }
}
