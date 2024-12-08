const form = document.getElementById("login-form");
const errorMsg = document.getElementById("error-message");
const success_msg = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email-input").value.trim();
  const password = document.getElementById("password-input").value.trim();

  if (!email || !password) {
    errorMsg.style.display = "block";
  } else {
    console.log({ email, password });
    errorMsg.style.display = "none";
    browser.storage.local.set({ email, password }).then(
      () => {
        console.log("saved successfully");
        success_msg.style.display = "block";
      },
      () => {
        errorMsg.style.display = "block";
      },
    );
  }
});
