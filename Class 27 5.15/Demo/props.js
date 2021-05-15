'use strict';

function app() {
  let money = 10000000;
  let food = 'cookies';

  function withdrawl(amount) {
  if (amount < 50) {
    money -= amount;
  }
}
  zach({props:{['food']: food}}, withdrawl);

  console.log(money);
}

function zach(props, card) {
  console.log(props);
  card(49);
}

app();