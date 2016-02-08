/**
 * Created by timur on 2/7/16.
 */

/**
 * This describes the makeElement and make(SpecificElement) functions.
 */
var dom = require('domfinity');

describe('makeElement', () => {
  describe('collaborator tests,', () => {
    it('shows how to do the thing', () => {
      dom.makeElement('p');
      expect(true).toBe(true);
    })
  });
});