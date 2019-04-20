const username = document.getElementById('username');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const confPass = document.getElementById('password');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  console.log(1111111111);
  const USERNAME = username.value.trim();
  const EMAIL = email.value.trim();
  const PASSWORD = pass.value;
  const CONFPASS = confPass.value;

  if (USERNAME && EMAIL && PASSWORD === CONFPASS) {
    const userInfo = {
      username: USERNAME,
      email: EMAIL,
      password: PASSWORD,
    };

    fetch('/signup', {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.json()).then(data => console.log(data));
  }
});
