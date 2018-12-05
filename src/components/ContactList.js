'Use strict';
import React, { Component } from 'react';
import Card from './Card';

class ContactList extends Component {
  render() {
    return (
      <ul className="contact-list">
        {this.props.contacts.map((contact, index) => {
          return (
            <li key={`id=${index}`}>
              {/*The key should always go in the element returned by the map function */}
              <Card contact={contact} deleteButton={this.props.onDelete}/>
            </li>
            )
          })
        }
      </ul>
    )
  }
}

export default ContactList;