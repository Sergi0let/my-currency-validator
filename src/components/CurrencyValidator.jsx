import { arrowIcon } from '@/common/images.svg';
import { MainSkeleton } from '@/common/Skeletons';
import Input from '@/components/Input';
import { convertCurrency } from '@/gateway/gateway';
import { useState } from 'react';

export default function CurrencyValidator() {
  const [firstCurrency, setFirstCurrency] = useState('USD');
  const [firstCurrencyValue, setFirstCurrencyValue] = useState('0');

  const [secondCurrency, setSecondCurrency] = useState('UAH');
  const [secondCurrencyValue, setSecondCurrencyValue] = useState('0');

  const [resultConvert, setResultConvert] = useState('');
  const [oneCurrency, setOneCurrency] = useState('');

  const [isLoaded, setIsLoaded] = useState(false);

  const handlerFirstCurrency = (value) => {
    setFirstCurrencyValue(value);
  };

  const handlerSecondCurrency = (value) => {
    setSecondCurrencyValue(value);
  };

  const convertMoney = () => {
    if (
      (firstCurrencyValue === '0' && secondCurrencyValue === '0') ||
      firstCurrency === secondCurrency
    ) {
      alert('Введіть значення для конвертації');
      return;
    }
    setIsLoaded(true);

    convertCurrency(firstCurrencyValue, firstCurrency, secondCurrency).then(
      ({ result }) => {
        const oneCurrency = result / firstCurrencyValue;
        const resultValue = result.toFixed(2);
        setResultConvert(resultValue);
        setOneCurrency(oneCurrency);
        setIsLoaded(false);
      }
    );
  };

  return (
    <section className="validator-container">
      {!isLoaded ? (
        <>
          <Input
            type="buy"
            oneCurrency={oneCurrency}
            currency={firstCurrency}
            currencyAmount={firstCurrencyValue}
            secondCurrency={secondCurrency}
            onSetCurrency={setFirstCurrency}
            onCurrencyValue={handlerFirstCurrency}
          />
          <Input
            type="sell"
            currency={secondCurrency}
            currencyAmount={resultConvert}
            onSetCurrency={setSecondCurrency}
            onCurrencyValue={handlerSecondCurrency}
          />
          <button onClick={convertMoney} type="button" className="btn-convert">
            {arrowIcon}
            Конвертувати
          </button>
        </>
      ) : (
        <MainSkeleton />
      )}
    </section>
  );
}
