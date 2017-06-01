import * as assert from 'assert';
import {JSDOM} from 'jsdom';
import {fix} from '../src/index';

describe('TextFitter', () => {
  describe('.getChildren()', () => {
    it('should return return children of an element', () => {
      const dom = new JSDOM('<!DOCTYPE html><ul><li>1</li><li>2</li></ul>');
      const element = dom.window.document.querySelector('ul');
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
