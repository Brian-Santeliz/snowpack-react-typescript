import React, { useState } from "react";
import { Header, Form } from "./main";
interface IMessage {
  e: string;
}
const App = () => {
  const [message, setMessage] = useState<IMessage[]>([]);

  const handleSubmit = (message): void => {
    setMessage((value) => {
      return [...value, message];
    });
  };
  const isEmpty = !message.length && <p>Mensajes vacios</p>;
  return (
    <>
      <Header />
      <p>Welcome to React & Snowpack!</p>
      <Form handleSubmit={handleSubmit} />
      {isEmpty}
      {!isEmpty && message.map((e) => <li>{e}</li>)}
    </>
  );
};

export default App;
