const homePageData = () => {
    const homePage = document.querySelector('#list');
    const data = document.createElement('h1');
    data.textContent = "WELCOME TO ST. PATRICKS";
    const odata = document.createElement('div');
    odata.id = 'book-list';
    odata.classList.add('book-list')
    odata.innerHTML = `
      <div class="container">
        <!--Area of the images-->
        <div class="wrapper">
          <img src="./images1/st3.jpeg" />
          <img src="./images1/st10.jpeg" />
          <img src="./images1/st7.jpeg" />
          <img src="./images1/st8.jpeg" />
        </div>
      </div>`
    const odata2 = document.createElement('div');
    odata2.className = 'intro-content';
    odata2.innerHTML = `
      <h2>MY SKULU Secondary School</h2>
      <p>
        Located in the Southern province of Zambia, in a sweet town called
        Mazabuka. This is one of the best schools in the province and the
        country at large with over 1000 students and more than 50 staff. It is definitely the best place every student can be come try us
      </p>
      <h3>Announcements</h3>
      <div class="g-announcements">
      </div>
      <h3>Word from School Manager</h3>
      <iframe width="260" height="215" src="https://www.youtube.com/embed/Cs6DoA2Lpsc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      console.log(homePage);
    homePage.append(data);
    homePage.append(odata);
    homePage.append(odata2);
}

export default homePageData;