

var header = document.createElement('HEADER');

var header_wrapper = document.createElement('DIV');
header_wrapper.setAttribute('class', 'header-wrapper');
header.appendChild(header_wrapper);

var book_shop_link = document.createElement('A');
book_shop_link.setAttribute('href', 'book_shop.html');
header_wrapper.appendChild(book_shop_link);

var book_shop_h1 = document.createElement('H1');
book_shop_link.appendChild(book_shop_h1);

var book_shop_h1_text = document.createTextNode((new String("Bookshop")));
book_shop_h1.appendChild(book_shop_h1_text);

var bug_icon_wrapper = document.createElement('DIV');
bug_icon_wrapper.setAttribute('class', 'bug-icon-wrapper droppable');
header_wrapper.appendChild(bug_icon_wrapper);

var bug_icon = document.createElement('IMG');
bug_icon.setAttribute('class', 'bug-icon');
bug_icon.setAttribute('src', 'images/shop_bug_icon.png');
bug_icon_wrapper.appendChild(bug_icon);

var books_counter = document.createElement('DIV');
books_counter.setAttribute('class', 'books-counter');
bug_icon_wrapper.appendChild(books_counter);

var books_counter_value = document.createTextNode((new String("0")));
books_counter.appendChild(books_counter_value);

var main = document.createElement('MAIN');

var books_wrapper = document.createElement('DIV');
books_wrapper.setAttribute('class', 'books-wrapper');
main.appendChild(books_wrapper);

var book_js = document.createElement('DIV');
book_js.setAttribute('class', 'book');
book_js.setAttribute('id', 'book-template');
main.appendChild(book_js);

var img_book = document.createElement('IMG');
img_book.setAttribute('class', 'img-book');
img_book.setAttribute('src', '');
book_js.appendChild(img_book);

var text_section = document.createElement('DIV');
text_section.setAttribute('class', 'text-section');
book_js.appendChild(text_section);

var author_title_price = document.createElement('DIV');
author_title_price.setAttribute('class', 'author-title-price');
text_section.appendChild(author_title_price);

var author = document.createElement('P');
author.setAttribute('class', 'author');
author_title_price.appendChild(author);

var title = document.createElement('P');
title.setAttribute('class', 'title');
author_title_price.appendChild(title);

var price = document.createElement('P');
price.setAttribute('class', 'price');
author_title_price.appendChild(price);

var buttons = document.createElement('DIV');
buttons.setAttribute('class', 'buttons');
text_section.appendChild(buttons);

var button_description = document.createElement('BUTTON');
button_description.setAttribute('class', 'button-description');
buttons.appendChild(button_description);

var button_description_text = document.createTextNode((new String("View more")));
button_description.appendChild(button_description_text);

var button_add_to_bug = document.createElement('BUTTON');
button_add_to_bug.setAttribute('class', 'button-add-to-bug');
buttons.appendChild(button_add_to_bug);

var button_add_to_bug_text = document.createTextNode((new String("Add to bug")));
button_add_to_bug.appendChild(button_add_to_bug_text);

var popup_books_bg = document.createElement('DIV');
popup_books_bg.setAttribute('class', 'popup-books-bg');
main.appendChild(popup_books_bg);

var popup_books_wrapper = document.createElement('DIV');
popup_books_wrapper.setAttribute('class', 'popup-books-wrapper');
popup_books_bg.appendChild(popup_books_wrapper);

var esc_popup_button = document.createElement('IMG');
esc_popup_button.setAttribute('class', 'esc-popup-button');
esc_popup_button.setAttribute('src', 'images/esc-button.png');
popup_books_wrapper.appendChild(esc_popup_button);

var popup_content = document.createElement('DIV');
popup_content.setAttribute('class', 'popup-content');
popup_books_wrapper.appendChild(popup_content);

var popup_books_template = document.createElement('DIV');
popup_books_template.setAttribute('id', 'popup-books-template');
main.appendChild(popup_books_template);

var popup_books_template_title = document.createElement('P');
popup_books_template_title.setAttribute('class', 'title');
popup_books_template.appendChild(popup_books_template_title);

var popup_books_template_description = document.createElement('P');
popup_books_template_description.setAttribute('class', 'description');
popup_books_template.appendChild(popup_books_template_description);

var bug_books_template = document.createElement('DIV');
bug_books_template.setAttribute('class', 'book');
bug_books_template.setAttribute('id', 'bug-books-template');
main.appendChild(bug_books_template);

var bug_books_template_img = document.createElement('IMG');
bug_books_template_img.setAttribute('src', '');
bug_books_template_img.setAttribute('class', 'draggable');
bug_books_template.appendChild(bug_books_template_img);

var bug_books_template_text_section = document.createElement('DIV');
bug_books_template_text_section.setAttribute('class', 'text-section');
bug_books_template.appendChild(bug_books_template_text_section);

var bug_books_template_author_title_price = document.createElement('DIV');
bug_books_template_author_title_price.setAttribute('class', 'author-title-price');
bug_books_template_text_section.appendChild(bug_books_template_author_title_price);

var bug_books_template_author = document.createElement('P');
bug_books_template_author.setAttribute('class', 'author');
bug_books_template_author_title_price.appendChild(bug_books_template_author);

var bug_books_template_title = document.createElement('P');
bug_books_template_title.setAttribute('class', 'title');
bug_books_template_author_title_price.appendChild(bug_books_template_title);

var bug_books_template_price = document.createElement('P');
bug_books_template_price.setAttribute('class', 'price');
bug_books_template_author_title_price.appendChild(bug_books_template_price);

var delete_bug = document.createElement('BUTTON');
delete_bug.setAttribute('class', 'delete-bug');
bug_books_template_text_section.appendChild(delete_bug);

var delete_bug_text = document.createTextNode((new String("Delete")));
delete_bug.appendChild(delete_bug_text);

var bug_wrapper_bg = document.createElement('DIV');
bug_wrapper_bg.setAttribute('class', 'bug-wrapper-bg');
main.appendChild(bug_wrapper_bg);

var bug_wrapper = document.createElement('DIV');
bug_wrapper.setAttribute('class', 'bug-wrapper');
bug_wrapper_bg.appendChild(bug_wrapper);

var order_books_js = document.createElement('DIV');
order_books_js.setAttribute('class', 'order-books');
bug_wrapper.appendChild(order_books_js);

var total_confirm = document.createElement('DIV');
total_confirm.setAttribute('class', 'total-confirm');
bug_wrapper.appendChild(total_confirm);

var total_confirm_total = document.createElement('DIV');
total_confirm_total.setAttribute('class', 'total');
total_confirm.appendChild(total_confirm_total);

var total_confirm_span = document.createElement('SPAN');
total_confirm_total.appendChild(total_confirm_span);

var total_confirm_span_text = document.createTextNode((new String("$0")));
total_confirm_span.appendChild(total_confirm_span_text);

var total_confirm_link = document.createElement('A');
total_confirm_link.setAttribute('href', 'order_page.html');
total_confirm.appendChild(total_confirm_link);

var button_confirm_order = document.createElement('BUTTON');
button_confirm_order.setAttribute('class', 'confirm-order');
total_confirm_link.appendChild(button_confirm_order);

var button_confirm_order_text = document.createTextNode((new String("Confirm order")));
button_confirm_order.appendChild(button_confirm_order_text);

var script_book_shop = document.createElement('SCRIPT');
script_book_shop.setAttribute('src', 'book_shop.js');
script_book_shop.setAttribute('defer', '');


const meta1 = document.createElement('meta');
meta1.setAttribute('charset', 'UTF-8');

const meta2 = document.createElement('meta');
meta2.setAttribute('http-equiv', 'X-UA-Compatible');
meta2.setAttribute('content', 'IE=edge');

const meta3 = document.createElement('meta');
meta3.setAttribute('name', 'viewport');
meta3.setAttribute('content', 'width=device-width, initial-scale=1.0');

const meta4 = document.createElement('meta');
meta4.setAttribute('name', 'viewport');
meta4.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');

const title_head = document.createElement('title');
title_head.textContent = 'Book-Shop';

const link1 = document.createElement('link');
link1.setAttribute('rel', 'stylesheet');
link1.setAttribute('type', 'text/css');
link1.setAttribute('href', 'general.css');

const link2 = document.createElement('link');
link2.setAttribute('rel', 'stylesheet');
link2.setAttribute('type', 'text/css');
link2.setAttribute('href', 'header.css');

const link3 = document.createElement('link');
link3.setAttribute('rel', 'stylesheet');
link3.setAttribute('type', 'text/css');
link3.setAttribute('href', 'books.css');

const link4 = document.createElement('link');
link4.setAttribute('rel', 'stylesheet');
link4.setAttribute('type', 'text/css');
link4.setAttribute('href', 'bug.css');

const link5 = document.createElement('link');
link5.setAttribute('rel', 'icon');
link5.setAttribute('type', 'image/x-icon');
link5.setAttribute('href', 'images/favicon.ico');

document.getElementById('doc').appendChild(header);
document.getElementById('doc').appendChild(main);
document.getElementById('doc').appendChild(script_book_shop);


//--------------DOCUMENT-FRAGMENT---------------------------

var body = document.body;
var head = document.head;

var fragment = document.createDocumentFragment(); // создание фрагмента документа

fragment.appendChild(meta1);
fragment.appendChild(meta2);
fragment.appendChild(meta3);
fragment.appendChild(meta4);
fragment.appendChild(title_head);
fragment.appendChild(link1);
fragment.appendChild(link2);
fragment.appendChild(link3);
fragment.appendChild(link4);
fragment.appendChild(link5);
head.appendChild(fragment);

fragment.appendChild(document.getElementById('doc'));
body.appendChild(fragment);







