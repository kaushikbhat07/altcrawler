import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import VitalsForm from "./VitalsForm";
import { ObjectFormat } from "../models/ObjectFormat";

export default class VitalsContainer extends Component {
    state = {
        form: {
            validated: false,
        },
        observations: [],
        patientAliases: {
            alias: "",
            assignAuth: null,
            aliasType: "MRN",
            OID: "83.83.83",
        },
        facility: {
            organizationAlias: "85.85.85",
            hospitalAlias: "85.85.85",
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
        // console.log("handleFormChange");
    };

    /**
     * Copy observations values to state
     */
    handleObservationsChange = (event) => {};

    /**
     * Copy patient alias values to state
     */
    handlePatientAliasesChange = (event) => {
        console.log("handlePatientAliasesChange");
        this.setState({
            patientAliases: {
                ...this.state.patientAliases,
                [event.target.name]: event.target.value,
            },
        });
    };

    /**
     * Copy patient alias values to state
     */
    handleFacilityChange = (event) => {
        console.log("handleFacilityChange");
        this.setState({
            facility: {
                ...this.state.facility,
                [event.target.name]: event.target.value,
            },
        });
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

            console.log(JSON.stringify(ObjectFormat));
            // fetch(
            //     "http://win10d-05876:50110/criticaloutcomes-interfaces/rest/observations",
            //     {
            //         method: "POST",
            //         body: JSON.stringify(ObjectFormat),
            //         headers: {
            //             "Content-Type": "application/json",
            //             Accept: "*/*",
            //         },
            //     }
            // )
            //     .then((response) => {
            //         console.log(response.status);
            //         return response.statusText;
            //     })
            //     .then((error) => {
            //         console.error(error);
            //     });
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
                                facility={this.state.facility}
                                handleFacilityChange={this.handleFacilityChange}
                                patientAliases={this.state.patientAliases}
                                handlePatientAliasesChange={
                                    this.handlePatientAliasesChange
                                }
                                form={this.state.form}
                            />
                        </div>
                    </Card.Body>
                </Card>
            </Row>
        );
    }
}
