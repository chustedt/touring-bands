import React from "react";
import InputField from "../InputField";
import { useFormContext } from "react-hook-form";

const CustomerInfoFields = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <fieldset className="mb-4">
      <legend className="sr-only">Customer Information</legend>
      <div>
        <div className="flex gap-4 mb-4">
          <InputField
            {...register("firstName", { required: "First name is required" })}
            label="First Name"
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            error={errors.firstName}
            hideLabel
          />
          <InputField
            {...register("lastName", { required: "Last name is required" })}
            label="Last Name"
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            error={errors.lastName}
            hideLabel
          />
        </div>
        <InputField
          {...register("address", { required: "Address is required" })}
          label="Address"
          id="address"
          name="address"
          type="text"
          placeholder="Address"
          error={errors.address}
          hideLabel
        />
      </div>
    </fieldset>
  );
};

export default CustomerInfoFields;
