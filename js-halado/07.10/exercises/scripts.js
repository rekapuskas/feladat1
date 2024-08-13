fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    console.log(users);

    const usersContainer = document.createElement("div");
    usersContainer.id = 'users-container';
    document.body.append(usersContainer);

    const list = document.createElement('ul');

    users.forEach((user) => {
        list.insertAdjacentHTML('beforeend', `<li>${user.name}</li>`);
    }) 
        
    usersContainer.append(list);
  });
