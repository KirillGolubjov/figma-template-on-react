const FormRow = ({ type, name, placeholder, value, handleFormInput }) => {
  return (
    <div className='form-row'>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleFormInput}
      />
    </div>
  );
};
export default FormRow;
