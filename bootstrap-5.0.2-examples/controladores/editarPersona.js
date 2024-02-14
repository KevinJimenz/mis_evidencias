

let btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{
    let id = document.getElementById('id').value
    let name = document.getElementById('name').value
    let lastname = document.getElementById('lastname').value
    let nickname = document.getElementById('nickname').value
    let email = document.getElementById('email').value
    let type = document.getElementById('type').value
    fetch(`http://localhost:3000/people/update/${id}/${name}/${lastname}/${nickname}/${email}/${type}`)
    fetch("http://localhost:3000/people/Listin")
    .then((response)=>{
        return response.json()
    })
    .then((response)=>{
        let tabla = document.getElementById('tabla')
        response.map((value)=>{
            let valores=  `<tr> <td>${value.id} </td> <td>${value.name} </td> <td>${value.lastname} </td> <td>${value.nickname} </td> <td>${value.email} </td> <td>${value.type} </td> </tr> `
            tabla.innerHTML += valores
        })
    })
})