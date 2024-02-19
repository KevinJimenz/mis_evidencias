fetch("http://localhost:3000/history/Listin")
.then((response)=>{
    return response.json()
})
.then((response)=>{
    let tabla = document.getElementById('tabla')
    response.map((value)=>{
        let valores=  `<tr> <td>${value.id} </td> <td>${value.description} </td> <td>${value.date} </td> <td>${value.note} </td> <td>${value.id_people} </td> </tr> `
        tabla.innerHTML += valores
    }
)
})