const unorderList = document.querySelector('ul'); //Create three variables that hold references to the following elements &lt;ul&gt; &lt;input&gt; &lt;button&gt; elements.
const txtBox = document.querySelector('input');
const addItem = document.querySelector('button');

addItem.onclick = function() { //Create a function that will run in response to the button being clicked.
    let txtItem = txtBox.value; //Inside the function body, start off by storing the current value of the input element in a variable.
    txtBox.value = ''; //Next, empty the input element by setting its value to an empty string — ''.

    const ulItem = document.createElement('li'); //Create three new elements — a list item (&lt;li&gt;), &lt;span&gt;, and &lt;button&gt;, and store them in variables.
    const listText = document.createElement('span');
    const delBtn = document.createElement('button');

    ulItem.appendChild(listText); //Append the span and the button as children of the list item.
    listText.textContent = txtItem; // Set the text content of the span to the input element value you saved earlier
    ulItem.appendChild(delBtn);
    delBtn.textContent = 'Delete'; // and the text content of the button to 'Delete'.
    unorderList.appendChild(ulItem); //Append the list item as a child of the list.

    delBtn.onclick = function(e) { // Attach an event handler to the delete button, so that when clicked it will delete the entire list item it is inside.
        unorderList.removeChild(ulItem); //
    }

    txtBox.focus(); // Finally, use the focus() method to focus the input element ready for entering the next shopping list item.
}