(() => {
  setTimeout(() => {
    // Retrieve credentials from storage
    let email, password;
    browser.storage.local.get().then((data) => {
      email = data.email;
      password = data.password;

      console.log({ email, password });

      // Get input fields
      const username_field = document.getElementById("input-0");
      const password_field = document.getElementById("input-2");

      let sign_in_btn;
      const allButtons = document.querySelectorAll("button");
      for (let btn of allButtons) {
        if (btn.innerText.trim() === "SIGN IN") sign_in_btn = btn;
      }

      console.log(sign_in_btn);

      // Simulate filling the form and clicking
      if (username_field && password_field && sign_in_btn) {
        username_field.value = email;
        username_field.dispatchEvent(new Event("input", { bubbles: true }));

        password_field.value = password;
        password_field.dispatchEvent(new Event("input", { bubbles: true }));

        // Click the sign-in button
        sign_in_btn.click();
      }
    });
  }, 500);
})();
