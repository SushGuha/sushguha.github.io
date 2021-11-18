import React from "react";
import { init } from "emailjs-com";
init("user_oOlM0G14cuHzycNRXzr60");
const testStr = `example@email.com \nDescribe your Project!`;
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailIn: "",
      feedback: "",
      name: "Name",
      email: "email@example.com",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form className="test-mailing">
        <div>
          <textarea
            id="test-mailing"
            name="test-mailing"
            onChange={this.handleChange}
            placeholder={testStr}
            required
            value={this.state.feedback}
            style={{
              width: "40%",
              height: "100px",
              borderRadius: "10px",
              marginBottom: "1%",
              backgroundColor: "aquamarine",
              fontFamily: `"Shippori Antique", sans-serif`,
            }}
          />
        </div>
        <input
          type="button"
          value="Submit"
          className="btn btn--submit"
          onClick={this.handleSubmit}
          style={{
            borderRadius: "10px",
            backgroundColor: "aquamarine",
            fontFamily: `"Shippori Antique", sans-serif`,
          }}
        />
      </form>
    );
  }

  handleChange(event) {
    this.setState({ feedback: event.target.value });
    console.log(this.state.feedback);
  }

  handleSubmit() {
    const templateId = "template_g3dyiw2";

    this.sendFeedback(templateId, {
      message_html: this.state.feedback,
      from_name: this.state.name,
      reply_to: this.state.email,
    });
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("service_u4lj4qz", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }
}
