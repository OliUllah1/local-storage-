const addData =(buttonId,inputId,keyName)=>{
    document.getElementById(buttonId).addEventListener('click',function(){
        const nameField = document.getElementById(inputId);
        const name = nameField.value;
        localStorage.setItem(keyName, name);
    })
}
const deleteData = (buttonId,keyName) =>{
    document.getElementById(buttonId).addEventListener('click',function(){
        localStorage.removeItem(keyName);
    })
}

addData('send-name-btn','name-field','name');
deleteData('delete-name-btn','name');

addData('')