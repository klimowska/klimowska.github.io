export const isValid = (value, regex) => !!value?.match(regex);

export const validate = (value, regex) => (isValid(value, regex) ? value : "");

export const loggedValidate = (value, regex) =>
  isValid(value, regex)
    ? value
    : (console.log("Incorrect value during validation"), "");
