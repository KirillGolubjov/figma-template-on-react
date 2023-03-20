const FormRow = ({
  type,
  name,
  placeholder,
  value,
  handleChange,
  labelText,
  showLabel = true,
}) => {
  return (
    <div className='form-row'>
      {showLabel && (
        <label htmlFor={name} className='form-label'>
          {labelText || name}
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
export default FormRow;
