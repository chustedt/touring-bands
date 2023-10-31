import React, { useState } from "react";
import Button from "../Button";
import CustomerInfoFields from "../CustomerInfoFields";
import { useForm, FormProvider } from "react-hook-form";
import TicketPurchaseFields from "../TicketPurchaseFields";
import CreditCardFields from "../CreditCardFields";

const TicketPurchaseForm = ({ ticketTypes }) => {
  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      tickets: ticketTypes.map((ticketType) => ({
        type: ticketType.type,
        value: "0",
      })),
    },
  });

  const {
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = methods;

  const watchedValues = watch();

  const [total, setTotal] = useState(0);

  const handleQuantityChange = () => {
    const totalCost = watchedValues.tickets.reduce((acc, ticket) => {
      const ticketType = ticketTypes.find((t) => t.type === ticket.type);

      if (!ticketType) return acc;

      // Calculate and return the total cost of this ticket type
      return acc + ticketType.cost * Number(ticket.value);
    }, 0);

    const totalCostDollars = totalCost / 100;

    // Only update the total and clear errors if the total cost has changed
    if (totalCostDollars !== total) {
      setTotal(totalCostDollars);

      // Clear the custom error if it exists
      if (errors["custom"]) clearErrors("custom");
    }
  };

  const onSubmit = (data) => {
    const isValid = data.tickets.some(
      (ticket) => parseInt(ticket.value, 10) >= 1
    );

    if (!isValid) {
      setError("custom", {
        type: "manual",
        message: "Please select at least one ticket",
      });
    } else {
      alert("Form submitted");
      console.log(data);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Select Tickets</h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <TicketPurchaseFields
            onChange={handleQuantityChange}
            ticketTypes={ticketTypes}
          />
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
          <CreditCardFields />
          <Button type="submit">Purchase</Button>
          {errors.custom && (
            <p role="alert" aria-live="polite" className="text-red-500 mt-2">
              {errors.custom.message}
            </p>
          )}
        </form>
      </FormProvider>
    </div>
  );
};

TicketPurchaseForm.propTypes = {};

export default TicketPurchaseForm;
