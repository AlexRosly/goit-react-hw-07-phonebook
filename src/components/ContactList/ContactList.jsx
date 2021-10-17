import React from "react";
import { Button, List, Span, Paragraf, Item, Phone, Trash } from "./ContactList.styled";
import { Loaders } from "../Loader/Loader";
import { Icon } from "../Icon/Icon";

const ContactList = ({contacts, onDelete, deleting }) => {
  return (
    <>
    <Item>
      {contacts.map(({id, name, number}) => (
        <List key={id}>
          <Phone size={Icon.small} />
          <Paragraf>
            {name}: <Span>{number}</Span>
          </Paragraf>
          <Button type="button" onClick={() => onDelete(id)} disabled={deleting}>{deleting && <Loaders />}
            <Trash size={Icon.small} />
            Delete            
          </Button>
        </List>
      ))}
    </Item>
  </>
  )
};

export default ContactList;