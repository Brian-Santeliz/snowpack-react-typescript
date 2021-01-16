import React from "react";
import { Header, Form } from "./main";
const App = () => {
  const handleSubmit = (): void => {};
  return (
    <>
      <Header title="Snowpack React" />
      <p>Welcome to React & Snowpack!</p>
      <Form handleSubmit={handleSubmit} />
    </>
  );
};

export default App;
