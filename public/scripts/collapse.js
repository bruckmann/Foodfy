const ingredientsHide = document.getElementById('ingredientsHide');
const ingredients = document.getElementById('ingredients');
const makemodeHide = document.getElementById('makemodeHide');
const makemode = document.getElementById('makemode');
const makemodeInfo = document.getElementById('makemodeInfo');
const makemodeInfoHide = document.getElementById('makemodeInfoHide');
const hideText = document.getElementById




ingredientsHide.addEventListener('click' , () => {
    ingredients.classList.toggle('hide')
    if (ingredients.classList.contains('hide')) {
        ingredientsHide.innerHTML = "Mostrar"
    } else {
        ingredientsHide.innerHTML = "Esconder"
    }
})

makemodeHide.addEventListener('click', () => {
    makemode.classList.toggle('hide')
    if (makemode.classList.contains('hide')) {
        makemodeHide.innerHTML = "Mostrar"
    } else {
        makemodeHide.innerHTML = "Esconder"
    }
})

makemodeInfoHide.addEventListener('click', () => {
    makemodeInfo.classList.toggle('hide')
    if (makemodeInfo.classList.contains('hide')) {
        makemodeInfoHide.innerHTML = "Mostrar"
    } else {
        makemodeInfoHide.innerHTML = "Esconder"
    }
})

