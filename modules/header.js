const headerPageData = () => {
    const headerPage = document.querySelector('#header');
    const pdata1 = document.createElement('nav');
    pdata1.className = 'navbar';
    pdata1.innerHTML = `<div class="logo" id="logo"><img src="./images1/st.p.jpeg" /></div>
    <ul class="navs">
      <li class="list-btn active" id="list-btn">HOME</li>
      <li class="add-book-btn" id="about-btn">
        ABOUT
      </li>
      <li class="contacts-btn" id="contacts-btn">LOGIN</li>
    </ul>
           <div class="humburger-container" id="menu">
    <i class="fa-sharp fa-solid fa-bars"></i>
    </div`
    headerPage.append(pdata1)
}

export default headerPageData;