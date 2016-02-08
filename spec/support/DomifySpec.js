/**
 * Created by timur on 2/7/16.
 */
describe('makeElement', function () {

  describe('contract tests', function () {

    it('should create a paragraph tag', function () {
      var paragraph = makeElement('p');
      expect(paragraph).outerHTML.toBe('<p></p>>');
    });

  });

});
