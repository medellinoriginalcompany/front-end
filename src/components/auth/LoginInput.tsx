import React from 'react';

const LoginInput: React.FC<any> = ({
  name,
  label,
  value,
  type,
  handleOnChange,
  handleFocus,
  ariainvalid,
  innerRef,
  required,
  maxlength,
}) => {

  return (
    <div className="flex relative flex-col group">
      <label
        htmlFor={name}
        className={value ?
          `absolute pointer-events-none transition-all duration-300 -translate-y-4 text-sm` :
          `absolute pointer-events-none text-lg transition-all duration-300 translate-y-2 group-focus-within:-translate-y-4 group-focus-within:text-sm`}
      >
        {label}
      </label>
      <input
        className="bg-transparent py-2 text-lg border-b border-neutral-800 placeholder:text-neutral-800 focus:outline-none"
        type={type}
        id={name}
        name={name}
        value={value}
        ref={innerRef}
        onChange={handleOnChange}
        onFocus={handleFocus}
        maxLength={maxlength}
        aria-invalid={ariainvalid}
        autoComplete="off"
        {...(required ? { required: true } : {})}
      />
    </div>
  );
};

export default LoginInput;
