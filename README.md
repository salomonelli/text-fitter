<p align="center">
  <img src="docs/logo-readme.png" />
</p>


# text-fitter

[![npm version](https://badge.fury.io/js/text-fitter.svg)](https://badge.fury.io/js/text-fitter) [![Build Status](https://travis-ci.org/salomonelli/text-fitter.svg?branch=master)](https://travis-ci.org/salomonelli/text-fitter)

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
      <td><img src="docs/shrink_before.png" /></td>
      <td><img src="docs/shrink_after.png" /></td>
    </tr>
  </tbody>
</table>



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
      <td><img src="docs/enlarge_before.png" /></td>
      <td><img src="docs/enlarge_after.png" /></td>
    </tr>
  </tbody>
</table>



To disable set second parameter to false:
```javascript
fix(elements, false); // elements can be an array or html list
```

The second parameter is optional and is set by default to false.
