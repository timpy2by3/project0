const class_names = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list_elements = document.getElementById('todo-list')
const item_count_element = document.getElementById('item-count')
const unchecked_count_element = document.getElementById('unchecked-count')

let item_count = 0
let unchecked_count = 0

function new_todo() {
  create_new_todo()
}

function create_new_todo () {
  //gets user input
  let user_input = document.getElementById(class_names.TODO_TEXT).value;

  //checks to see if input is valid
  if (!user_input) {
    alert('please input a value')
    return ''
  }
  // makes a list object and puts the user input in it
  let new_list_element = document.createElement("todo-container")
  let b = document.createElement('br')

  // clears input box
  document.getElementById(class_names.TODO_TEXT).value = ''

  // changes the counts in the top span
  item_count++
  unchecked_count++

  // adds a check box to the list item
  let checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.class = class_names.TODO_CHECKBOX
  checkbox.name = 'checkbox'
  checkbox.id = 'checkboxID'
  checkbox.onclick = (event) => {this.complete_todo(event)}

  // adds a delete button to the list item
  let deleter = document.createElement('input')
  deleter.type = 'button'
  deleter.style.float = 'right'
  deleter.value = 'remove this item'
  deleter.onclick = (event) => {this.delete_todo(event)}

  // adds text and checkbox to the list elements
  new_list_element.appendChild(checkbox)
  new_list_element.appendChild(document.createTextNode(user_input))
  new_list_element.appendChild(deleter)

  list_elements.appendChild(new_list_element)

  // sets top span values
  item_count_element.innerHTML = item_count
  unchecked_count_element.innerHTML = unchecked_count
}

function complete_todo (event) {
  let eChecked = event.target
  if (eChecked.checked) {
    unchecked_count--
  } else {
    unchecked_count++
  }

  unchecked_count_element.innerHTML = unchecked_count
}

function delete_todo (event) {
  let eClicked = event.target
  let parent_node = eClicked.parentNode

  list_elements.removeChild(parent_node)

  item_count--
  if (unchecked_count > 0){
    unchecked_count--
  }
  unchecked_count_element.innerHTML = unchecked_count
  item_count_element.innerHTML = item_count
}
