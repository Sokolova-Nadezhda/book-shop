
function generateBooksNode(imageLink, author, title, price, newId){
    let bookTemplate = document.getElementById('book-template');
    let newBook = bookTemplate.cloneNode(true);

    newBook.getElementsByTagName('img')[0].src = imageLink;
    newBook.id = '';
    newBook.getElementsByClassName('button-description')[0].id = '';
    newBook.getElementsByClassName('button-add-to-bug')[0].id = '';

    newBook.getElementsByClassName('author')[0].innerHTML = author;
    newBook.getElementsByClassName('title')[0].innerHTML = title;
    newBook.getElementsByClassName('price')[0].innerHTML = "$" + price;
    newBook.id = newId;
    newBook.getElementsByClassName('button-description')[0].id = newId;
    newBook.getElementsByClassName('button-add-to-bug')[0].id = newId;

    return newBook;
}

function generatePopupBooksNode(title, description, newId){
    let bookTemplate = document.getElementById('popup-books-template');
    let newBook = bookTemplate.cloneNode(true);

    newBook.id = '';

    newBook.getElementsByClassName('title')[0].innerHTML = title;
    newBook.getElementsByClassName('description')[0].innerHTML = description;
    newBook.id = newId;

    return newBook;
}

function initBooks() {
    return [
        {
          "author": "Douglas Crockford",
          "imageLink": "images/book1.jpg",
          "title": "JavaScript: The Good Parts",
          "price": 30,
          "description": "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must",
          "newId": "book1",
        },
        {
          "author": "David Herman",
          "imageLink": "images/book2.jpg",
          "title": "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
          "price": 22,
          "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency",
          "newId": "book2",
        },
        {
          "author": "David Flanagan",
          "imageLink": "images/book3.jpg",
          "title": "JavaScript: The Definitive Guide",
          "price": 40,
          "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript",
          "newId": "book3",
        },
        {
          "author": " Eric Elliott",
          "imageLink": "images/book4.jpg",
          "title": "Programming JavaScript Applications",
          "price": 19,
          "description": "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows.",
          "newId": "book4",
        },
        {
          "author": "Addy Osmani",
          "imageLink": "images/book5.jpg",
          "title": "Learning JavaScript Design Patterns",
          "price": 32,
          "description": "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
          "newId": "book5",
        },
        {
          "author": "Boris Cherny",
          "imageLink": "images/book6.jpg",
          "title": "Programming TypeScript",
          "price": 28,
          "description": "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system.",
          "newId": "book6",
        },
        {
          "author": "Alex Banks, Eve Porcello",
          "imageLink": "images/book7.jpg",
          "title": "Learning React, 2nd Edition",
          "price": 25,
          "description": "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary.",
          "newId": "book7",
        },
        {
          "author": "Bradley Meck Alex Young and Mike Cantelon",
          "imageLink": "images/book8.jpg",
          "title": "Node.js in Action",
          "price": 38,
          "description": "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications.",
          "newId": "book8",
        },
        {
          "author": "Kyle Simpson",
          "imageLink": "images/book9.jpg",
          "title": "You Don't Know JS Yet: Get Started",
          "price": 26,
          "description": "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!",
          "newId": "book9",
        },
        {
          "author": "John Resig and Bear Bibeault",
          "imageLink": "images/book10.jpg",
          "title": "Secrets of the JavaScript Ninja",
          "price": 33,
          "description": "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up.",
          "newId": "book10",
        }
      ]
}

let books = initBooks();
let booksWrapper = document.getElementsByClassName('books-wrapper')[0];

for (let i = 0; i < books.length; i ++) {
    let currentBooks = books[i];
    let currentBooksNode = generateBooksNode(currentBooks.imageLink, currentBooks.author, currentBooks.title, currentBooks.price, currentBooks.newId);
    booksWrapper.appendChild(currentBooksNode);
}

let popupBooksBg = document.querySelector('.popup-books-bg'); // Фон попап окна
let popupBooks = document.querySelector('.popup-books-wrapper'); // Само окно
let openPopupBooksButtons = document.querySelectorAll('.button-description'); // Кнопки для показа окна
let closePopupBooksButtons = document.querySelector('.esc-popup-button'); // Кнопка для скрытия окна

openPopupBooksButtons.forEach((button) => {
    button.addEventListener('click', showActivePopup)
});

function showActivePopup(e) { // Для каждой вешаем обработчик событий на клик
    e.preventDefault();

    let targetBooks = e.currentTarget;

      let popup_books = document.querySelector('.popup-content');
      popup_books.innerHTML = '';
    
      if (targetBooks.classList.value === 'button-description') {
        let targetBooksObject = initBooks().find(function(currentBooks) {
            return currentBooks.newId === targetBooks.id;} );

        let currentPopupBooksNode = generatePopupBooksNode(targetBooksObject.title, targetBooksObject.description);
        popup_books.appendChild(currentPopupBooksNode);

        popupBooksBg.classList.add('active'); // Добавляем класс 'active' для фона
        popupBooks.classList.add('active'); 
        document.body.style.overflow = "hidden";
      }  
}

closePopupBooksButtons.addEventListener('click',() => { // Вешаем обработчик на крестик
  popupBooksBg.classList.remove('active'); // Убираем активный класс с фона
  popupBooks.classList.remove('active'); // И с окна
  document.body.style.overflow = ""; 
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBooksBg) { // Если цель клика - фот, то:
      popupBooksBg.classList.remove('active'); // Убираем активный класс с фона
      popupBooks.classList.remove('active'); // И с окна
      document.body.style.overflow = ""; 
    }
});


let bugBg = document.querySelector('.bug-wrapper-bg'); // Фон попап окна
let Bug = document.querySelector('.bug-wrapper'); // Само окно
let bugButton = document.querySelector('.bug-icon-wrapper'); // Кнопка для открытия и скрытия окна
let addToBugButtons = document.querySelectorAll('.button-add-to-bug'); // кнопки добавления в корзину


bugButton.addEventListener('click', OpenClose); // открытие и закрытие корзины

function OpenClose(e) { 
    e.preventDefault();

      bugButton.classList.toggle('active')

      if (bugButton.classList.value === 'bug-icon-wrapper droppable active') {
        bugBg.classList.add('active'); 
        Bug.classList.add('active'); 
        document.body.style.overflow = "hidden";
      } else {
        bugBg.classList.remove('active'); 
        Bug.classList.remove('active');
        document.body.style.overflow = ""; 
      }

      
}

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === bugBg) { 
        bugBg.classList.remove('active'); 
        Bug.classList.remove('active'); 
        bugButton.classList.remove('active');
        document.body.style.overflow = "";
    }
});

addToBugButtons.forEach((button) => {
    button.addEventListener('click', AddToBug) // добавить в корзину
});

function AddToBug (e) { 

    e.preventDefault();

    let bug_books = document.querySelector('.order-books');

    if (e.currentTarget.classList.value === 'button-add-to-bug') {

        let targetBooksObject = initBooks().find(function(currentBooks) {
            return currentBooks.newId === e.currentTarget.id;} );

        let currentBugBooksNode = generateBugBooksNode(targetBooksObject.imageLink, targetBooksObject.author, targetBooksObject.title, targetBooksObject.price, targetBooksObject.newId);
        bug_books.appendChild(currentBugBooksNode);
    }

    let deleteButtons = document.querySelectorAll('.delete-bug'); // кнопки удаляения книг из корзины

    deleteButtons.forEach((button) => {
        button.addEventListener('click', deleteBooks) // удалить из корзины
    });

    let totalPrice = document.getElementsByClassName('total')[0].children[0]; // итоговая сумма
    let bookPrice = bug_books.getElementsByClassName('price');
    let sum = 0;

    for (let i = 0; i < bookPrice.length; i ++) {
        sum = sum + Number(bookPrice[i].textContent.split('$').join(''));
    }

    totalPrice.innerHTML = "$" + sum; 

    let count_order_books = bug_books.childElementCount; // количество позиций в корзине
    let count_wrapper = document.querySelector('.books-counter'); 

    count_wrapper.innerHTML = count_order_books;

}

function generateBugBooksNode(imageLink, author, title, price, newId){
    let bookTemplate = document.getElementById('bug-books-template');
    let newBook = bookTemplate.cloneNode(true);

    newBook.getElementsByTagName('img')[0].src = imageLink;
    newBook.id = '';

    newBook.getElementsByClassName('author')[0].innerHTML = author;
    newBook.getElementsByClassName('title')[0].innerHTML = title;
    newBook.getElementsByClassName('price')[0].innerHTML = "$" + price;
    newBook.id = newId;

    return newBook;
}


function deleteBooks (e) { // удалить из козины

    e.preventDefault();

    let delete_button = e.currentTarget;

    if (delete_button.classList.value === 'delete-bug') {
        delete_button.parentElement.parentElement.remove();
    }

    let totalPrice = document.getElementsByClassName('total')[0].children[0]; 
    let deletePrice = delete_button.previousElementSibling.getElementsByClassName('price')[0].textContent;

    let newPrice = Number(totalPrice.textContent.split('$').join('')) - Number(deletePrice.split('$').join(''));

    totalPrice.innerHTML = '$' + newPrice;

    let bug_books = document.querySelector('.order-books');
    let count_order_books = bug_books.childElementCount; // количество позиций в корзине
    let count_wrapper = document.querySelector('.books-counter'); 

    count_wrapper.innerHTML = count_order_books;
}

// ------DRAG'N-DROP--------------------------------------------------------------------

let book = document.querySelector('.books-wrapper').querySelectorAll('.img-book'); // все книги

let currentDroppable = null;

book.forEach((book) => {
    book.addEventListener('mousedown', DragNDrop) 
});


function DragNDrop (event) {

    event.preventDefault();

    if (event.which != 1) { // не срабатывает при нажатии ПКМ
        return; 
    }

    let drag_n_drop_book = event.currentTarget; // книга, которую нужно переместить
    let avatar = drag_n_drop_book.cloneNode(true); // создание аватара книги

    avatar.style.width = 76 + 'px';
    avatar.style.height = 106 + 'px';
    avatar.style.cursor = "pointer";
    avatar.style.transform = 'scale(1)';
    avatar.style.transition = 'transform 2s';
    
    avatar.style.position = 'absolute';
    avatar.style.zIndex = 1000;
    document.body.append(avatar);
  
    moveAt(event.pageX, event.pageY);
  
    function moveAt(pageX, pageY) {
        avatar.style.left = pageX -  avatar.offsetWidth / 2 + 'px';
        avatar.style.top = pageY - avatar.offsetWidth / 2 + 'px'; + 'px';
    }
  
    function onMouseMove(event) {

        moveAt(event.pageX, event.pageY);

        avatar.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        avatar.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');

        

        if (currentDroppable != droppableBelow) {
            if (currentDroppable) {
                avatar.style.transform = 'scale(1)';     
            }

            currentDroppable = droppableBelow;
            
            if (currentDroppable) {
                avatar.style.transform = 'scale(0.6)';
            }
        }
      }

    document.addEventListener('mousemove', onMouseMove);

    avatar.onmouseup = function(event) { // на отжатие мышки

        document.removeEventListener('mousemove', onMouseMove);
        avatar.onmouseup = null;
        document.body.removeChild(avatar);

        avatar.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        avatar.hidden = false;

        if (currentDroppable == elemBelow.closest('.droppable')) {

            if (currentDroppable) { 

                let targetBooksObject = initBooks().find(function(currentBooks) {
                    return currentBooks.newId === drag_n_drop_book.parentElement.id;} );
        
                let currentBugBooksNode = generateBugBooksNode(targetBooksObject.imageLink, targetBooksObject.author, targetBooksObject.title, targetBooksObject.price, targetBooksObject.newId);
                document.querySelector('.order-books').appendChild(currentBugBooksNode);

                let deleteButtons = document.querySelectorAll('.delete-bug'); // кнопки удаляения книг из корзины

                deleteButtons.forEach((button) => {
                    button.addEventListener('click', deleteBooks) // удалить из корзины
                });
            
                let totalPrice = document.getElementsByClassName('total')[0].children[0]; // итоговая сумма
                let bookPrice = document.querySelector('.order-books').getElementsByClassName('price');
                let sum = 0;
            
                for (let i = 0; i < bookPrice.length; i ++) {
                    sum = sum + Number(bookPrice[i].textContent.split('$').join(''));
                }
            
                totalPrice.innerHTML = "$" + sum; 
            
                let count_order_books = document.querySelector('.order-books').childElementCount; // количество позиций в корзине
                let count_wrapper = document.querySelector('.books-counter'); 
            
                count_wrapper.innerHTML = count_order_books;
            }
        }

    };
  
  };
 
  
  book.forEach((book) => {
    book.addEventListener('dragstart', function() {
        return false;
      }) 
});

// --------CONFIRM-ORDER---------------------------------------------------------

let buttonConfirm = document.querySelector('.confirm-order');

buttonConfirm.addEventListener('click', sendingToOrderPage);




function sendingToOrderPage() {

    let sendingBooks = document.querySelector('.order-books').children; 

    let sendingBooksId = [];
    
    for (let i = 0; i < sendingBooks.length; i ++) {
        sendingBooksId.push(sendingBooks[i].id);
    }
    
    localStorage.setItem('ordered-books', JSON.stringify(sendingBooksId));
    localStorage.setItem('total-price', document.getElementsByClassName('total')[0].children[0].textContent)
}
