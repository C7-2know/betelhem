function navigation(){
    var menu=document.getElementById('nav');
    if(menu.className=="navigation"){
        menu.className="hor_nav"
    }else{
        menu.className="navigation";
    }
}
function Navigation_bar(){
    var nav_bar=document.getElementById('nav')
    if(nav_bar.className=="header__nav"){
        nav_bar.className="responsive--nav"
    }else{
        nav_bar.className="header__nav"
    }
}



function ShowTranscript(){
    var button=document.getElementById("button");
    var paragraph=document.getElementById('paragraph--4');
    if(paragraph.className=='paragraph--4'){
        paragraph.className='paragraph--4-visible'
        button.innerHTML='click to hide'
    }else{
        paragraph.className='paragraph--4'
        button.innerHTML='click for transcript'
    }
}




var name_error=document.getElementById('name_error');
function validateName(){
    var name=document.getElementById('name').value;
    if(name.length==''){
        name_error.innerHTML='name is required';
        return false;
    }else{
        name_error.innerHTML='';
        return true
    }

}


const Phone=document.getElementById('phone_error');
function validatePhoneNumber(){
    const num=document.getElementById('p_number').value;
    if(isNaN(num)==true){
        Phone.innerHTML="only numbers are valid";
    }
    else if(num.length==''){
        Phone.innerHTML='phone number is required';
        return false;
    }
    else if(num.length<10){
        Phone.innerHTML="number must be more than 9 digit"
    }
    else if(num.length>12){
        Phone.innerHTML="invalid number: please Enter again";
        return false;
    }
    else if(num.length==0){
        Phone.innerHTML="Phone number is required ";
        return false;
    }else{
        Phone.innerHTML='';
        return true;
    }
}

var email_err=document.getElementById('email_error')
function validateEmail(){
    var email=document.getElementById('email').value;
    email=email.split('@')
    if(email.length<2){
        email_err.innerHTML='a valid email must contain @ ';
        return false;
    }else{
        email_err.innerHTML=''
    }
}

var date_err=document.getElementById('date_error'); 
function validateDate(){
    var date=document.getElementById('date').value;
    date=date.split('-');
    var current=new Date()
    date_err.innerHTML=current.getFullYear();;
    var day=current.getDate(), month=current.getMonth(), year=current.getFullYear();
    if(date.length<3){
        date_err.innerHTML="insert full date";
    }
    else if ((date[2]<day)&&(date[1]<=month+1) &&(date[0]<=year)){
        date_err.innerHTML='insert a valid day'
        return false;
    }
    else if ((date[1]<month)&&(date[0]<year)){
        date_err.innerHTML='insert a valid month'
        return false;
    }
    else if (date[0]<year){
        date_err.innerHTML='insert a valid year'
        return false;
    }
    else{
        date_err.innerHTML='';
        return true;
    }
}
var money_err=document.getElementById('money_error')
function validateMoney(){
    var amount=document.getElementById('money').value;
    if(amount.length==''){
        money_err.innerHTML='The amount of money is should be entered'
    }else{
        money_err.innerHTML=''
        
    }
}
var choice_err=document.getElementById('error')
function programType(){
    var program=document.getElementById('rad').value;
    if(program.length==''){
        choice_err.innerHTML='The type of program is required'
        return false;
    }else{
        choice_err.innerHTML=''
        return true
    }
}

function validateSubmission(){
    var feedback=document.getElementById('message');
    var feedback1=document.getElementById('message2');
    if(programType()!=true||validateDate()!=true||validatePhoneNumber()!=true){
        feedback.innerHTML='You have not entered the required forms';
        feedback1.innerHTML='';
        return false;
    }else{
        feedback.innerHTML=''
        feedback1.innerHTML="You have reserve the day successfully!"
        return false;
    }
}
function sendMessage(){
    var area=document.getElementById('send');
    area.innerHTML="Thank you for your support"
}