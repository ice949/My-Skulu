const switchPageStudent = () => {
    const resultsBtn = document.getElementById('results');
    const libraryBtn = document.getElementById('library');
    const otherBtn = document.getElementById('other');
    const resultsPage = document.getElementById('results-page');
    const libraryPage = document.getElementById('library-page');
    const otherPage = document.getElementById('other-page');
  
    // Navigation
  
    // Move Into The BookList Page
    resultsBtn.addEventListener('click', () => {
      resultsPage.classList.remove('none');
      libraryPage.classList.add('none');
      otherPage.classList.add('none');
      resultsBtn.classList.add('active');
      libraryBtn.classList.remove('active');
      otherBtn.classList.remove('active');
    });
  
    // Move Into Add Book Page
    libraryBtn.addEventListener('click', () => {
      resultsPage.classList.add('none');
      libraryPage.classList.remove('none');
      otherPage.classList.add('none');
      libraryBtn.classList.add('active');
      resultsBtn.classList.remove('active');
      otherBtn.classList.remove('active');
    });
  
    // Move Into Contacts Page
    otherBtn.addEventListener('click', () => {
      resultsPage.classList.add('none');
      libraryPage.classList.add('none');
      otherPage.classList.remove('none');
      otherBtn.classList.add('active')
      resultsBtn.classList.remove('active');
      libraryBtn.classList.remove('active');
      console.log("chilu");
    });
  
  };
  
  export default switchPageStudent;