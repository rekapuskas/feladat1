const users = [
  {
    id: "zGsF9rXwbg5f7KAoRNfVH-RE",
    name: "John Doe",
    profileUrl: "https://i.pravatar.cc/200",
    profession: "Senior Fullstack Developer",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, magni facilis tenetur dolorem odit esse? Consequuntur accusantium expedita distinctio.",
    photos: 190,
    likes: 2340,
    folowers: 243,
  },
  {
    id: "H_DcHwjj1OrrKojB39iqbxDH",
    name: "Sarah Smith",
    profileUrl: "https://i.pravatar.cc/200",
    profession: "Junior Frontend Developer",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, magni facilis tenetur dolorem odit esse? Consequuntur accusantium expedita distinctio.",
    photos: 10,
    likes: 760,
    folowers: 500,
  },
  {
    id: "ipyGorHVAAZi0SlK9PrzPQ6h",
    name: "Edward Canvay",
    profileUrl: "https://i.pravatar.cc/200",
    profession: "Internet Pirate",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, magni facilis tenetur dolorem odit esse? Consequuntur accusantium expedita distinctio.",
    photos: 0,
    likes: 0,
    folowers: 761,
  },
  {
    id: "IbUEQX9A1Knf2Kku0IJsK4po",
    name: "Robert Parker",
    profileUrl: "https://i.pravatar.cc/200",
    profession: "Senior Java Backend Developer",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, magni facilis tenetur dolorem odit esse? Consequuntur accusantium expedita distinctio.",
    photos: 44,
    likes: 7671,
    folowers: 10000,
  },
];
let container = document.createElement("div");
document.body.appendChild(container);
container.className = "container";

users.forEach(function (user) {
  let card = document.createElement("div");
  card.classList.add("card");

  let img = document.createElement("img");
  img.src = user.profileUrl;
  card.appendChild(img);

  let name = document.createElement("h1");
  name.textContent = user.name;
  card.appendChild(name);

  let profession = document.createElement("p");
  profession.textContent = user.profession;
  card.appendChild(profession);

  let description = document.createElement("p");
  description.textContent = user.description;
  card.appendChild(description);


  let iconsListContainer = document.createElement("div");
  iconsListContainer.classList.add("icon-list-container");

  const photosIconContainer = document.createElement("div");
  photosIconContainer.classList.add("icon-container");

  const photosTitle = document.createElement("h3");
  photosTitle.textContent = "Photos";
  photosIconContainer.append(photosTitle);

  const photoCount = document.createElement("h3");
  photoCount.textContent = user.photos;
  photosIconContainer.append(photoCount);

  iconsListContainer.append(photosIconContainer);

  const likesIconContainer = document.createElement("div");
 likesIconContainer.classList.add("icon-container");

  const likesTitle = document.createElement("h3");
  likesTitle.textContent = "Likes";
  likesIconContainer.append(likesTitle);

  const likesCount = document.createElement("h3");
  likesCount.textContent = user.likes;
  likesIconContainer.append(likesCount);

  iconsListContainer.append(likesIconContainer);

  const followersContainer = document.createElement("div");
  followersContainer.classList.add("icon-container");
 
   const followersTitle = document.createElement("h3");
   followersTitle.textContent = "Followers";
   followersContainer.append(followersTitle);
 
   const followersCount = document.createElement("h3");
   followersCount.textContent = user.folowers;
   followersContainer.append(followersCount);
 
   iconsListContainer.append(followersContainer);

  card.append(iconsListContainer);

  let iconContainer = document.createElement("div");
  iconContainer.classList.add("icon-container");

  let button = document.createElement("button");
  button.textContent = "Follow";
  button.className = "button";
  card.appendChild(button);

  container.appendChild(card);
});

//2. feladat
for(let button of document.getElementsByClassName("button")){
  button.addEventListener("click", function () {
    button.classList.add('disabled');
})
}
