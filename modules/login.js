const loginPageData = () => {
    const loginPage = document.querySelector('#login');
    const pdata1 = document.createElement('div');
    pdata1.innerHTML = `<div class="login-page">
    <form class="student student-form">
      <h4 style="color: green;">Login As Student</h4>
      <input
        type="number"
        id="id"
        placeholder="Enter Your ID number"
        max-length="8"
        required
      />
      <input
        type="password"
        autocomplete="current-password"
        id="pass"
        placeholder="Enter your password"
        required
      />
      <button type="submit" class="btn">Login</button>
    </form>
    <form class="staff staff-form none">
      <h4 style="color: green;">Login As Staff</h4>
      <input
        type="text"
        id="username"
        autocomplete="username"
        placeholder="Enter Your Username"
        max-length="8"
        required
      />
      <input
        type="password"
        id="staff-pass"
        autocomplete="current-password"
        placeholder="Enter your password"
        required
      />
      <button type="submit" class="btn">Login</button>
    </form>
    <br />
    <h4>OR</h4>
    <br />
    <button type="button" class="switch" style="background-color: blue">
      Login As Staff
    </button>
    <button type="button" class="switch2 none" style="background-color: blue">
      Login As Student
    </button>
  </div>
  <div class="modal none">
    <div class="modal-header">
      <h4>Oooops Something went wrong</h4>
      <h3 class="close">X</h3>
    </div>
    <div class="modal-body">
      <p>Wrong password or ID/Username please try again</p>
    </div>
  </div>`

    loginPage.append(pdata1);
}

export default loginPageData;