const homePageData = () => {
    const homePage = document.querySelector('#list');
    const data = document.createElement('h1');
    data.textContent = "WELCOME TO ST. PATRICK'S MAZABUKA";
    const odata = document.createElement('div');
    odata.id = 'book-list';
    odata.classList.add('book-list')
    odata.innerHTML = `
      <div class="container">
        <!--Area of the images-->
        <div class="wrapper">
          <img src="./images/babe.jpg" />
          <img src="./images/enerst.jpeg" />
          <img src="./images/Justine.jpeg" />
          <img src="./images/enerst.jpeg" />
        </div>
      </div>`
    const odata2 = document.createElement('div');
    odata2.className = 'intro-content';
    odata2.innerHTML = `
      <h2>St. Patrick's Secondary School</h2>
      <p>
        Located in the Southern province of Zambia, in a sweet town called
        Mazabuka. This is one of the best schools in the province and the
        country at large
      </p>`
    homePage.append(data);
    homePage.append(odata);
    homePage.append(odata2);
}

export default homePageData;