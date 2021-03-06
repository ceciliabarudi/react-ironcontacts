'Use strict';
import contacts from '../data/contacts.json';
import React, { Component } from 'react';
import ContactList from '../components/ContactList'
import './Contact.css';

class Contacts extends Component {
  //setting the state with a class property instead of a constructor
  //already binds this, and you can also use the props inside
  state = {
    contacts: contacts.slice(0, 5)
  }

  handleRandom = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length - 1)];
    //takes a random contact from contacts
    const stateContacts = this.state.contacts
    stateContacts.push(randomContact)
    // ONLY CALL SETSTATE ONCE YOU'VE DONE PERFORMING WHATEVER
    // YOU NEED TO PERFORM ON THE STATE'S DATA YOU MOFOOOOOOOO
    this.setState({
      stateContacts
    })
  }

  sortByName = () => {
    const stateContacts = this.state.contacts
    stateContacts.sort((thisContact, nextContact) => {
      if (thisContact.name < nextContact.name) { return -1 }
      if (thisContact.name > nextContact.name) { return 1 }
      return 0
    })
    this.setState({
      stateContacts
    })
  }

  sortByPopularity = () => {
    //do the meaty stuff before you call setState pls thx
    const stateContacts = this.state.contacts
    stateContacts.sort((thisContact, nextContact) => {
      return nextContact.popularity - thisContact.popularity
    })
    this.setState({
      stateContacts
    })
  }

  deleteContact = (index) => {
    /*const index = event.target.attributes.id.nodeValue;
    this is a 'unique' value for the event that's just been
    clicked on baaack in the child component */
    const stateContacts = this.state.contacts
    stateContacts.splice(index, 1)
    //do the meaty stuff before you call setState pls thx
    this.setState({
      stateContacts
    })
  }

  render() {
    const { contacts } = this.state; //object destructuring
    // the same as const { contacts } = this.state.contacts;
    return (
      <div> {/*parent element*/}
        <button className="button" onClick={this.handleRandom}>Add random contact</button>
        <button className="button" onClick={this.sortByName}>Sort by name</button>
        <button className="button" onClick={this.sortByPopularity}>Sort by Popularity</button>
        <h2>Picture</h2>
        <h2>Name</h2>
        <h2>Popularity</h2>
        <ContactList contacts={contacts} onDelete={this.deleteContact} />
      </div>
    )
  }
}

export default Contacts;