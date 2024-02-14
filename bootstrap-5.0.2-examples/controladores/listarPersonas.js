
fetch("http://localhost:3000/people/Listin")
.then((response)=>{
    return response.json()
})
.then((response)=>{
    let tabla = document.getElementById('tabla')
    response.map((value)=>{
        let valores=  `<tr> <td>${value.id} </td> <td>${value.name} </td> <td>${value.lastname} </td> <td>${value.nickname} </td> <td>${value.email} </td> <td>${value.type} </td> </tr> `
        tabla.innerHTML += valores
    }
)
})