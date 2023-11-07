import React, { useContext } from "react";
import { EmailContext } from "../context/EmailContext";
import { NavLink } from "react-router-dom";

const InboxPage = () => {
  const { receivedEmailsArr, setReceivedEmailsArr } = useContext(EmailContext);

  let readEmailsArr = receivedEmailsArr.filter(({ read }) => read);
  let unreadEmailsArr = receivedEmailsArr.filter(({ read }) => !read);

  const handleClick = (id) => {
    setReceivedEmailsArr((prev) =>
      prev.map((email) => (email.id === id ? { ...email, read: true } : email))
    );
  };

  return (
    <div>
      <h1>Inbox Page</h1>
      <h3>Unread Emails: {unreadEmailsArr.length}</h3>
      <h3>Read Emails: {readEmailsArr.length}</h3>
      <ul>
        {receivedEmailsArr.map(({ id, subject, read }) => {
          return (
            <li key={id}>
              <NavLink to={`/inbox/${subject}`} className="email-link">
                {subject}
              </NavLink>
              {!read && (
                <button onClick={() => handleClick(id)}>Mark as read</button>
              )}
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default InboxPage;
