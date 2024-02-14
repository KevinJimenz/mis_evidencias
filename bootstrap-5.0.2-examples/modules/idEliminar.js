

let btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    let id = document.getElementById('id').value
    fetch(`http://localhost:3000/people/deleteid/${id}`)
    fetch("http://localhost:3000/people/Listin")
.then((response)=>{
    return response.json()
})
.then((response)=>{
    let tabla = document.getElementById('tabla')
    response.map((value)=>{
        let res = `<tr> <td>${value.id} </td> <td>${value.name} </td> <td>${value.lastname} </td> <td>${value.nickname} </td> <td>${value.email} </td> <td>${value.type} </td> </tr>  `
        tabla.innerHTML += res
    })
})
 })
