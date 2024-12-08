const form = document.getElementById("login-form");
const errorMsg = document.getElementById("error-message");
console.log("vimvimv");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email-input").value.trim();
  const password = document.getElementById("password-input").value.trim();

  if (!email || !password) {
    errorMsg.style.display = "block";
  } else {
    console.log("in", { email, password });
    console.log(browser)
    errorMsg.style.display = "none";
    browser.storage.local.set({ email, password }).then(
      () => {
        alert(`saved: ${email}, ${password}`);
        console.log("saved successfully")
      },
      () => {
        alert("something went wrong");
      },
    );
  }
});
