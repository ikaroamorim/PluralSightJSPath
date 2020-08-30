'use strict';
(function () {
  /*
  let date = new Date();
  let date2 = new Date(1988, 8, 27, 14, 50, 32, 999)
  display(date.toISOString())
  display(date2.toISOString())
  display(date.toString())
  display(date2.toString())
  display(date.toUTCString())

  display(date.getFullYear());
  display(date.getMonth()); //Base Zero
  display(date.getDate());
  display(date.getHours());
  display(date.getMinutes());
  display(date.getSeconds());
  display(date.getMilliseconds());

  display((date-date2))
  */

  function checkPasswordComplexity(password) {
    let regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$');
    let regex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

    return regex.test(password)
  }

  display(checkPasswordComplexity('Weak'))


  function findAlerts(logData) {
    let regex = /ERROR(.*?):(.*?);/g;
    let result = regex.exec(logData)

    while (result !== null) {
      display(result[1])
      display(result[2])
      display('------------------------------------------')
      result = regex.exec(logData)
    }
    //displayRegexArray(regex.exec(logData))
    //display('--------------------------------------------------------------------------------------')
    //displayRegexArray(regex.exec(logData))
  }

  let logData = 'INFO:OK; ERROR(HIGH): SOMETHING BROKE; ALERT:SUCCESS; ERROR(LOW): STABILITY LOST;'
  let result = findAlerts(logData);

  display(result)
})();