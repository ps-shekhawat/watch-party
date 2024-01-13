export const validateCredentials = (email, password, name = "x") => {
  const isEmailValid = validateEmail(email);
  const isPasswordVaild = valdatePassword(password);
  const isNameValid = name.length > 0;

  if (!isNameValid) return "Please Enter Name";
  if (!isEmailValid) return "Please enter a valid email address";
  if (!isPasswordVaild)
    return "Password must have more than 8 characters and inlcude uppercase, numbers, special characters";

  return null;
};

const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const valdatePassword = (password) => {
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(password);
};
