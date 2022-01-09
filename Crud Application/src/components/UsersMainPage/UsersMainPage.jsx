import React, { useEffect, useState } from 'react';
import {
  getUsers,
  createUser,
  removeUser,
  updateUser,
} from '../../services/Users';
import UserData from '../UserData/UserData';
import CreateUserForm from '../UserForm/CreateUserForm';
import EditUserForm from '../UserForm/EditUserForm';
import { Navbar, Container, Button } from 'react-bootstrap';
import styles from './UsersMainPage.module.css';
import { hocWrap } from './../../hoc/hocWrap';

const UserMainPage = () => {
  const [user, setUser] = useState([]);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(false);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    getUsers().then((data) => {
      setUser(data);
      console.log(data);
    });
  }, []);

  const getCreateHandler = () => {
    const userData = { first_name, email, last_name, avatar };
    if (first_name.trim() && last_name.trim() && email.trim()) {
      createUser(userData)
        .then((data) => {
          const userList = [...user];
          userList.push(data);
          setUser(userList);
          console.log(data.avatar);
        })
        .catch((error) => {
          console.log('error is here');
        });
      setCreate(false);
      setFirstName('');
      setLastName('');
      setEmail('');
    } else {
      setFirstName('');
      setLastName('');
      setEmail('');
    }
  };

  const getCancelHandler = () => {
    setCreate(false);
  };

  const userDeleteHandler = (index) => {
    const users = user[index];
    removeUser(users.id).then((isDelete) => {
      if (isDelete) {
        const userList = [...user];
        userList.splice(index, 1);
        setUser(userList);
      }
    });
  };

  const navigationHandler = () => {
    setCreate(true);
  };

  const userEditHandler = (itemIndex) => {
    setEdit(true);
    setIndex(itemIndex);
  };
  console.log(index);

  const getEditHandler = (index) => {
    const id = user[index].id;
    const userData = { first_name, email, last_name, avatar, id };

    updateUser(userData).then((resp) => {
      const update = [...user];
      update[index] = resp;
      setUser(update);
    });
    setEdit(false);
  };

  const getEditCancelHandler = () => {
    setEdit(false);
  };

  return (
    <>
      <div class="Container">
        {create && (
          <CreateUserForm
            nameValue={first_name}
            lastNameValue={last_name}
            emailValue={email}
            picValue={avatar}
            firstnameHandler={(e) => {
              setFirstName(e.target.value);
            }}
            lastNameHandler={(e) => {
              setLastName(e.target.value);
            }}
            emailHandler={(e) => {
              setEmail(e.target.value);
            }}
            picHandler={(e) => {
              setAvatar(e.target.files[0]);
            }}
            createHandler={getCreateHandler}
            cancelHandler={getCancelHandler}
          />
        )}{' '}
        <br />
        {edit && (
          <EditUserForm
            nameValue={first_name}
            lastNameValue={last_name}
            emailValue={email}
            picValue={avatar}
            firstnameHandler={(e) => {
              setFirstName(e.target.value);
            }}
            lastNameHandler={(e) => {
              setLastName(e.target.value);
            }}
            emailHandler={(e) => {
              setEmail(e.target.value);
            }}
            picHandler={(e) => {
              setAvatar(e.target.files[0]);
            }}
            editHandler={getEditHandler}
            editCancelHandler={getEditCancelHandler}
            index={index}
          />
        )}
        {!create && !edit && (
          <>
            <div>
              <Navbar className={styles.navbar}>
                <Container>
                  <Navbar.Brand className={styles.dashboard}>
                    USERS DASHBOARD
                  </Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                      <Button
                        variant="success"
                        type="button"
                        onClick={navigationHandler}
                      >
                        create user
                      </Button>
                    </Navbar.Text>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
            <hr /> <br />
            <UserData
              list={user}
              onDeleteHandler={userDeleteHandler}
              onEditHandler={userEditHandler}
            />
          </>
        )}
      </div>
    </>
  );
};
export default hocWrap(UserMainPage, 'darkblue');
