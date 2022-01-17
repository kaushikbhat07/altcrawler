import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const VitalsForm = ({ form, handleSubmit, handleFormChange }) => (
    <Form noValidate validated={form.validated} onSubmit={handleSubmit}>
        <Row>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <h6>Patient</h6>
                <hr />
                <Row className="mb-3">
                    <Form.Group md={10} as={Col} controlId="validationCustom01">
                        <Form.Label>MRN</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="mrn"
                            placeholder="Patient MRN"
                            onChange={handleFormChange}
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
                    <Form.Group md={10} as={Col} controlId="validationCustom02">
                        <Form.Label>OID</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="OID"
                            placeholder="OID"
                            onChange={handleFormChange}
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
                    <Form.Group md={10} as={Col} controlId="validationCustom03">
                        <Form.Label>Alias Type</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="aliasType"
                            placeholder="Alias Type"
                            onChange={handleFormChange}
                            defaultValue="MRN"
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
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <h6>Facility</h6>
                <hr />
                <Row className="mb-3">
                    <Form.Group md={10} as={Col} controlId="validationCustom04">
                        <Form.Label>Organization Alias</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="organizationAlias"
                            placeholder="Organization Alias"
                            onChange={handleFormChange}
                            defaultValue="85.85.85"
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
                    <Form.Group md={10} as={Col} controlId="validationCustom05">
                        <Form.Label>Hospital Alias</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="hospitalAlias"
                            placeholder="Hospital Alias"
                            onChange={handleFormChange}
                            defaultValue="85.85.85"
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
        </Row>
        <Button type="submit" variant="success">
            Post
        </Button>
    </Form>
);

export default VitalsForm;
