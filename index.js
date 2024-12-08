(() => {
  setTimeout(() => {
    // Retrieve credentials from storage
    let email, password;
    browser.storage.local.get().then((data) => {
      email = data.email;
      password = data.password;

      // Get input fields
      let username_field, password_field;
      if (window.location.href.includes("learner.vierp.in")) {
        username_field = document.getElementById("input-0");
        password_field = document.getElementById("input-2");
      } else if (window.location.href.includes("classroom.volp.in")) {
        username_field = document.getElementById("input-8");
        password_field = document.getElementById("input-12");
      } else {
        console.error(
          "vierp-auto-login: wrong site if you think there is a but please open a issue",
        );
        return;
      }

      // get the signin button
      const allButtons = document.querySelectorAll("button");
      let sign_in_btn;
      for (let btn of allButtons) {
        if (btn.innerText.trim() === "SIGN IN") sign_in_btn = btn;
      }

      // check for errors
      if (!email || !password || !username_field || !password || !sign_in_btn) {
        console.error("vierp-auto-login: autologin failed please file a bug");
        return;
      }

      // Simulate filling the form and clicking
      if (username_field && password_field && sign_in_btn) {
        username_field.value = email;
        username_field.dispatchEvent(new Event("input", { bubbles: true }));

        password_field.value = password;
        password_field.dispatchEvent(new Event("input", { bubbles: true }));

        sign_in_btn.click();
      }
    });
  }, 500);
})();
