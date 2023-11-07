import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { EmailContext } from "../context/EmailContext";

const IndividualInboxEmailPage = () => {
  const { receivedEmailsArr } = useContext(EmailContext);
  const { subject } = useParams();
  return (
    <div>
      {receivedEmailsArr
        .filter((email) => email.subject === subject)
        .map(({ id, subject, sender, message }) => {
          return (
            <div key={id}>
              <h2>{subject}</h2>
              <p>From: {sender}</p>
              <p>Message: {message}</p>
            </div>
          );
        })}
    </div>
  );
};

export default IndividualInboxEmailPage;
