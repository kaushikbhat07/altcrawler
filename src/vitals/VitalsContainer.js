import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import VitalsForm from "./VitalsForm";
import { ObjectFormat } from "../models/ObjectFormat";

/**
 * @author kaushikbhat07
 */

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
        dropdown: [],
    };

    /**
     * Copy observations dropdown values to state
     */
    handleObservationsDropDownChange = (event, selectedOption, identifier) => {
        console.log("handleObservationsDropDownChange");

        var enteredObservation = {
            identifier: identifier,
            // resultValue: resultValue.target.value,
            [selectedOption.name]: event.value,
        };

        // This list will be set to observations state.
        var observationsList = [];

        // Push the first observation directly to the list, since duplicate is not possible in first observation.
        if (this.state.observations.length === 0) {
            observationsList.push(enteredObservation);
        } else {
            let identifierDuplicate = false;

            /**
             * Loop through stored observations in state, to check if the @var enteredObservation is a modified entry or a new one.
             */
            this.state.observations.map((savedObservation) => {
                if (
                    savedObservation.identifier ===
                    enteredObservation.identifier
                ) {
                    // Modified entry - so append the stored observation to the new/modified observation and push it to the list.
                    identifierDuplicate = true;
                    var toBeSavedObservation = Object.assign(
                        savedObservation,
                        enteredObservation
                    );

                    return observationsList.push(toBeSavedObservation);
                } else {
                    // Push the stored observation to the list.
                    return observationsList.push(savedObservation);
                }
            });

            /**
             * At this point, if the @var identifierDuplicate is false, then @var enteredObservation is a new entry, so push it to list.
             */
            if (identifierDuplicate === false)
                observationsList.push(enteredObservation);
        }

        // Assign the state to the list having all observations.
        this.setState({
            observations: observationsList,
        });
    };

    /**
     * Copy observations textbox values to state - Either adds new observation to observations state,
     * or replaces an already existing one.
     * @param resultValue Value of the observation
     * @param identifier Unique number for every observation
     */
    handleObservationsTextBoxChange = (event, identifier) => {
        console.log("handleObservationsTextBoxChange");

        var enteredObservation = {
            identifier: identifier,
            // resultValue: resultValue.target.value,
            [event.target.name]: event.target.value,
        };

        // This list will be set to observations state.
        var observationsList = [];

        // Push the first observation directly to the list, since duplicate is not possible in first observation.
        if (this.state.observations.length === 0) {
            observationsList.push(enteredObservation);
        } else {
            let identifierDuplicate = false;

            /**
             * Loop through stored observations in state, to check if the @var enteredObservation is a modified entry or a new one.
             */
            this.state.observations.map((savedObservation) => {
                if (
                    savedObservation.identifier ===
                    enteredObservation.identifier
                ) {
                    // Modified entry - so discard the stored observation and push modified observation into the list.
                    identifierDuplicate = true;
                    var toBeSavedObservation = Object.assign(
                        savedObservation,
                        enteredObservation
                    );

                    return observationsList.push(toBeSavedObservation);
                } else {
                    // Push the stored observation to the list.
                    return observationsList.push(savedObservation);
                }
            });

            /**
             * At this point, if the @var identifierDuplicate is false, then @var enteredObservation is a new entry, so push it to list.
             */
            if (identifierDuplicate === false)
                observationsList.push(enteredObservation);
        }

        // Assign the state to the list having all observations.
        this.setState({
            observations: observationsList,
        });

        // TODO: Find a optimal way to do this without iterating through all the stored observations.

        // console.log(resultValue.target.value);
        console.log(identifier);
    };

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
                                Post EHR data to interfaces
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
                                handleObservationsDropDownChange={
                                    this.handleObservationsDropDownChange
                                }
                                handleObservationsTextBoxChange={
                                    this.handleObservationsTextBoxChange
                                }
                                form={this.state.form}
                                dropdown={this.state.dropdown}
                                // VitalsDropdown={VitalsDropdown}
                            />
                        </div>
                    </Card.Body>
                </Card>
            </Row>
        );
    }
}
