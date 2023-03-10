localStorage.clear()
localStorage.setItem('name','oli')

localStorage.setItem('age',21)
localStorage.removeItem('name')
localStorage.removeItem('age')
const person ={firstName:'oli',age:21};
const info=JSON.stringify(person)
localStorage.setItem('info',info)

const findObjectToLocalStorage = localStorage.getItem('info');
const convertObject = JSON.parse(findObjectToLocalStorage);
console.log(convertObject)
const div =document.getElementById('div')
const div1 = document.createElement('div');
div1.innerHTML=`
<ul>
<li>${convertObject.firstName}</li>
<li>${convertObject.age}</li>
</ul>
`;
div.appendChild(div1)