' use strict'
let allEmployeeObject =[ ]; 


function Employee (employeeID,fullName, department ,level ,empImage ){
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department //[ Administration,Marketing,Development,Finance];
    this.level = level //[Junior,Mid-Senior, Senior];
    this.empImage= empImage ;
    ;

    this.salary();
    allEmployeeObject.push(this) ;

  }

  let department=[ "Administration","Marketing","Development","Finance"];
  let level=[ "Junior","Mid-Senior","Senior"];


  let emplooyesDiv=document.getElementById("emplooyes");
  



  Employee.prototype.render = function(){
   let heading=document.createElement("h5");
   heading.textContent="Name: "+this.fullName +", ID: "+this.employeeID;
   let heading1=document.createElement("h5");
   heading1.textContent="Depaertment: "+this.department +", Level: "+this.level;
   let heading2=document.createElement("h5");
   heading2.textContent="Salary: "+this.salary;
   
   let imageslist=document.createElement("img");
    imageslist.setAttribute("src",this.empImage);
    imageslist.setAttribute("width","150");
    imageslist.setAttribute("height","150");


   emplooyesDiv.appendChild(imageslist);
   emplooyesDiv.appendChild(heading);
  emplooyesDiv.appendChild(heading1)
  emplooyesDiv.appendChild(heading2)




  };

  Employee.prototype.salary= function (){
    if (this.level=="Senior") {
        var sal =Math.floor(Math.random() * (2000- 1500)) + 1500;
        this.salary = sal - (sal*0.075);
    }
    else if (this.level=="Mid-Senior") { 
        var sal =Math.floor(Math.random() * (1500- 1000)) + 1000;
        this.salary = sal - (sal*0.075);
    }
    else {
        var sal =Math.floor(Math.random() *(1000- 500)) + 500;
        this.salary = sal - (sal*0.075);
    }
}




 let ghaziEmployee = new Employee(1000,"Ghazi Samer",department[0] ,level[2],'.\\images\\Ghazi.jpg');
 let lanaEmployee = new Employee(1001,"Lana Ali",department[3],	level[2],".\\images\\Lana.jpg");
 let tamaraEmployee = new Employee(1002,"Tamara Ayoub",department[1],	level[2],".\\images\\Tamara.jpg");
 let saifEmployee = new Employee(1003,"Safi Walid",department[0],level[1],".\\images\\Safi.jpg");
 let omarEmployee = new Employee(1004,"Omar Zaid",department[2],level[2],".\\images\\Omar.jpg");
 let ranaEmployee = new Employee(1005,"Rana Saleh",department[2],level[0],".\\images\\Rana.jpg");
 let hadiEmployee = new Employee(1006,"Hadi Ahmad",department[3],level[1],".\\images\\Hadi.jpg");

ghaziEmployee.render();
lanaEmployee.render();
tamaraEmployee.render();
saifEmployee.render();
omarEmployee.render();
ranaEmployee.render();
hadiEmployee.render();


var getRandomId = function () {
    return Math.floor(Math.random() * (9000- 1000)) + 1000;
}

let empMain=document.getElementById("empMain");
let title=document.createElement("h1");
title.textContent="Add Emplooye :"
empMain.appendChild(title);





let form=document.getElementById("form");
form.addEventListener( "submit",handleSubmit);
function handleSubmit(event){
    event.preventDefault();
    let fullName=event.target.fullName.value;
    let department=event.target.department.value;
    let level=event.target.level.value;
    let empImage=event.target.empImage.value;

    let newEmployee=new Employee(getRandomId(), fullName,department,level,empImage);
    newEmployee.render();
}