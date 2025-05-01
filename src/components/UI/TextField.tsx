import React from 'react';

interface TextFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const TextField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  className = '',
}: TextFieldProps) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ff6100] focus:border-[#ff6100] transition-colors duration-200"
      />
    </div>
  );
};

export default TextField;