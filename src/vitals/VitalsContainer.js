import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import VitalsForm from "./VitalsForm";

export default class VitalsContainer extends Component {
    state = {
        form: {
            validated: false,
        },
    };

    /**
     * Copy pastas the form values to state
     * @param {DOM event} event
     */
    handleFormChange = (event) => {
        // this.setState({
        //     newStudent: {
        //         ...this.state.newStudent,
        //         [event.target.name]: event.target.value,
        //     },
        // });
        // console.log("handleFormChange: ");
        console.log("handleFormChange");
    };

    /**
     * Does bootstrap form validation
     * @param {DOM event} event
     */
    handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            console.log("NO GO for submission");
            event.stopPropagation();

            this.enableValidationMessages();
        } else {
            this.enableValidationMessages();

            console.log("handleSubmit: ");
            console.log("OK for submission");

            // call api
        }
    };

    enableValidationMessages = () => {
        const formUpdatedState = {
            ...this.state.form,
            validated: true,
        };
        this.setState({ form: formUpdatedState });
    };

    render() {
        return (
            <Row>
                <Card className="mb-4 p-3 shadow">
                    <Card.Body>
                        <div>
                            <h5 className="mb-2">
                                Post millennium data to interfaces
                            </h5>
                            <hr />

                            <VitalsForm
                                handleSubmit={this.handleSubmit}
                                handleFormChange={this.handleFormChange}
                                form={this.state.form}
                            />
                        </div>
                    </Card.Body>
                </Card>
            </Row>
        );
    }
}
