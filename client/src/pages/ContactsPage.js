import ContactCard from "components/Card/ContactCard";
import Page from "components/Page";
import { contacts } from "demos/contactsPage";
import React from "react";

const ContactsPage = () => {
  return (
    <Page
      className="ContactsPage"
      title="Contacts"
      breadcrumbs={[{ name: "Contacts", active: true }]}
    >
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {contacts.map(({ name, rating, status, avatar }, index) => {
          return (
            <ContactCard
              name={name}
              status={status}
              rating={rating}
              avatar={avatar}
            />
          );
        })}
      </div>
    </Page>
  );
};

export default ContactsPage;
