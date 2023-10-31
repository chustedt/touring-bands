import clsx from "clsx";
import React, { forwardRef } from "react";

const InputField = forwardRef(
  (
    {
      className,
      hideLabel,
      label,
      placeholder,
      name,
      id,
      type = "text",
      required,
      children,
      value,
      onChange,
      pattern,
      ariaDescribedby,
      min,
      error,
      register,
    },
    ref
  ) => {
    const classes = clsx("w-full", className);
    const labelClasses = clsx({ "sr-only": hideLabel });

    return (
      <div className={classes}>
        <label className={labelClasses} htmlFor={id}>
          {`${label}${required ? " *" : ""}`}
        </label>
        <input
          register={register}
          className={`p-2 border border-solid ${
            error ? "border-red-500" : "border-gray-400"
          } w-full`}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          pattern={pattern}
          aria-describedby={ariaDescribedby}
          min={min}
          ref={ref}
        />
        {children}
        {error && (
          <p role="alert" aria-live="polite" className="text-red-500">
            {error.message}
          </p>
        )}
      </div>
    );
  }
);

export default InputField;
