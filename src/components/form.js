import React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "", email: "", message: "", success: "", display: "" };
    }

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        //body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => this.setState({ success: 'Thanks! I will get back to you soon!', display: 'hide' }))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { name, email, message } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
            <label className={this.state.display} for="name">Your Name:</label>
            <input className={this.state.display} type="text" id="name" name="name" value={name} onChange={this.handleChange} />

            <label className={this.state.display} for="email">Your Email:</label>
            <input className={this.state.display} type="email" id="email" name="email" value={email} onChange={this.handleChange} />

            <label className={this.state.display} for="message">Message:</label>
            <textarea className={this.state.display} name="message" id="message" value={message} onChange={this.handleChange} />

            <button className={this.state.display} type="submit">Send</button>
            <p>{this.state.success}</p>
        </form>
      );
    }
  }

  export default ContactForm;