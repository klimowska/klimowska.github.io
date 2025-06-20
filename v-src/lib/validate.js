const isValid = (value, regex) => !!value?.match(regex);

const validate = (value, regex) => isValid(value, regex) ? value : '';

const loggedValidate = (value, regex) => 
    isValid(value, regex) 
        ? value
        : (console.log('Incorrect value during validation'), '');
