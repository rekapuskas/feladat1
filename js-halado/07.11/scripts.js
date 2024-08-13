fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const usersContainer = document.getElementById("users-container");
    usersContainer.innerHTML = "";

    users.forEach((user) => {
      usersContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="user-card">
                    <img src="https://thispersondoesnotexist.com/" />
                    <h3 class="user-name">${user.name}</h3>
                    <h5 class="user-email">${user.email}</h5>
                    <button class="posts-btn" data-user-id="${user.id}" onclick="openModal(${user.id})">Posts</button>
                </div>`
      );
    });

    // const postBtns = document.querySelectorAll(".posts-btn");

    // postBtns.forEach((btn) => {
    //     // When the user clicks on the button, open the modal
    //     btn.onclick = function () {
    //         openModal(btn.dataset.userId);
    //     };
    // });
  });

function openModal(userId) {
  const modal = document.getElementById("myModal");
  const modalContentBody = document.getElementById("modal-content-body");
  modalContentBody.innerHTML = "<p>Loading...</p>";
  modal.style.display = "block";

  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => response.json())
    .then((posts) => {
      modalContentBody.innerHTML = "";
      console.log(posts);
      posts.forEach((post) => {
        let shortPost = '';
        if (post.body.length > 25) {
          shortPost = post.body.substring(0, 25) + "...";
        } else{
          shortPost += post.body;
        }
        modalContentBody.insertAdjacentHTML(
          "beforeend",
          `
                <div>
                    <h3 class = 'title'">${post.title}</h3>
                    <p>${shortPost}</p>
                </div>
                `
        );
        const titles = document.querySelectorAll(".title");
      console.log(titles);
      titles.forEach((title) => {
        index = title.dataset.index;
        console.log(index);
        post.addEventListener("click", (event) => {
          console.log(event.target.userIdid);
          modalContentBody.innerHTML = "";
          const wantedPost = event.target.nextElementSibling;
          modalContentBody.insertAdjacentHTML(
            "beforeend",
            `
                    <div>
                        <h3 class = 'title'">${event.target.innerHTML}</h3>
                        <p>${wantedPost.innerHTML}</p>
                    </div>
                    `
          );
        });
      });
      });
      
    });
}

const closeBtn = document.getElementsByClassName("close")[0];

closeBtn.onclick = function () {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
};

closeBtn.onclick = function () {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
};
window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
