/**
 * Created by timur on 2/7/16.
 */
import dom from 'domfinity';

const h1 = dom.makeElement('h1');
const h2 = dom.makeElement('h2');

const tag = dom.makeElement('input');
tag.type = 'text';
tag.placeholder = 'tag';

const text = dom.makeElement('input');
text.type = 'text';
text.placeholder = 'text';

const adder = dom.makeElement('button');
adder.textContent = 'add element';

adder.onclick = () => {
  const addition = dom.makeElement(tag.value);
  addition.textContent = text.value;
};

h1.textContent = 'jiminy cricket';
h2.textContent = 'donald duck';