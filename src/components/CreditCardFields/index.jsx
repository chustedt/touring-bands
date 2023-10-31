import React from "react";
import InputField from "../InputField";
import { CreditCard } from "lucide-react";
import { useFormContext } from "react-hook-form";

const CreditCardFields = () => {
  const {
    register,
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext();

  const handleCardNumberChange = async (event) => {
    let value = event.target.value.replace(/[^\d]/g, ""); // Remove non-numeric characters
    value = value.match(/.{1,4}/g)?.join(" ") || ""; // Group numbers by 4 and add space
    await setValue("cardNumber", value.substring(0, 19)); // Limit the length to 19 characters including spaces
    await trigger("cardNumber"); // Trigger validation
  };

  const handleExpiryDateChange = async (event) => {
    let value = event.target.value.replace(/[^\d]/g, ""); // Remove non-numeric characters
    if (value.length >= 3) {
      value = value.replace(/(\d{2})(\d{1,2})/, "$1/$2"); // Add slash after the month
    }
    await setValue("expiryDate", value.substring(0, 5)); // Limit the length to MM/YY format
    await trigger("expiryDate"); // Trigger validation
  };

  return (
    <fieldset className="mb-4">
      <legend className="text-xl font-bold mb-2">Payment Details</legend>
      <div className="mb-4">
        <InputField
          {...register("cardNumber", {
            required: "Credit card number is required",
            pattern: {
              value: /^(?:\d{4} ){3}\d{4}$/,
              message:
                "Credit card number must be in the format: 0000 0000 0000 0000",
            },
          })}
          className="relative"
          label="Card Number"
          id="cardNumber"
          name="cardNumber"
          type="text"
          placeholder="0000 0000 0000 0000"
          error={errors.cardNumber}
          hideLabel
          onChange={handleCardNumberChange}
        >
          <CreditCard
            className="absolute right-2 top-5 transform -translate-y-1/2 w-6 h-6 text-gray-500"
            aria-hidden
            role="presentation"
            tabIndex="-1"
          />
        </InputField>
      </div>
      <div className="flex gap-4 mb-4">
        <InputField
          {...register("expiryDate", {
            required: "Expiration date is required",
            pattern: {
              value: /^(?:0[1-9]|1[0-2])\/\d{2}$/,
              message: "Expiration date must be in the format: MM/YY",
            },
            maxLength: 5,
          })}
          label="Expiration Date (MM/YY)"
          id="expiryDate"
          name="expiryDate"
          type="text"
          placeholder="MM/YY"
          error={errors.expiryDate}
          onChange={handleExpiryDateChange}
          hideLabel
        />
        <InputField
          {...register("cvv", {
            required: "CVV is required",
            pattern: {
              value: /^\d{3,4}$/,
              message: "CVV must be 3 or 4 digits",
            },
          })}
          label="CVV"
          id="cvv"
          name="cvv"
          type="text"
          placeholder="CVV"
          error={errors.cvv}
          hideLabel
        />
      </div>
    </fieldset>
  );
};

export default CreditCardFields;
