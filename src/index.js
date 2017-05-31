const getChildren = element => {
  return element.querySelectorAll('*');
};

const getInnerHeight = element => {
  const height = window.getComputedStyle(element, null).getPropertyValue('height').replace('px', '');
  return parseFloat(height);
};

const isOverflown = element => {
  const height = getInnerHeight(element);
  console.dir(element.scrollHeight);
  console.dir(element.clientHeight);
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
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

const getHeightOfElement = element => {
  return parseFloat(window.getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
};

const shrinkText = element => {
  while (isOverflown(element)) {
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
  } while (!isOverflown(element));
};

const getElements = () => {
  const allElements = [...document.getElementsByTagName('*')];
  return allElements.filter(el => el.getAttribute(ATTRIBUTE) !== null);
};

const generateArray = elements => {
  if(elements.constructor.name === 'HTMLCollection') return [...elements];
  return elements;
};

export function fix(els, enlarge = true) {
  const elements = generateArray(els);
  if (!elements || elements.length < 1) throw new Error('TextFitter: No elements to adjust text.');
  if (elements.length < 1) return;
  elements.forEach(el => {
    if (enlarge || isOverflown(el)) {
      if (!isOverflown(el)) enlargeText(el);
      shrinkText(el);
    }
  });
};
