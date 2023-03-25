
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

