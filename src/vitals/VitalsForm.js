import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Select from "react-select";

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];

/**
 *	The text box/form to display when "plus" button is clicked.
 */
function RenderObservationsForm({
    identifier,
    counter,
    handleObservationsDropDownChange,
    dropdown,
    handleObservationsTextBoxChange,
}) {
    console.log("counter: ");
    console.log(counter);
    if (counter === 0) return <></>;

    return (
        <Col md={9} className="mb-3">
            <Row className="w-100">
                <Col md={1}>
                    <span className="badge rounded-pill bg-dark">
                        {identifier}
                    </span>
                </Col>
                <Col md={11}>
                    <Card className="px-4 py-3 w-100">
                        <Form.Group
                            md={12}
                            as={Col}
                            controlId="observationsControl"
                            className="mb-3"
                        >
                            <Form.Label>Select vitals</Form.Label>
                            <Select
                                options={options}
                                name="cki"
                                // classNamePrefix="form-control"
                                // value={dropdown.selectedOption}
                                onChange={(selectedOption) =>
                                    handleObservationsDropDownChange(
                                        selectedOption,
                                        identifier
                                    )
                                }
                                // className="form-control"
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid CKI.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            md={12}
                            as={Col}
                            controlId="validationCustom12"
                            className="mb-3"
                        >
                            <Form.Label>Value</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="resultValue"
                                placeholder="Result Value"
                                onChange={(resultValue) =>
                                    handleObservationsTextBoxChange(
                                        resultValue,
                                        identifier
                                    )
                                }
                                defaultValue={0}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid value to chart.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Card>
                </Col>
            </Row>
        </Col>
    );
}

/**
 * Functional component to accept form values from user
 */
function VitalsForm({
    form,
    handleSubmit,
    handleFormChange,
    facility,
    handleFacilityChange,
    patientAliases,
    handlePatientAliasesChange,
    handleObservationsDropDownChange,
    dropdown,
    handleObservationsTextBoxChange,
}) {
    // observations counter
    const [counter, setCounter] = useState(0);
    // array of observation forms (RenderObservationsForm)
    const [observationsFormList, setObservationsFormList] = useState([]);

    /**
     * Increase/Decrease counter of observations and add observation form to the array.
     *
     * TODO: Iterating 'counter'times each time counter is updated and adding observation form is not optimal - takes O(counter) time.
     * Need to work on implementing just adding/removing 1 element in O(1) time.
     */
    const alterObservations = (counter) => {
        if (counter < 0) return <></>;

        // increase/decrease counter
        setCounter(counter);

        var obs = [];

        for (var i = 0; i < counter; i++) {
            obs.push(
                <RenderObservationsForm
                    key={i}
                    identifier={i + 1}
                    counter={counter}
                    facility={facility}
                    handleFacilityChange={handleFacilityChange}
                    handleObservationsDropDownChange={
                        handleObservationsDropDownChange
                    }
                    dropdown={dropdown}
                    handleObservationsTextBoxChange={
                        handleObservationsTextBoxChange
                    }
                />
            );
        }
        setObservationsFormList(obs);
    };

    useEffect(() => {}, [counter, observationsFormList]);
    return (
        <Form noValidate validated={form.validated} onSubmit={handleSubmit}>
            <Row>
                <div className="mt-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <h6>Patient</h6>
                    <hr />
                    <Row className="mb-3">
                        <Form.Group
                            md={10}
                            as={Col}
                            controlId="validationCustom01"
                        >
                            <Form.Label>MRN / Alias</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="mrn"
                                placeholder="Patient MRN"
                                onChange={handleFormChange}
                                defaultValue={patientAliases.alias}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid MRN.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group
                            md={10}
                            as={Col}
                            controlId="validationCustom02"
                        >
                            <Form.Label>OID</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="OID"
                                placeholder="OID"
                                onChange={handleFormChange}
                                defaultValue={patientAliases.OID}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid OID.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group
                            md={10}
                            as={Col}
                            controlId="validationCustom03"
                        >
                            <Form.Label>Alias Type</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="aliasType"
                                placeholder="Alias Type"
                                onChange={handlePatientAliasesChange}
                                defaultValue={patientAliases.aliasType}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Alias Type.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                </div>
                <div className="mt-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <h6>Facility</h6>
                    <hr />
                    <Row className="mb-3">
                        <Form.Group
                            md={10}
                            as={Col}
                            controlId="validationCustom04"
                        >
                            <Form.Label>Organization Alias</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="organizationAlias"
                                placeholder="Organization Alias"
                                onChange={handleFacilityChange}
                                defaultValue={facility.organizationAlias}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Organization Alias.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group
                            md={10}
                            as={Col}
                            controlId="validationCustom05"
                        >
                            <Form.Label>Hospital Alias</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="hospitalAlias"
                                placeholder="Hospital Alias"
                                onChange={handleFacilityChange}
                                defaultValue={facility.hospitalAlias}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Hospital Alias.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                </div>
                <div className="mt-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <h6>Observations</h6>
                    <hr />
                    <Row className="mb-3">
                        {observationsFormList}
                        <Col md={3}>
                            <div className="mt-3 pt-2">
                                <Button
                                    variant="success"
                                    className="rounded-pill me-2"
                                    onClick={() =>
                                        alterObservations(counter + 1)
                                    }
                                >
                                    <i className="fs-5 bi bi-plus-lg"></i>
                                </Button>
                                <Button
                                    variant="danger"
                                    className="rounded-pill"
                                    onClick={() =>
                                        alterObservations(counter - 1)
                                    }
                                >
                                    <i className="fs-5 bi bi-dash-lg"></i>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Row>
            <Button type="submit" variant="primary">
                Post
            </Button>
        </Form>
    );
}

export default VitalsForm;
