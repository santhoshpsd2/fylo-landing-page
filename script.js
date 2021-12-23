
function validateform(formname){
 let x = document.forms[`${formname}`].email;
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(x.value.match(mailformat)){
        x.nextElementSibling.classList.remove('active')
        x.value = "";
        return true;
    }else{
        x.nextElementSibling.classList.add('active')   
        return false;     
    }
}