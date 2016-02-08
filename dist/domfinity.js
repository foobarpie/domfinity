'use strict';

/**
 * Created by timur on 2/7/16.
 */

(function () {

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
})();
"use strict";

/**
 * Created by timur on 2/7/16.
 */
// This makes it so changing the textContent will work on ie8
if (Object.defineProperty && Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(Element.prototype, "textContent") && !Object.getOwnPropertyDescriptor(Element.prototype, "textContent").get) {
  (function () {
    var innerText = Object.getOwnPropertyDescriptor(Element.prototype, "innerText");
    Object.defineProperty(Element.prototype, "textContent", {
      get: function get() {
        return innerText.get.call(this);
      },
      set: function set(s) {
        return innerText.set.call(this, s);
      }
    });
  })();
}