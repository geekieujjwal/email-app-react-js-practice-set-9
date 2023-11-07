import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { EmailContext } from "../context/EmailContext";

const IndividualSentEmailPage = () => {
  const { sentEmailsArr } = useContext(EmailContext);
  const { subject } = useParams();
  return (
    <div>
      {sentEmailsArr
        .filter((email) => email.subject === subject)
        .map(({ id, subject, to, message }) => {
          return (
            <div key={id}>
              <h2>{subject}</h2>
              <p>To: {to}</p>
              <p>Message: {message}</p>
            </div>
          );
        })}
    </div>
  );
};

export default IndividualSentEmailPage;
