import { TableSkeleton } from '@/common/Skeletons';
import { getCurrencies } from '@/gateway/gateway';
import { useEffect, useState } from 'react';

export default function Table() {
  const [data, setData] = useState(null);

  useEffect(() => {
    Promise.all([getCurrencies(), getCurrencies('EUR')]).then((data) => {
      setData(data);
    });
  }, []);

  if (!data) return <TableSkeleton />;

  const [usd, eur] = data;

  const normalizeData = (data) => {
    const { rates } = data;
    return rates.UAH.toFixed(2);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="px-4 py-1" colSpan="3">
            Currency rate
          </th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody className="">
        <tr>
          <td className="px-4 font-">USD</td>
          <td className="px-4">{normalizeData(usd)}</td>
        </tr>
        <tr>
          <td className="px-4 font- pb-2">EUR</td>
          <td className="px-4 pb-2">{normalizeData(eur)}</td>
        </tr>
      </tbody>
    </table>
  );
}
