const modal = document.querySelector('.modal');

const cards = document.querySelectorAll('.card');

const fechar = document.getElementById('closed');

let titulo = document.getElementById('titulo');
let autor = document.getElementById('autor');




for (let card of cards) {

    card.addEventListener("click" , () => {
    const imgID = card.getAttribute('id')

    modal.classList.add('active')
    modal.querySelector('img').src = `assets/${imgID}`

    if (imgID === "burger.png") {
        titulo.innerHTML = `Triplo bacon burguer`
        autor.innerHTML = `por Jorge Relato`
    }

    if (imgID === "espaguete.png") {
        titulo.innerHTML = `Espaguete ao alho`
        autor.innerHTML = `por Julia Kinoto`
    }

    if (imgID === "pizza.png") {
        titulo.innerHTML = `Pizza 4 estações`
        autor.innerHTML = `por Fabiana Melo`
    }

    if (imgID === "lasanha.png") {
        titulo.innerHTML = `Lasanha mac'cheese`
        autor.innerHTML = `por Juliano Vieira`
    }

    if (imgID === "doce.png") {
        titulo.innerHTML = `Docinho pão do céu`
        autor.innerHTML = `por Ricardo Golves`
    }

    if (imgID === "asinhas.png") {
        titulo.innerHTML = `Asinhas de frango ao barbecue`
        autor.innerHTML = `por Vania Steroski`
    }
    

    })

    fechar.addEventListener("click" , () => {
        modal.classList.remove('active')
    })

}
