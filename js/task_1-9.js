function isLoginValid(login, min = 4, max = 16) {
  return login.length >= min && login.length <= max;
}

function isLoginUnique(allLogins, login) {
  "use strict";
  let result = true;
  for (const name of allLogins) {
    if (login === name) {
      result = false;
    }
  }
  return result;
}

function addLogin(allLogins, login) {
  "use strict";

  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;

  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      logins.push(allLogins);
      message = SUCCESS;
      //   console.log(message);
    } else {
      message = REFUSAL;
      //   console.log(message);
    }
  } else {
    message = ERROR;
    // console.log(message);
  }
  //   console.log(message);
  console.log(allLogins);
  return message;
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

console.log(addLogin(logins, "Ajax"));
// 'Логин успешно добавлен!'

// console.log(addLogin(logins, "robotGoogles"));
// 'Такой логин уже используется!'

// console.log(addLogin(logins, "Zod"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, "jqueryisextremelyfast"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(["1234", "12345"], "1234"));
