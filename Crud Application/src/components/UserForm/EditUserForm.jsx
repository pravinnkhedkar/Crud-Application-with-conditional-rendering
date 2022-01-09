import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import styles from './UserForm.module.css';

const EditUserForm = (props) => {
  return (
    <div>
      <div className={styles.form}>
        <h1
          style={{
            textAlign: 'center',
            color: 'yellow',
            textShadow: '2px 2px 4px #000000',
          }}
        >
          {' '}
          USER FORM
        </h1>{' '}
        <br />
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label> FirstName </Form.Label>
            <Form.Control
              type="text"
              placeholder="FirstName"
              onChange={props.firstnameHandler}
              value={props.nameValue}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>lastName </Form.Label>
            <Form.Control
              type="text"
              placeholder="lastName"
              onChange={props.lastNameHandler}
              value={props.lastNameValue}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label> Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={props.emailHandler}
              value={props.emailValue}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>image</Form.Label>
            <Form.Control
              type="file"
              placeholder="Image"
              onChange={props.picHandler}
            />
          </Form.Group>
        </Row>
        <Button
          variant="success"
          type="button"
          onClick={() => {
            props.editHandler(props.index);
          }}
        >
          Update
        </Button>{' '}
        &nbsp;
        <Button
          variant="danger"
          type="button"
          onClick={props.editCancelHandler}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};
export default EditUserForm;
