##Replace HTML with JavaScript!##
#Usage#
```
// index.js
var dom = require('domfinity');

var paragraph = dom.makeElement('p');
paragraph.textContent = 'This is a paragraph';
```
In any web browser
(pic showing the paragraph goes here)
#Install#
```
npm install domfinity
```




#Contribute#

```
npm install --save-dev // Do not include the node_modules folder in any commits!
jspm install // Do not include the jspm_packages folder in any commits!
```

Make your improvements then

```
gulp build
```
Make sure it works! To run tests
```
jasmine
```
