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

export const timeCalculator = (uploadTime) => {
  const now = new Date();
  const differenceInMilliseconds = now - uploadTime;
  const differenceInHours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
  const differenceInMinutes = Math.floor(differenceInMilliseconds / (1000 * 60));
  const differenceInSeconds = Math.floor(differenceInMilliseconds / (1000));
  const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const uploadMonth = monthName[uploadTime.getMonth()];
  const uploadDate = uploadTime.getDate();

  if (differenceInSeconds <= 60)
    return `${differenceInMilliseconds}s`;
  if (differenceInMinutes <= 60)
    return `${differenceInMinutes}m`;
  if (differenceInHours < 24) {
    return `${differenceInHours}h`;
  } else {
    return `${uploadMonth} ${uploadDate}`;
  }
};