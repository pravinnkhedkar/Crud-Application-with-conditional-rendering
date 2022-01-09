import React from 'react';
import { Table, Button } from 'react-bootstrap';

const UserData = (props) => {
  const users = props.list.map((item, index) => {
    return (
      <tr key={index}>
        <th>{index + 1}</th>
        <th>{item.id}</th>
        <td>{item.first_name}</td>
        <td>{item.last_name}</td>
        <td>{item.email}</td>
        <td>
          <img src={item.avatar} alt="user-image" />
        </td>

        <td>
          <Button
            variant="success"
            type="button"
            onClick={() => {
              props.onEditHandler(index);
            }}
          >
            {' '}
            Edit{' '}
          </Button>{' '}
          &nbsp;
          <Button
            variant="danger"
            type="button"
            onClick={() => {
              props.onDeleteHandler(index);
            }}
          >
            {' '}
            Delete
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <Table striped bordered hover variant="success">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Emp ID</th>
            <th>Name</th>
            <th>Last-Name</th>
            <th>E-mail</th>
            <th>image</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>{users}</tbody>
      </Table>
    </div>
  );
};

export default UserData;
