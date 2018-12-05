import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { contact, index } = this.props;
    return (
      <ul className="contact-card">
        <li><img src={contact.pictureUrl} alt={contact.name} /></li>
        <li><h3>{contact.name}</h3></li>
        <li>{contact.popularity}</li>
        <li>
          <button className="button" onClick={() => {this.props.deleteButton(index)}}>
            Delete
          </button>
        </li>
      </ul>
    );
  }
}

export default Card;