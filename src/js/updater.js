/**
 * Update the colors of the website
 * @param {Object} picker - Color picker object
 */
function update(picker) {
  const newColor = picker.toHEXString();
  document.documentElement.style.setProperty('--mainP', adjustColorBrightness(newColor,-180));
  document.documentElement.style.setProperty('--lightP', newColor);
}

/**
 * Function to adjust the color brightness
 * @param {string} hexColor - The HEX color to adjust
 * @param {number} adjustmentFactor - The amount to adjust the brightness
 * @returns {string} - The adjusted HEX color
 */

function adjustColorBrightness(hexColor, adjustmentFactor) {
  // Convert the hex color to an RGB array
  const rgb = hexColor.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => {
    return '#' + r + r + g + g + b + b;
  }).substring(1).match(/.{2}/g).map(x => parseInt(x, 16));

  // Adjust the brightness of each color channel
  const adjustedRgb = rgb.map(channel => {
    const adjustedChannel = channel + adjustmentFactor;
    return Math.max(0, Math.min(255, adjustedChannel));
  });

  // Convert the adjusted RGB array back to a hex color
  const adjustedHexColor = adjustedRgb.reduce((hex, channel) => {
    const hexChannel = channel.toString(16);
    return hex + (hexChannel.length === 1 ? '0' + hexChannel : hexChannel);
  }, '#');

  return adjustedHexColor;
}

// Normal colors
const dark = "black"
const main = "#5e288a"
const light = "#f0deff"

/**
 * Sets the colors to their normal form
 */
function resetColors() {
  document.documentElement.style.setProperty('--darkP', dark);
  document.documentElement.style.setProperty('--mainP', main);
  document.documentElement.style.setProperty('--lightP', light);
}