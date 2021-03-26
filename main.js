function pobieranie()  { let pizza = document.getElementById('pizza').value; console.log(pizza)   }

function changeTelefon(val) {
    const arr = val.split('')
    const num = arr.filter(item => {
        if(item === '0' || item === '1' || item === '2' || item === '3' || item === '4' || item === '5' || item === '6' || item === '7' || item === '8' || item === '9') {
            return item
        } else {
            alert(`${'"' + item + '"'} To nie jest cyfra `)
            return
        }
    })
    console.log(num)
}
function changeImie() {
    let imie = document.getElementById('inp1').value
    if(imie.length < 3) {
    alert("Imię nie może być krótsze niż 3 znaki.")
    }
}
function changeNazwisko() {
    let nazwisko = document.getElementById('inp2').value
    if(nazwisko.length < 2) {
        alert("Nazwisko nie może być krótsze niż 2 znaki.")
    }
}
function getImie() {
    let imie = document.getElementById('inp1').value
    if(imie.length < 3) {
        alert("Imię nie może być krótsze niż 3 znaki.")
        return
    } else {
       console.log("Imię:", imie) 
    }
}
function getNazwisko() {
    let nazwisko = document.getElementById('inp2').value
    if(nazwisko.length < 2) {
        alert("Nazwisko nie może być krótsze niż 2 znaki.")
    } else {
        console.log("Nazwisko:", nazwisko)
    }
}
function getTelefon() {
    let telefon = document.getElementById('inp3').value
    console.log("Telefon:", telefon)
}
function pizza() {
    let pizza = document.getElementById('pizza').value
    console.log("Pizza:", pizza)
}