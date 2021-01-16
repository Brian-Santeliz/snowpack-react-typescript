import { useState, FC } from "react";
type FormProp = {
  handleSubmit: Function;
};
const Form: FC<FormProp> = () => {
  const [form, setForm] = useState<string>("");
  return (
    <form>
      <h1>Form Snowpack</h1>
      <input type="text" placeholder="write you experience using snowpack" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
