document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.querySelector('[name="username"]').value;
  const password = document.querySelector('[name="password"]').value;
  const recaptchaToken = grecaptcha.getResponse();

  if (!recaptchaToken) {
    alert("Mohon selesaikan reCAPTCHA");
    return;
  }

  const response = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password, recaptchaToken }),
  });

  const data = await response.json();

  if (data.success) {
    alert(data.message);
  } else {
    alert(data.message);
  }
});
