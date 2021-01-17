import React, { useState } from "react";
interface IFormProp {
  handleSubmit: Function;
}
const Form = ({ handleSubmit }: IFormProp) => {
  const [form, setForm] = useState<string>("");
  const _handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(form);
    setForm("");
  };
  return (
    <form onSubmit={_handleSubmit}>
      <h1>Form Snowpack</h1>
      <input
        type="text"
        placeholder="write you experience using snowpack"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm(e.target.value)
        }
        value={form}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
