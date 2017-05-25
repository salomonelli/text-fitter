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

const calcNewFontSizes = elements => {
  const ret = [];
  elements.forEach(el => ret.push(getFontSizeOfElement(el) * 0.90));
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

export const fix = element => {
  if (!element) throw new Error('TextFitter: Element to adjust font sizes is not defined.');
  if (!isOverflown(element)) return;
  while(isOverflown(element)) {
    const children = getChildren(element);
    const newFontSizes = calcNewFontSizes(children);
    children.forEach((el, i) => (el.style.fontSize = newFontSizes[i] + 'px'));
  }
};
