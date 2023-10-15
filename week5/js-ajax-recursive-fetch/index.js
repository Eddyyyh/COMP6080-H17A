const ul = document.createElement("ul");
document.body.appendChild(ul);

fetch("http://localhost:3000/users")
  .then((response) => {
    return response.json();
  })
  .then((ids) => {
    for (const id of ids) {
      fetch(`http://localhost:3000/user/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((user) => {
          console.log(user);
        });
    }
    return ids;
  });

const allUsersFetch = new Promise((resolve, reject) => {
  fetch("http://localhost:3000/users")
    .then((response) => {
      return response.json();
    })
    .then((ids) => {
      Promise.all(
        ids.map((userId) => {
          return fetch(`http://localhost:3000/user/${userId}`).then(
            (response) => {
              return response.json();
            }
          );
        })
      ).then((users) => {
        return resolve(users);
      });
    });
});

const renderUsers = (user) => {
  const li = document.createElement("li");
  ul.appendChild(li);
  li.innerText = user.name;
};

allUsersFetch.then((users) => {
  users.forEach((user) => {
    renderUsers(user);
  });
});
