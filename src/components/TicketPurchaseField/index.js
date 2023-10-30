import React from "react";
import { centsToDollars } from "../../utils/money-formatter";

const TicketPurchaseField = ({ ticketType, onChange }) => {
  return (
    <div className="flex justify-between pb-8 border-b border-solid border-gray-400 mb-8">
      <div className="w-3/4 pr-8">
        <h3 className="text-2xl">{ticketType.name}</h3>
        <p className="mb-2 mt-2" id={`ticket-description-${ticketType.type}`}>
          {ticketType.description}
        </p>
        <p className="text-2xl">${centsToDollars(ticketType.cost)} </p>
      </div>
      <div>
        <label
          className="sr-only"
          htmlFor={`ticket-quantity-${ticketType.type}`}
        >
          {`Quantity of ${ticketType.name} tickets`}
        </label>
        <input
          className="p-2 border w-24"
          type="number"
          name={ticketType.type}
          id={`ticket-quantity-${ticketType.type}`}
          aria-describedby={`ticket-description-${ticketType.type}`}
          onChange={onChange}
          defaultValue={0}
          min="0"
        />
      </div>
    </div>
  );
};

export default TicketPurchaseField;
