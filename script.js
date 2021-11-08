function validateage(a){
  if(a>=1 && a<=99)
  {
    return 1;
  }
  else{
    return 0;
  }
  
}

function validateName(a)
{
  let regName = /^[a-zA-Z]+$/;
  if(regName.test(a))
  {
  return 1;
  }
  else
  {
  return 0;
  }
}

function validateMail(a){
  let regName = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(regName.test(a))
        {
        return 1;
        }
        else
        {
        return 0;
        }
}


function validatePwd(a){
  let regName = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(regName.test(a))
        {
        return 1;
        }
        else
        {
        return 0;
        }
}

let main = document.getElementById("one");


var but = document.getElementById('sub');
but.addEventListener('click',(e) => {
e.preventDefault();
var first = document.getElementById('age').value;
var k = validateage(first);
var second = document.getElementById('name').value;
var s = validateName(second);
var third = document.getElementById("mail").value;
var u = validateMail(third);
var fourth = document.getElementById("psw").value;
var v = validatePwd(fourth);


if(s === 0 || k === 0 || u === 0 || v === 0 ){
if(s === 0)
{
  alert("Only alphabet is valid")
}
if(k === 0)
{
  alert("age must be within 1 to 99");
}
if(u === 0){
  alert("full email-id is valid (i.e) Example@you.com ")
}
if(v === 0)
{
  alert("Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters ")
}
}
else{
  if(s===1)
  {
     let maindiv1 = document.createElement("div");
     maindiv1.setAttribute("class","div1");
     main.appendChild(maindiv1);
     let mainlab = document.createElement("label");
     mainlab.setAttribute("for","label1");
     mainlab.innerHTML = "Name: ";
     maindiv1.appendChild(mainlab);
     let maininp = document.createElement("input");
     maininp.setAttribute("type","text");
     maininp.class="form-control mt-1";
     maininp.id="nametext1";
     maindiv1.appendChild(maininp);
     document.getElementById("nametext1").value=second;
       
 }
 if(k===1)
 {
  let maindiv2 = document.createElement("div");
  maindiv2.setAttribute("class","div1");
  main.appendChild(maindiv2);
  let mainlab1 = document.createElement("label");
  mainlab1.setAttribute("for","label1");
  mainlab1.innerHTML = "Age: ";
  maindiv2.appendChild(mainlab1);
  let maininp1 = document.createElement("input");
  maininp1.setAttribute("type","text");
  maininp1.class="form-control mt-1";
  maininp1.id="Agetext";
  maindiv2.appendChild(maininp1);
  document.getElementById("Agetext").value=first;
 }
  if(u===1)
 {
  let maindiv3 = document.createElement("div");
  maindiv3.setAttribute("class","div1");
  main.appendChild(maindiv3);
  let mainlab2 = document.createElement("label");
  mainlab2.setAttribute("for","label1");
  mainlab2.innerHTML = "Email: ";
  maindiv3.appendChild(mainlab2);
  let maininp2 = document.createElement("input");
  maininp2.setAttribute("type","text");
  maininp2.class="form-control mt-1";
  maininp2.id="Emailtext";
  maindiv3.appendChild(maininp2);
  document.getElementById("Emailtext").value=third; 
 }

 if(v===1)
 {
  let maindiv4 = document.createElement("div");
  maindiv4.setAttribute("class","div1");
  main.appendChild(maindiv4);
  let mainlab3 = document.createElement("label");
  mainlab3.setAttribute("for","label1");
  mainlab3.innerHTML = "Passward: ";
  maindiv4.appendChild(mainlab3);
  let maininp3 = document.createElement("input");
  maininp3.setAttribute("type","text");
  maininp3.class="form-control mt-1";
  maininp3.id="pwdtext";
  maindiv4.appendChild(maininp3);
  document.getElementById("pwdtext").value=fourth; 
 }
}


})