/**
 * Created by timur on 2/7/16.
 */

/**
 * Creates an html element and appends it to the body.
 * @param tag string name of any html tag
 * @returns {*} the created html element
 */
function makeElement(tag) {
  function createAndAppend() {
    var element = document.createElement(tag);
    document.body.appendChild(element);
    return element;
  }

  return createAndAppend();
}


var h1 = makeElement('h1');
var h2 = makeElement('h2');

var tag = makeElement('input');
tag.type = 'text';
tag.placeholder = 'tag';

var text = makeElement('input');
text.type = 'text';
text.placeholder = 'text';

var adder = makeElement('button');
adder.textContent = 'add element';

adder.onclick = function () {
  var addition = makeElement(tag.value);
  addition.textContent = text.value;
};

h1.textContent = 'jiminy cricket';
h2.textContent = 'donald duck';
