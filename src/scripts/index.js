import { suggestUsers, users, posts } from "./database.js";
import { createCardModal } from "./modal.js";


const listSuggestUsers = document.querySelector('.suggestUsers')
const listPosts = document.querySelector('.postUsers')

export function renderSuggest(array) {

    listSuggestUsers.innerHTML = ''

    array.forEach(suggest => {
        const card = createCardSuggest(suggest)

            listSuggestUsers.appendChild(card)
    });


}
export function renderPosts(array) {

    listPosts.innerHTML = ''

    array.forEach(post => {
        const card = createCardPost(post)

            listPosts.appendChild(card)
    });


}

function createCardSuggest(suggest) {

    const cardContainer = document.createElement('li')

    const cardImg = document.createElement('img')
    const cardNameUser = document.createElement('h3')
    const cardStack = document.createElement('span')
    const cardButton = document.createElement('button')

    cardContainer.classList.add('card__suggestUser')

    cardImg.src = suggest.img
    cardImg.alt = suggest.user

    cardNameUser.innerText = suggest.user

    cardStack.innerText = suggest.stack

    cardButton.innerText = 'Seguir'
    cardButton.classList.add('followButton')

    listSuggestUsers.appendChild(cardContainer)
    cardContainer.append(cardImg, cardNameUser, cardStack, cardButton)

    return cardContainer
}
function createCardPost(post) {

    const cardContainer = document.createElement('li')

    const cardImg = document.createElement('img')
    const cardNameUser = document.createElement('h3')
    const cardStack = document.createElement('span')
    const cardTopic = document.createElement('h2')
    const cardDescription = document.createElement('p')
    const cardButton = document.createElement('button')

    cardContainer.classList.add('card__postUser')

    cardImg.src = post.img
    cardImg.alt = post.user

    cardNameUser.innerText = post.user

    cardStack.innerText = post.stack

    cardTopic.innerText = post.title

    cardDescription.innerText = post.text

    cardButton.innerText = 'Abrir Post'
    cardButton.classList.add('openPost')

    
    cardButton.addEventListener('click', () => {
        createCardModal(post)
            
        })

    listPosts.appendChild(cardContainer)
    cardContainer.append(cardImg, cardNameUser, cardStack, cardTopic, cardDescription, cardButton)

    return cardContainer
}

renderSuggest(suggestUsers)
renderPosts(posts)
