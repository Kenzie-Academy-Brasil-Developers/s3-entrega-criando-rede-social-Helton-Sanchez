

export function createCardModal(array) {
    const modal = document.querySelector('.container__dialog')
    modal.showModal()

    modal.innerHTML = ''

    const cardContainer = document.createElement('form')

    const cardImg = document.createElement('img')
    const cardNameUser = document.createElement('h3')
    const cardStack = document.createElement('span')
    const cardCloseButton = document.createElement('button')
    const cardTitle = document.createElement('h2')
    const cardText = document.createElement('p')

    cardContainer.classList.add('card__modal')

    cardImg.src = array.img
    cardImg.alt = array.user

    cardNameUser.innerText = array.user

    cardStack.innerText = array.stack

    cardTitle.innerText = array.title
    
    cardText.innerText = array.text

    cardCloseButton.innerText = 'X'
    cardCloseButton.classList.add('closeButton')

    modal.appendChild(cardContainer)
    cardContainer.append(cardImg, cardNameUser, cardStack, cardTitle, cardText, cardCloseButton)

    return cardContainer
}