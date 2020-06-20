const modal = document.querySelector('.modal');

const cards = document.querySelectorAll('.card');

const fechar = document.getElementById('closed');

let titulo = document.getElementById('titulo');
let autor = document.getElementById('autor');


const conteudo = {
    'burger': {
    titulo: 'Triplo bacon burguer',
    autor: 'Por Jorge Relato'
    },
    'pizza': {
    titulo: 'Pizza 4 estações',
    autor: 'Por Fabiana Melo'
    },
    'espaguete': {
        titulo: 'Espaguete ao alho',
        autor: 'Por Julia Kinoto'
    },
    'lasanha': {
        titulo: `Lasanha mac'chesse`,
        autor: 'Por Juliano Vieira'
    }, 
    'doce': {
        titulo: 'Docinho pão do céu',
        autor: 'Por Ricardo Golves'
    },
    'asinhas': {
        titulo: 'Asinhas de frango ao barbecue',
        autor: 'Por Vania Steroski'
    }

}

for (let card of cards) {

    card.addEventListener("click", () => {
    const imgID = card.getAttribute('id')

    modal.classList.add('active')
    modal.querySelector('img').src = `assets/${imgID}`

    const imagemSemExtenssao = imgID.split('.')[0]

    titulo.innerHTML = conteudo[imagemSemExtenssao].titulo;
    autor.innerHTML = conteudo[imagemSemExtenssao].autor;

    })

    fechar.addEventListener("click", () => {
    modal.classList.remove('active')
    })

}

