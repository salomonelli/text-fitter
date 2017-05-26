const getChildren = element => {
  return element.querySelectorAll('*');
};

const isOverflown = element => {
    // element.scrollHeight
    // element.clientHeight
    console.dir(element.scrollHeight);
    return  element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
};

const getFontSizeOfElement = element => {
  const style = window.getComputedStyle(element, null).getPropertyValue('font-size');
  return parseFloat(style);
};

const calcNewFontSizes = (elements, multiplier) => {
  const ret = [];
  elements.forEach(el => ret.push(getFontSizeOfElement(el) * multiplier));
  return ret;
};

const getContainerSize = container => {
    let message = 'The width of the contents with padding: ' + container.scrollWidth + 'px.\n';
    message += 'The height of the contents with padding: ' + container.scrollHeight + 'px.\n';
    alert (message);
};

const getHeightOfElement = element => {
  return parseFloat(window.getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
};

const shrinkText = element => {
  while(isOverflown(element)) {
    const children = getChildren(element);
    const newFontSizes = calcNewFontSizes(children, 0.99);
    children.forEach((el, i) => (el.style.fontSize = newFontSizes[i] + 'px'));
  }
};

const enlargeText = element => {
  do {
    const children = getChildren(element);
    const newFontSizes = calcNewFontSizes(children, 1.01);
    children.forEach((el, i) => (el.style.fontSize = newFontSizes[i] + 'px'));
  } while(!isOverflown(element));
};

export const fix = opts => {
  if (!opts.element) throw new Error('TextFitter: Element to adjust font sizes is not defined.');
  if (!opts.enlarge && !isOverflown(opts.element)) return;
  if (!isOverflown(opts.element)) enlargeText(opts.element);
  shrinkText(opts.element);
};
