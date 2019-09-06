// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.

// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// axios
//     .get('https://lambda-times-backend.herokuapp.com/articles')
//     .then(response => {
//         // console.log(response.data.articles);
//         const articles = response.data.articles;
//         console.log(articles);
//         Array.prototype.forEach.call(articles, article => {
//             cardsContainer.appendChild(createCards(article));
//         })
//     })
//     .catch(err => {
//         console.log('ERROR', err);
//     })

function articleComponent() {
    return axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        // console.log(response.data.articles);
        const articles = response.data.articles;
        console.log(articles);
        // Array.prototype.forEach.call(articles, article => {
        //     cardsContainer.appendChild(createCards(article));
        // })
        //for (VARIABLE in OBJECT) to iterate over properties of an object
        for (article in articles) {
            let articleArray = articles[article]
            articleArray.forEach(article => {
                createCards(article)
            })
        }
    })
    .catch(err => {
        console.log('ERROR', err);
    })
}

articleComponent();


const cardsContainer = document.querySelector('.cards-container');

function createCards (object) {
    const 
        card = document.createElement('div'),
        headline = document.createElement('div'),
        author = document.createElement('div');
        imgContainer = document.createElement('div'),
        img = document.createElement('img'),
        authorName = document.createElement('span');
    
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    img.src = object.authorPhoto;

    headline.textContent =object.headline;
    authorName.textContent = `Written by ${object.authorName}`;

    cardsContainer.appendChild(card);
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(authorName);
    
    return card;
};

