const logOutButton = document.querySelector("#log-out");

function logOutHandle() {
  window.localStorage.clear();
  location.reload();
}

logOutButton.addEventListener("click", logOutHandle);
