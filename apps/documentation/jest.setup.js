const { getComputedStyle } = window;
/** Required to fix jsdom / axe errors in jest tests due to missing feature */
window.getComputedStyle = (elt) => getComputedStyle(elt);
