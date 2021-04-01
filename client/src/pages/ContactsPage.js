import ContactCard from "components/Card/ContactCard";
import Page from "components/Page";
import { contacts } from "demos/contactsPage";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const ContactsPage = ({ app }) => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [contactsList, setContactsList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await axios.get(`http://localhost:5000/connection/${app.state.id}`)
      .then(res => {
        console.log(res.data);
        setContactsList(res.data);
    })
    setIsLoading(false);
    }
    fetchData();
  }, [])
  return isLoading ? <div>Loading</div> : (
    <Page
      className="ContactsPage"
      title="Contacts"
      breadcrumbs={[{ name: "Contacts", active: true }]}
    >
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {contactsList.map(({followedId}) => {
          return (
            <ContactCard
              name={followedId.name}
              email={followedId.email}
              rating={followedId.rating}
              // avatar={requesterId.avatar}
            />
          );
        })}
      </div>
    </Page>
  );
};

export default ContactsPage;
