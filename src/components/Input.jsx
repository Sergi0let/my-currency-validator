import { bagChoose, flagChoose, typeChoose } from '@/common/helpers';
import Image from 'next/image';
import { useState } from 'react';

export default function Input({
  currency,
  onSetCurrency,
  onCurrencyValue,
  type,
  currencyAmount,
  oneCurrency,
  secondCurrency,
}) {
  const [money, setMoney] = useState(currency);
  const [moneyValue, setMoneyValue] = useState(currencyAmount);

  const onChangeValue = (e) => {
    setMoneyValue(e.target.value);
    onCurrencyValue(e.target.value);
  };

  const onChangeCurrency = (e) => {
    setMoney(e.target.value);
    onSetCurrency(e.target.value);
  };

  const handleFocus = () => setMoneyValue('');

  return (
    <article className="w-full h-32 md:w-2/5 bg-gray-50 p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <label
          htmlFor="price"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {typeChoose(type)}
        </label>
        <Image
          src={flagChoose(money)}
          width={40}
          height={40}
          alt={`${money}`}
        />
      </div>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">{bagChoose(money)}</span>
        </div>
        <input
          type="number"
          name="price"
          id="price"
          disabled={type === 'sell'}
          value={moneyValue}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="0"
          onChange={onChangeValue}
          onFocus={handleFocus}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            onChange={onChangeCurrency}
            value={money}
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option>UAH</option>
            <option>USD</option>
            <option>EUR</option>
            <option>PLN</option>
          </select>
        </div>
      </div>
      <p className="text-sm font-medium leading-6 text-gray-900 pt-3">
        {oneCurrency &&
          `1 ${money} = ${oneCurrency.toFixed(2)} ${secondCurrency}`}
      </p>
    </article>
  );
}
