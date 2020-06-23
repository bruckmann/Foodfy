
const cards = document.querySelectorAll('.card');

const fechar = document.getElementById('closed');





for (let card of cards) {

    card.addEventListener("click", () => {
        const ID = card.getAttribute('id')
        window.location.href= `/recips/${ID}`
    })


}

