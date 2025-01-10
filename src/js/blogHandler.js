document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.getElementById("searchIcon");
  searchIcon.addEventListener("click", () => {
    alert(" feature Coming soon!!");
  });

  const newPost = document.getElementById("new-post");
  newPost.addEventListener("click", () => {
    alert("permission is required to post blog");
  });
});
