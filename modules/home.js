const homePageData = () => {
    const homePage = document.querySelector('#list');
    const data = document.createElement('h1');
    data.textContent = "WELCOME TO MY SKULU";
    const odata = document.createElement('div');
    odata.id = 'book-list';
    odata.classList.add('book-list')
    odata.innerHTML = `
      <div class="container">
        <!--Area of the images-->
        <div class="wrapper">
          <img src="./images/school1.jpeg" />
          <img src="./images/school2.jpg" />
          <img src="./images/school3.jpeg" />
          <img src="./images/school4.jpeg" />
        </div>
      </div>`
    const odata2 = document.createElement('div');
    odata2.className = 'intro-content';
    odata2.innerHTML = `
      <h2>MY SKULU Secondary School</h2>
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