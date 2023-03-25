
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
          "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in tomorrow's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript",
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

// --------добавление-книг-на-страницу-заказа-----------------------------------------------------------------

function generateOrderedBooksNode(imageLink, title, author, price, newId){
    let bookTemplate = document.getElementById('ordered-books-template');
    let newBook = bookTemplate.cloneNode(true);

    newBook.getElementsByTagName('img')[0].src = imageLink;
    newBook.id = '';

    newBook.getElementsByClassName('title')[0].innerHTML = title;
    newBook.getElementsByClassName('author')[0].innerHTML = author;
    newBook.getElementsByClassName('price')[0].innerHTML = "$" + price;
    newBook.id = newId;

    return newBook;
}



function AddToOrderSummary () { // добавление книг на страницу заказа

    let ordered_books = document.querySelector('.ordered-books-wrapper');

    let orderedBooksId = JSON.parse(localStorage.getItem('ordered-books'));

    for (let i = 0; i < orderedBooksId.length; i ++) {

        let targetBooksObject = initBooks().find(function(currentBooks) {
            return currentBooks.newId === orderedBooksId[i];} );

        let currentBugBooksNode = generateOrderedBooksNode(targetBooksObject.imageLink, targetBooksObject.title, targetBooksObject.author, targetBooksObject.price, targetBooksObject.newId);
        ordered_books.appendChild(currentBugBooksNode);
    }
        
    let total_price = document.querySelector('.total-price').children[0];

    total_price.innerHTML = localStorage.getItem('total-price');

}

AddToOrderSummary();

// --------проверка-формы-------------------------------------------------------------------

function onlyTwoCheckBox() { // функция ограничения выбора чекбоксов

	let checkboxGroup = document.getElementsByClassName('select-gifts')[0].getElementsByTagName("input");
	let limit = 2;
    
	for (let i = 0; i < checkboxGroup.length; i++) {
	 checkboxGroup[i].onclick = function() {

			let checkedCount = 0;

				for (let i = 0; i < checkboxGroup.length; i++) {
				checkedCount +=  (checkboxGroup[i].checked) ? 1 : 0;
			}
			if (checkedCount > limit) {
				this.checked = false;
			}
		}
	}
}

onlyTwoCheckBox(); 


let today = new Date(); // ограничение даты не ранее следующего дня
let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));  

let dd = tomorrow.getDate();
let mm = tomorrow.getMonth() + 1; 
let yyyy = tomorrow.getFullYear();

if(dd < 10){
  dd='0' + dd
} 
if(mm < 10){
  mm='0' + mm
} 

tomorrow = yyyy + '-' + mm + '-' + dd;
document.getElementById("date").setAttribute("min", tomorrow);

let validation_input = document.querySelector('.inputs-wrapper').getElementsByTagName('input'); // все input

for (let i = 0; i < validation_input.length; i ++) {

    if (validation_input[i].type == 'text') {
        validation_input[i].addEventListener('blur', validationTextInputs);
    }

    if (validation_input[i].type == 'date') {
        validation_input[i].addEventListener('blur', validationDateInputs);
    }  
    
    if (validation_input[i].type == 'number') {
        validation_input[i].addEventListener('blur', validationNumberInputs);
    } 

    if (validation_input[i].name == 'Flat number') {
        validation_input[i].oninput = function(){
        validation_input[i].value = validation_input[i].value.replace(/^-|^—|[^-—\d]/, '')
      }
    }
}

function validationTextInputs() { // проверка на валидность текстовых inputs для добавления стилей

    if (this.getAttribute('data-length') > this.value.length) { 
        this.classList.remove('valid');
        this.classList.add('invalid');
        this.parentNode.getElementsByClassName('error-message')[0].style.display = 'block';
    } else {
        this.classList.remove('invalid');
        this.parentNode.getElementsByClassName('error-message')[0].style.display = 'none';
        this.classList.add('valid');
    }

    if (this.name == 'First Last name' && (this.value.includes(' ') || /\d|\W/.test(this.value))) {
        this.classList.remove('valid');
        this.classList.add('invalid');
        this.parentNode.getElementsByClassName('error-message')[0].style.display = 'block';
    }

    if (this.name == 'Street' && /[^a-zA-Z0-9-.\s]/.test(this.value)) {
        this.classList.remove('valid');
        this.classList.add('invalid');
        this.parentNode.getElementsByClassName('error-message')[0].style.display = 'block';
    }

    if (this.name == 'Flat number' && (/^-|^—|[^-—\d]/.test(this.value) || this.value == '')) {
        this.classList.remove('valid');
        this.classList.add('invalid');
        this.parentNode.getElementsByClassName('error-message')[0].style.display = 'block';
      }
      enableSubmitButton();
};

function validationDateInputs() { // проверка на валидность inputs date для добавления стилей

    if (this.value == '' || this.value < this.getAttribute('min')) { 
        this.classList.remove('valid');
        this.classList.add('invalid');
        this.parentNode.getElementsByClassName('error-message')[0].style.display = 'block';
    } else {
        this.classList.remove('invalid');
        this.classList.add('valid');
        this.parentNode.getElementsByClassName('error-message')[0].style.display = 'none';
      }
      enableSubmitButton();
}
    
function validationNumberInputs () { // проверка на валидность числовых inputs для добавления стилей

      if (this.value == '' || this.value  < this.getAttribute('min')) { 
        this.classList.remove('valid');
        this.classList.add('invalid');
        this.parentNode.getElementsByClassName('error-message')[0].style.display = 'block';
    } else {
        this.classList.remove('invalid');
        this.classList.add('valid');
        this.parentNode.getElementsByClassName('error-message')[0].style.display = 'none';
      }

      enableSubmitButton();
}

let completeButton = document.getElementById('complete-button'); 

function enableSubmitButton () { // функция активации кнопки подтверждения заказа
    let validNumber = 0;
    for (let i = 0; i < validation_input.length; i ++) {
        if (validation_input[i].classList.contains('valid')) {
            validNumber++;
        }  
    }

    if (validNumber == validation_input.length) {
        completeButton.disabled = false;
    }
}

//------summarized-information---------------------------------------------------------------
  
let summarizedInformationBg = document.querySelector('.summarized-information-bg'); // Фон попап окна
let summarizedInformation = document.querySelector('.summarized-information'); // Само окно
let openSummarizedInformationButton = document.getElementById('complete-button'); // Кнопки для показа окна
let closeSummarizedInformationButton = document.querySelector('.ok'); // Кнопка для скрытия окна

openSummarizedInformationButton.addEventListener('click', showActivePopup)

function showActivePopup(e) { // Для каждой вешаем обработчик событий на клик
    e.preventDefault();

    let firstName = validation_input[0].value;
    let lastName = validation_input[1].value;
    let street = validation_input[3].value;
    let house = validation_input[4].value;
    let flat = validation_input[5].value;
    let date = validation_input[2].value;
    let payment = selectedPaymentMethod();
    let gifts = selectedGifts();
    let orderPrice = document.querySelector('.total-price').getElementsByTagName('span')[0].textContent;
    
    document.getElementById('first').innerHTML = firstName;
    document.getElementById('last').innerHTML = lastName;
    document.getElementById('street').innerHTML = street;
    document.getElementById('house').innerHTML = house;
    document.getElementById('flat').innerHTML = flat;
    document.getElementById('delivery-date').innerHTML = date;
    document.getElementById('payment').innerHTML = payment;
    document.getElementById('gifts').innerHTML = gifts; 
    document.getElementById('order-price').innerHTML = orderPrice; 

    summarizedInformationBg.classList.add('active'); // Добавляем класс 'active' для фона
    summarizedInformation.classList.add('active'); 
    document.body.style.overflow = "hidden";
}


function selectedPaymentMethod() {
    let payment_method_radio = document.querySelector('.payment-method-wrapper').getElementsByTagName('input');
    for (input of payment_method_radio) {
        if (input.checked) {
            return input.parentNode.outerText;
        }
    }
}

function selectedGifts() {
    let gift_checkboxes = document.querySelector('.select-gifts').getElementsByTagName('input');
    let selectedGifts = [];
    for (input of gift_checkboxes) {
        if (input.checked) {
            selectedGifts.push(input.parentNode.outerText);
        }
    }

    if (selectedGifts.length > 0) {
        return selectedGifts.join(', ');
    } else {
        return 'not selected';
    }
}

closeSummarizedInformationButton.addEventListener('click',() => { // Вешаем обработчик на крестик
  summarizedInformationBg.classList.remove('active'); // Убираем активный класс с фона
  summarizedInformation.classList.remove('active'); // И с окна
  document.body.style.overflow = ""; 
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === summarizedInformationBg) { // Если цель клика - фот, то:
      summarizedInformationBg.classList.remove('active'); // Убираем активный класс с фона
      summarizedInformation.classList.remove('active'); // И с окна
      document.body.style.overflow = ""; 
    }
});
