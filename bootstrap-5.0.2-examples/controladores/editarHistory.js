

let btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{
    let id = document.getElementById('id').value
    let des = document.getElementById('des').value
    let date = document.getElementById('date').value
    let note = document.getElementById('note').value
    let idPerson = document.getElementById('IdPerson').value

    fetch(`http://localhost:3000/history/update/${id}/${des}/${date}/${note}/${idPerson}`)
    fetch("http://localhost:3000/history/Listin")
    .then((response)=>{
        return response.json()
    })
    .then((response)=>{
        let tabla = document.getElementById('tabla')
        response.map((value)=>{
            let valores=  `<tr> <td>${value.id} </td> <td>${value.description} </td> <td>${value.date} </td> <td>${value.note} </td> <td>${value.id_people} </td>  </tr> `
            tabla.innerHTML += valores
        })
    })
})