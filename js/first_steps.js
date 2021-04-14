function getSubscriptionPrice(type) {
  let price;
  // Пиши код ниже этой строки

 switch (type) { // Дополни эту строку
    case 'starter' // Дополни эту строку
      :price = 0; // porque se pone dos puntos antes de price
      break;

    case 'professional': // Дополни эту строку
      price = 20; // Дополни эту строку
      break;

    case 'organization': // Дополни эту строку
      price = 50; // Дополни эту строку
      break;
  }

  // Пиши код выше этой строки
  return price;
}




function getShippingCost(country) {
  let message;
  // Пиши код ниже этой строки
switch (country) {
  case Китай:
    message = `Доставка в ${Китай} будет стоить ${100} кредитов`;
    case Чили:
    message = `Доставка в ${Чили} будет стоить ${250} кредитов`;
    case Австралия:
    message = `Доставка в ${Австралия} будет стоить ${170} кредитов`;
    case Ямайка:
    message = `Доставка в ${Ямайка} будет стоить ${120} кредитов`;
  default:
    message = 'Извините, в вашу страну доставки нет';
}
  // Пиши код выше этой строки
  return message;
}