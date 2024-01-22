/**
 * @param {*} input
 * @param {RegExp} regexp
 * @returns {boolean}
 */
export const isValidForm = (input, regexp) => {
  const validRegex = new RegExp(regexp);
  const result = validRegex.exec(input);
  console.log(`isValidForm result : ${result}`)
  
  return result;
};

/**
 * @param {Event} event
 * @param {stateSetter} setter for setState by input value
 */
export const keyDownHandler = (e, setter) => {
  if (e.key === "Enter") {
    setter(e.target.value);
  }
};

export const converseEmail = (email) => {
  const userName = email.split('@')[0];

  return `@${userName}`;
}