localStorage.setItem('name','oli')
localStorage.setItem('age',21)
localStorage.removeItem('name')
localStorage.removeItem('age')
const person ={firstName:'oli',age:21};
console.log(person)
const info=JSON.stringify(person)
console.log(info)
localStorage.setItem('info',info)