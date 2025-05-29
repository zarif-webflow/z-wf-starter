/**
 * Sets the styles on an HTML element and returns a function to revert them.
 *
 * @param element - The HTML element to set styles on.
 * @param styles - An object containing CSS properties and values to set.
 * @returns An object with a `revert` method to restore previous styles.
 *
 * @example
 * const revert = setStyle(element, { color: 'red', backgroundColor: 'blue' });
 * // Later, to revert the styles:
 * revert();
 **/
export const setStyle = <TElement extends HTMLElement = HTMLElement>(
  element: TElement,
  styles: Record<string, string>
): { revert: () => void } => {
  const prevValues: typeof styles = {};

  for (const key of Object.keys(styles)) {
    prevValues[key] = element.style.getPropertyValue(key);
    element.style.setProperty(key, styles[key] || null);
  }

  return {
    revert: () => {
      Object.assign(element.style, prevValues);
    },
  };
};
