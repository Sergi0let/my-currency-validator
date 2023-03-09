export const flagChoose = (money) => {
  switch (money) {
    case 'USD':
      return '/usa.webp';
    case 'PLN':
      return '/pl.webp';
    case 'EUR':
      return '/eur.png';
    case 'UAH':
      return '/ukraine.webp';
    default:
      return '/usa.webp';
  }
};

export const typeChoose = (type) => {
  switch (type) {
    case 'buy':
      return 'Я маю';
    case 'sell':
      return 'Я отримаю';
    default:
      return 'Я маю';
  }
};

export const bagChoose = (value) => {
  switch (value) {
    case 'USD':
      return '$';
    case 'PLN':
      return 'zł';
    case 'EUR':
      return '€';
    case 'UAH':
      return '₴';
    default:
      return '';
  }
};
