"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by timur on 2/7/16.
 */

var domfinity = function () {
  function domfinity() {
    _classCallCheck(this, domfinity);
  }

  _createClass(domfinity, [{
    key: "makeElement",


    /**
     * Creates an html element and appends it to the body.
     * @param tag string name of any html tag
     * @returns {*} the created html element
     */
    value: function makeElement(tag) {
      function createAndAppend() {
        var element = document.createElement(tag);
        document.body.appendChild(element);
        return element;
      }

      return createAndAppend();
    }
  }]);

  return domfinity;
}();

exports.default = domfinity;