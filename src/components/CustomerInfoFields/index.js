import React from "react";
import InputField from "../InputField";

const CustomerInfoFields = () => {
  return (
    <fieldset className="mb-4">
      <legend className="sr-only">Customer Information</legend>
      <div>
        <div className="flex gap-4 mb-4">
          <InputField
            label="First Name"
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            hideLabel
            required
          />
          <InputField
            label="Last Name"
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            hideLabel
            required
          />
        </div>
        <InputField
          label="Address"
          id="address"
          name="address"
          type="text"
          placeholder="Address"
          hideLabel
          required
        />
      </div>
    </fieldset>
  );
};

export default CustomerInfoFields;
