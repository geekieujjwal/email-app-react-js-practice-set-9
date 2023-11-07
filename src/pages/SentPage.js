import React, { useContext } from "react";
import { EmailContext } from "../context/EmailContext";
import { NavLink } from "react-router-dom";

const SentPage = () => {
  const { sentEmailsArr } = useContext(EmailContext);

  return (
    <div>
      <h1>Sent Page</h1>
      <ul>
        {sentEmailsArr.map(({ id, subject }) => {
          return (
            <li key={id}>
              <NavLink to={`/sent/${subject}`} className="email-link">
                {subject}
              </NavLink>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SentPage;
