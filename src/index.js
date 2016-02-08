/**
 * Created by timur on 2/7/16.
 */

export default class domfinity {

  /**
   * Creates an html element and appends it to the body.
   * @param tag string name of any html tag
   * @returns {*} the created html element
   */
  makeElement(tag) {
    function createAndAppend() {
      var element = document.createElement(tag);
      document.body.appendChild(element);
      return element;
    }

    return createAndAppend();
  }

}
