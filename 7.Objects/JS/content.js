//Objects

// var employee1 = {
//     Name : "Praveen Kumar",
//     Age: 22,
//     Gender:"Male",
//     Qualification:"B.E.(C.S.E)",
//     FatherName:"RangaNathan",
//     Occupation:"Car driver",
//     Company:"Syncfusion",
//     Designation:"Junior Developer",

//     display:function()
//     {
//         document.write(`<div style="border:1px solid black;width:300px;margin:10px;padding:20px;text-align:center;float:left;background-color:#009933;">`);
//         document.write(`<h3>Name : ${this.Name}<h3>`);
//         document.write(`<h3>Age : ${this.Age}</h3>`);
//         document.write(`<h3>Gender : ${this.Gender}</h3>`);
//         document.write(`<h3>Qualification : ${this.Qualification}</h3>`);
//         document.write(`<h3>Father's name  : ${this.FatherName}</h3>`);
//         document.write(`<h3>Occupation : ${this.Occupation}</h3>`);
//         document.write(`<h3>Company : ${this.Company}</h3>`);
//         document.write(`<h3>Designation : ${this.Designation}</h3>`);
//         document.write(`</div>`);

//     }
// }
// employee1.display();

//constructor

function Employee(Name,Age,Gender,Qualification,FatherName,Occupation,Company,Designation)
{
    this.Name = Name;
    this.Age = Age;
    this.Gender = Gender;
    this.Qualification = Qualification;
    this.FatherName = FatherName;
    this.Occupation = Occupation;
    this.Company = Company;
    this.Designation = Designation;

    this.display = function()
    {
        document.write(`<div style="border:1px solid black;width:300px;margin:10px;padding:20px;text-align:center;float:left;background-color:#009933;">`);
        document.write(`<h3>Name : ${this.Name}<h3>`);
        document.write(`<h3>Age : ${this.Age}</h3>`);
        document.write(`<h3>Gender : ${this.Gender}</h3>`);
        document.write(`<h3>Qualification : ${this.Qualification}</h3>`);
        document.write(`<h3>Father's name  : ${this.FatherName}</h3>`);
        document.write(`<h3>Occupation : ${this.Occupation}</h3>`);
        document.write(`<h3>Company : ${this.Company}</h3>`);
        document.write(`<h3>Designation : ${this.Designation}</h3>`);
        document.write(`</div>`);
    }
}

var employee2 = new Employee("Rajesh",22,"male","Diploma Mechnaical","Aravind","Finance officer","Syncfusion","Junior Developer");
var employee3 = new Employee("Arun",22,"male","Diploma Electrical","Soma Sundaran","Taylorr","Syncfusion","Junior Developer");
var employee4 = new Employee("Kamesh",22,"male","B.E.(E.E.E)","Rajrendran","Farmer","Syncfusion","Junior Developer");
employee2.display();
employee3.display();
employee4.display();
