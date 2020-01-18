
document.addEventListener('DOMContentLoaded', function(){
//delete books
const list = document.querySelector('#book-list ul');
list.addEventListener('click', function(e){
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    list.removeChild(li);
  }

});


//addBooks. //Forms with button create a submit event
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const value = addForm.querySelector('input[type = "text"]').value;

  //create Elements
  const li = document.createElement('li');
  const span_book_name = document.createElement('span');
  const span_delete = document.createElement('span');

  //add text content
  span_book_name.textContent = value;
  span_delete.textContent = 'delete'

  //add classes
  span_book_name.classList.add('name');
  span_delete.classList.add('delete');
  //append to document
  li.appendChild(span_book_name);
  li.appendChild(span_delete);
  list.appendChild(li);
});

//hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', (e)=>{
  if(hideBox.checked){
    list.style.display = "none";
  }
  else{
    list.style.display = "initial";
  }
});

//search box
const search = document.forms['search-books'].querySelector("input");
search.addEventListener('keyup', (e)=>{
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName("LI");
  Array.from(books).forEach(book =>{
    const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term) == -1){
      book.style.display = "none";
    }
    else{
      book.style.display = "block"
    }
  })
});

//tabbed
const tabs = document.querySelector('.tabs');
const panes = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e) =>{
  if(e.target.tagName == "LI"){
    const targetPanel = document.querySelector(e.target.dataset.target);
    panes.forEach(item =>{
      if(item == targetPanel)
      item.classList.add('active');
      else
      item.classList.remove('active');
    })
  }
});
})