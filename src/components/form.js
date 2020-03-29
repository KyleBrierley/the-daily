import React from "react"

// var url = 'https://studio.twilio.com/v1/Flows/FWc07582ed3bca75ee1f1e12f963cd0056/Executions';
// var user = 'AC081425bee3a06ef9e594a3fc3ea75470';
// var pass = '8e0896fc823d3f61a408a91305ab446d';

export default class FormPage extends React.Component {
 
constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    }

state = {
    phone: ""
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const data = new FormData(event.target);
    console.log(data);

    fetch("https://collect.tealiumiq.com/event", {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "To": this.state.phone,
    "From": "+14154750959",
    "tealium_account": "services-kyle",
    "tealium_profile": "main"
  })
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.log(err);
});
    // utag.link({ "phone": data });
    alert(`Check your phone!`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Phone Number
          <input type="text" name="phone" value={this.state.phone} onChange={this.handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}