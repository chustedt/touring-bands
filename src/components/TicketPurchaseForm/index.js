import React, { useState, useEffect } from "react";
import TicketPurchaseField from "../TicketPurchaseField";
import InputField from "../InputField";
import { CreditCard } from "lucide-react";
import Button from "../Button";
import CustomerInfoFields from "../CustomerInfoFields";

const TicketPurchaseForm = ({ ticketTypes = [] }) => {
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [expiryDate, setExpiryDate] = useState("");
  const [tickets, setTickets] = useState([]);
  const [cardNumber, setCardNumber] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTickets = ticketTypes.map((ticketType) => ({
      ...ticketType,
      quantity: 0,
    }));
    setTickets(newTickets);
  }, [ticketTypes]);

  useEffect(() => {
    const newTotal = tickets.reduce(
      (acc, ticket) => acc + (ticket.quantity * ticket.cost) / 100,
      0
    );
    setTotal(newTotal);
  }, [tickets]);

  const handleQuantityChange = (event) => {
    const { name, value } = event.target;
    const newTickets = tickets.map((ticket) => {
      if (ticket.type === name) {
        return {
          ...ticket,
          quantity: parseInt(value),
        };
      }
      return ticket;
    });
    setTickets(newTickets);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCardNumberChange = (event) => {
    let value = event.target.value.replace(/[^\d]/g, ""); // Remove non-numeric characters
    value = value.match(/.{1,4}/g)?.join(" ") || ""; // Group numbers by 4 and add space
    setCardNumber(value.substring(0, 19)); // Limit the length to 19 characters including spaces
  };

  const handleExpiryDateChange = (event) => {
    let value = event.target.value.replace(/[^\d]/g, ""); // Remove non-numeric characters
    if (value.length >= 3) {
      value = value.replace(/(\d{2})(\d{1,2})/, "$1/$2"); // Add slash after the month
    }
    setExpiryDate(value.substring(0, 5)); // Limit the length to MM/YY format
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Select Tickets</h2>
      <form>
        <fieldset>
          <legend className="sr-only">Select quantity of tickets</legend>
          {ticketTypes.map((ticketType) => (
            <TicketPurchaseField
              onChange={handleQuantityChange}
              ticketType={ticketType}
              key={ticketType.type}
            />
          ))}
        </fieldset>
        <div
          className="flex justify-between text-2xl mb-4"
          role="group"
          aria-labelledby="total"
        >
          <h3 id="total">TOTAL</h3>
          <output id="totalAmount" aria-live="polite">
            ${total}
          </output>
        </div>
        <CustomerInfoFields />
        <fieldset className="mb-4">
          <legend className="text-xl font-bold mb-2">Payment Details</legend>
          <div className="mb-4">
            <InputField
              className="relative"
              label="Card Number"
              id="cardNumber"
              name="cardNumber"
              type="text"
              placeholder="0000 0000 0000 0000"
              hideLabel
              required
              value={cardNumber}
              onChange={handleCardNumberChange}
              pattern="(?:\d{4} ){0,3}\d{4}"
            >
              <CreditCard
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500"
                aria-hidden
                role="presentation"
                tabIndex="-1"
              />
            </InputField>
          </div>
          <div className="flex gap-4 mb-4">
            <InputField
              label="Expiration Date (MM/YY)"
              id="expiryDate"
              name="expiryDate"
              type="text"
              placeholder="MM/YY"
              hideLabel
              required
              value={expiryDate}
              onChange={handleExpiryDateChange}
              pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
              maxLength="5"
            />
            <InputField
              label="CVV"
              id="cvv"
              name="cvv"
              type="text"
              placeholder="CVV"
              hideLabel
              required
              pattern="\d*"
              maxLength="4"
            />
          </div>
        </fieldset>
        <Button type="submit">Purchase</Button>
      </form>
    </div>
  );
};

TicketPurchaseForm.propTypes = {};

export default TicketPurchaseForm;
