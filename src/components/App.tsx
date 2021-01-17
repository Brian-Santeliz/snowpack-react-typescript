import React, { useState } from "react";
import { Header, Form, List } from "./main";

const App = () => {
  const [message, setMessage] = useState<string[]>([]);
  const [error, setError] = useState<boolean>(false);

  const checkMessage = (message: string): boolean => {
    return message.trim().length !== 0 ? true : false;
  };
  const handleSubmit = (message: string): void => {
    const response = checkMessage(message);
    if (response) {
      setError(false);
      setMessage((value) => {
        return [...value, message];
      });
    } else {
      setError(true);
    }
  };
  const isEmpty = !message.length && <p>Mensajes vacios</p>;
  return (
    <>
      <Header />
      <p>Welcome to React & Snowpack!</p>
      <Form handleSubmit={handleSubmit} />
      {error && <p>Can't submit empty message</p>}
      {isEmpty}
      {!isEmpty && message.map((e, index) => <List message={e} key={index} />)}
    </>
  );
};

export default App;
