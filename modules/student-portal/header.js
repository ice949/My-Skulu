const headerPageData2 = () => {
    const headerPage = document.querySelector('#header1');
    const pdata1 = document.createElement('nav');
    pdata1.className = 'navbar';
    pdata1.innerHTML = `
    <ul class="navs">
      <li class="close" id="close"><i class="fa-solid fa-xmark"></i></li>
      <li class="results" id="results">Results</li>
      <li class="library" id="library">Library</li>
      <li class="other" id="other">Other</li>
    </ul>
           <div class="humburger-container" id="menu2">
    <i class="fa-sharp fa-solid fa-bars"></i>
    </div`
    headerPage.append(pdata1)
}

export default headerPageData2;