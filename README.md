<p align="center">
  <img src="https://raw.githubusercontent.com/salomonelli/text-fitter/master/docs/logo-readme.png" />
</p>


# text-fitter

[![npm version](https://badge.fury.io/js/text-fitter.svg)](https://badge.fury.io/js/text-fitter)


Pure javascript implementation that fixes any content to fit the element. <a href="https://salomonelli.github.io/text-fitter/">View demo.</a>

<table border="0">
  <tbody>
    <tr>
      <td>Before</td>
      <td>After</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td><img src="https://raw.githubusercontent.com/salomonelli/text-fitter/master/docs/shrink1.png" /></td>
      <td><img src="https://raw.githubusercontent.com/salomonelli/text-fitter/master/docs/shrink2.png" /></td>
    </tr>
  </tbody>
</table>

## You should use this project if ...

Any kind of layouting should be done (if possible) in CSS. If the performance of your site is important, use this project only to a limited extend. Try to use relative fonts wherever possible. This project might be interesting for you if you are trying to layout unknown content or for small effects.


## Quickstart

Install the package with

```
npm install text-fitter --save
```

ES7
```javascript
import {fix} from 'text-fitter';
const elements = document.querySelectorAll('.any-class');
fix(elements); // elements can be an array or html list
```

VanillaJS
```html
<script type="text/javascript" src="dist/javascript.js"></script>
<script>
window.onload = function() {
  var elements = document.getElementById('any-id');
  TextFitter.fix(elements); // elements can be an array or html list
};
</script>
```


### Disable font enlargement

If the content is too small to fill the entire element, content is enlarged. This is set by default.

<table border="0">
  <tbody>
    <tr>
      <td>Before</td>
      <td>After</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td><img src="https://raw.githubusercontent.com/salomonelli/text-fitter/master/docs/enlarge1.png" /></td>
      <td><img src="https://raw.githubusercontent.com/salomonelli/text-fitter/master/docs/enlarge2.png" /></td>
    </tr>
  </tbody>
</table>



To disable set second parameter to false:
```javascript
fix(elements, false); // elements can be an array or html list
```

The second parameter is optional and is set by default to false.
