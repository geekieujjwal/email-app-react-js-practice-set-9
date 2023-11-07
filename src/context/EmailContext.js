import React, { createContext, useEffect, useState } from "react";
import fakeFetch from "../Data";

export const EmailContext = createContext();

export const ContextProvider = ({ children }) => {
  const [receivedEmailsArr, setReceivedEmailsArr] = useState([]);
  const [sentEmailsArr, setSentEmailsArr] = useState([]);

  useEffect(() => {
    fakeFetch("https://example.com/api/allemails").then((data) => {
      setReceivedEmailsArr(data.data.emails);
      console.log(data.data.emails);
      setSentEmailsArr(data.data.sentEmails);
    });
  }, []);

  return (
    <EmailContext.Provider
      value={{ receivedEmailsArr, setReceivedEmailsArr, sentEmailsArr }}
    >
      {children}
    </EmailContext.Provider>
  );
};
