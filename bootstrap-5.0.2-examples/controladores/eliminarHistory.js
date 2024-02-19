

let btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    let id = document.getElementById('id').value
    fetch(`http://localhost:3000/history/deleteid/${id}`)
    fetch("http://localhost:3000/history/Listin")
.then((response)=>{
    return response.json()
})
.then((response)=>{
    let tabla = document.getElementById('tabla')
    response.map((value)=>{
        let res = `<tr> <td>${value.id} </td> <td>${value.description} </td> <td>${value.date} </td> <td>${value.note} </td> <td>${value.id_people} </td> </tr>  `
        tabla.innerHTML += res
    })
})
 })
