import React, { useState } from "react";
interface IFormProp {
  handleSubmit?: Function;
}
const Form = ({ handleSubmit }: IFormProp) => {
  const [form, setForm] = useState<string>("");
  const _handleSubmit = (e) => {
    e.preventDefault();
    handleSubmit(form);
  };
  return (
    <form onSubmit={_handleSubmit}>
      <h1>Form Snowpack</h1>
      <input
        type="text"
        placeholder="write you experience using snowpack"
        onChange={(e) => setForm(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
