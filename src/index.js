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

})();
