const FullnameInput = (props) => {
  const { value, handleChange } = props;
  return (
    <input
      type="text"
      name="fullname"
      required
      placeholder="שם מלא *"
      value={value}
      onChange={handleChange}
      className="regiserPageInput justify-self-center h-12 bwc w-full bg-grey-disabled my-4 rounded-md"
    />
  );
};

export default FullnameInput;
