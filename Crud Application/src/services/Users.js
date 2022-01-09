export const getUsers = () => {
  return fetch(`https://reqres.in/api/users?page=1`)
    .then((res) => res.json())
    .then((response) => response.data);
};

export const removeUser = (id) => {
  const config = {
    method: 'delete',
  };
  return fetch(`https://reqres.in/api/users/${id}`, config).then(
    (res) => res.status === 204
  );
};

export const createUser = (user) => {
  return fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(user),
  }).then((res) => (res.json() ));
};

export const updateUser = (user) => {
  return fetch(`https://reqres.in/api/users`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(user),
  }).then((res) => (res.status === 200 ? res.json() : new Error()));
};
