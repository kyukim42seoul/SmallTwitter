/**
 * 
 * @param {*} input 
 * @param {RegExp} regexp 
 * @returns {boolean}
 */

export const isValidForm = (input, regexp) => {
  const validRegex = new RegExp(regexp);

  return validRegex.exec(input);
};


/**
 * @param {Event} event 
 * @param {stateSetter} setter for setState by input value
 */
export const keyDownHandler = (e ,setter) => {
  if (e.key === "Enter") {
  setter(e.target.value);
  };
};