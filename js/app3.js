const addData =(buttonId,inputId,keyName)=>{
    document.getElementById(buttonId).addEventListener('click',function(){
        const nameField = document.getElementById(inputId);
        const name = nameField.value;
        localStorage.setItem(keyName, name);
        nameField.value = '';
    })
}
const deleteData = (buttonId,keyName) =>{
    document.getElementById(buttonId).addEventListener('click',function(){
        localStorage.removeItem(keyName);
    })
}

addData('send-name-btn','name-field','name');
deleteData('delete-name-btn','name');

addData('send-email-btn','email-field','email');
deleteData('delete-email-btn','email');

addData('message-send-btn','message-field','message');
deleteData('message-delete-btn','message');

document.getElementById('reset-btn').addEventListener('click',function(){
    localStorage.clear()
})