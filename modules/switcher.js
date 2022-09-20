const switchPage = () => {
  const bookListBtn = document.getElementById('list-btn');
  const addBookBtn = document.getElementById('about-btn');
  const contactBtn = document.getElementById('contacts-btn');
  const bookListPage = document.getElementById('list');
  const addBookPage = document.getElementById('add-books');
  const contactsPage = document.getElementById('login');
  const switchbtn = document.querySelector('.switch');
  const switchbtn2 = document.querySelector('.switch2');
  const stlogin = document.querySelector('.student');
  const stflogin = document.querySelector('.staff');

  // Navigation

  // Move Into The BookList Page
  bookListBtn.addEventListener('click', () => {
    bookListPage.classList.remove('none');
    addBookPage.classList.add('none');
    contactsPage.classList.add('none');
    bookListBtn.classList.add('active');
    addBookBtn.classList.remove('active');
    contactBtn.classList.remove('active');
  });

  // Move Into Add Book Page
  addBookBtn.addEventListener('click', () => {
    bookListPage.classList.add('none');
    addBookPage.classList.remove('none');
    contactsPage.classList.add('none');
    addBookBtn.classList.add('active');
    bookListBtn.classList.remove('active');
    contactBtn.classList.remove('active');
  });

  // Move Into Contacts Page
  contactBtn.addEventListener('click', () => {
    bookListPage.classList.add('none');
    addBookPage.classList.add('none');
    contactsPage.classList.remove('none');
    contactBtn.classList.add('active')
    bookListBtn.classList.remove('active');
    addBookBtn.classList.remove('active');
  });

  //Move Into Staff Login Page
  switchbtn.addEventListener('click', () => {
    stlogin.classList.add('none');
    stflogin.classList.remove('none');
    switchbtn.classList.add('none');
    switchbtn2.classList.remove('none');
  })

  switchbtn2.addEventListener('click', () => {
    stlogin.classList.remove('none');
    stflogin.classList.add('none');
    switchbtn.classList.remove('none');
    switchbtn2.classList.add('none');
  })
};

export default switchPage;