console.log('hi')
let count =0;
document.getElementById('add-btn').addEventListener('click',function(){
    const countField = document.getElementById('count-id');
    const countNumber = count++;
    countField.innerText = countNumber;
    localStorage.setItem('countNumber',countNumber);
})