import clsx from "clsx";
import React from "react";

const InputField = ({
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
}) => {
  const classes = clsx("w-full", className);
  const labelClasses = clsx({ "sr-only": hideLabel });

  return (
    <div className={classes}>
      <label className={labelClasses} htmlFor={id}>
        {`${label}${required && " *"}`}
      </label>
      <input
        className="p-2 border w-full"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        pattern={pattern}
      />
      {children}
    </div>
  );
};

export default InputField;
