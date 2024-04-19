import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  className = "",
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) => {
  const currencyId = useId();
  return (
    <div className={`bg-white p-3 rounded-xl flex text-small ${className}`}>
      <div className="w-1/2">
        <label htmlFor={currencyId} className="text-gray-500 w-full">
          {label}
        </label>
        <input
          id={currencyId}
          type="number"
          className="outline-none w-full mt-2"
          value={amount}
          disabled={amountDisable}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap text-right justify-end">
        <p className="text-gray-500 w-full"> Currency Type</p>
        <select
          className="bg-gray-300 rounded-md px-1.5 py-1 text-center cursor-pointer outline-none mt-2"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
