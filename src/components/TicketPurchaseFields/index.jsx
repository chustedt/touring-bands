import React, { useEffect, Fragment } from "react";
import { centsToDollars } from "../../utils/money-formatter";
import { useFieldArray, useFormContext } from "react-hook-form";
import InputField from "../InputField";

const TicketPurchaseFields = ({ ticketTypes, onChange }) => {
  const { control, register, watch } = useFormContext();

  const { fields } = useFieldArray({
    control,
    name: "tickets",
  });

  const values = watch("tickets");

  useEffect(() => {
    onChange();
  }, [values, onChange]);

  return (
    <fieldset>
      <legend className="sr-only">Select quantity of tickets</legend>
      {fields.map((field, index) => (
        <Fragment key={field.id}>
          {ticketTypes[index] && (
            <div className="flex justify-between pb-8 border-b border-solid border-gray-400 mb-8">
              <div className="w-3/4 pr-8">
                <h3 className="text-2xl">{ticketTypes[index].name}</h3>
                <p
                  className="mb-2 mt-2"
                  id={`ticket-description-${ticketTypes[index].type}`}
                >
                  {ticketTypes[index].description}
                </p>
                <p className="text-2xl">
                  ${centsToDollars(ticketTypes[index].cost)}{" "}
                </p>
              </div>
              <div className="w-24">
                <InputField
                  {...register(`tickets.${index}.value`)}
                  type="number"
                  min="0"
                  id={`tickets.${index}.value`}
                  aria-describedby={`ticket-description-${ticketTypes[index].type}`}
                  label={`Quantity of ${ticketTypes[index].name} tickets`}
                  hideLabel
                />
              </div>
            </div>
          )}
        </Fragment>
      ))}
    </fieldset>
  );
};

export default TicketPurchaseFields;
