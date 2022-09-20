const headerPageData2 = () => {
    const headerPage = document.querySelector('#header1');
    const pdata1 = document.createElement('nav');
    pdata1.className = 'navbar';
    pdata1.innerHTML = `
    <ul class="navs">
      <li class="close" id="close"><i class="fa-solid fa-xmark"></i></li>
      <li class="results" id="results">Results</li>
      <li class="library" id="library">Library</li>
      <li class="other" id="other">
        <div class="dropdown">
          <p class="dropbtn">Other</p>
          <div class="dropdown-content">
            <a href="#" id="attendance">Attendance</a>
            <a href="#" id="calender">Calender</a>
            <a href="#" id="t-table">Time-Table</a>
            <a href="#" id="bills">Bills</a>
            <a href="#" id="clubs">clubs</a>
          </div>
        </div>
      </li>
    </ul>
           <div class="humburger-container" id="menu2">
    <i class="fa-sharp fa-solid fa-bars"></i>
    </div`
    headerPage.append(pdata1)
}

export default headerPageData2;