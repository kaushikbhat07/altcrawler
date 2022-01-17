import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function RenderObservationsForm({ counter, facility, handleFacilityChange }) {
    console.log(counter);
    if (counter === 0) return <></>;

    return (
        <Col md={8}>
            <Form.Group md={12} as={Col} controlId="observationsControl">
                <Form.Label>Observations</Form.Label>
                <Form.Control
                    required
                    type="text"
                    name="organizationAlias"
                    placeholder="Organization Alias"
                    onChange={handleFacilityChange}
                    defaultValue={facility.organizationAlias}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Please provide a valid Organization Alias.
                </Form.Control.Feedback>
            </Form.Group>
        </Col>
    );
}

function VitalsForm({
    form,
    handleSubmit,
    handleFormChange,
    facility,
    handleFacilityChange,
    patientAliases,
    handlePatientAliasesChange,
}) {
    const [counter, setCounter] = useState(0);
    const [obs, setObs] = useState([]);

    const alterObservations = (counter) => {
        if (counter < 0) return <></>;

        setCounter(counter);
        var obs = [];
        for (var i = 0; i < counter; i++) {
            obs.push(
                <RenderObservationsForm
                    key={i}
                    counter={counter}
                    facility={facility}
                    handleFacilityChange={handleFacilityChange}
                />
            );
        }
        setObs(obs);
    };

    useEffect(() => {}, [counter, obs]);
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
                            <Form.Label>MRN</Form.Label>
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
                        {obs}
                        <Col md={4}>
                            <div className="mt-3 pt-2">
                                <Button
                                    variant="primary"
                                    className="rounded-pill me-2"
                                    onClick={() =>
                                        alterObservations(counter + 1)
                                    }
                                >
                                    <i className="fs-5 bi bi-plus-lg"></i>
                                </Button>
                                <Button
                                    variant="primary"
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
            <Button type="submit" variant="success">
                Post
            </Button>
        </Form>
    );
}

export default VitalsForm;
