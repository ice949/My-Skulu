const switchLibraryTab = () => {
    const videosBtn = document.getElementById('videos');
    const booksBtn = document.getElementById('books');
    const othersBtn = document.getElementById('others');
    const quizesBtn = document.getElementById('quizes');
    const assignsBtn = document.getElementById('assigns');
    const pPapersBtn = document.getElementById('p-papers');
    const videosPage = document.getElementById('videos-page');
    const booksPage = document.getElementById('books-page');
    const othersPage = document.getElementById('others-page');
    const quizesPage = document.getElementById('quizes-page');
    const assignsPage = document.getElementById('assigns-page');
    const pPapersPage = document.getElementById('p-papers-page');
  
    // Navigation
  
    // Move Into The videos Page
    videosBtn.addEventListener('click', () => {
      videosPage.classList.remove('none');
      booksPage.classList.add('none');
      quizesPage.classList.add('none');
      assignsPage.classList.add('none');
      pPapersPage.classList.add('none');
      othersPage.classList.add('none');
      videosBtn.classList.add('active2');
      booksBtn.classList.remove('active2');
      quizesBtn.classList.remove('active2');
      assignsBtn.classList.remove('active2');
      pPapersBtn.classList.remove('active2');
      othersBtn.classList.remove('active2');
    });
  
    // Move Into books Page
    booksBtn.addEventListener('click', () => {
        videosPage.classList.add('none');
        booksPage.classList.remove('none');
        quizesPage.classList.add('none');
        assignsPage.classList.add('none');
        pPapersPage.classList.add('none');
        othersPage.classList.add('none');
        videosBtn.classList.remove('active2');
        booksBtn.classList.add('active2');
        quizesBtn.classList.remove('active2');
        assignsBtn.classList.remove('active2');
        pPapersBtn.classList.remove('active2');
        othersBtn.classList.remove('active2');
    });
  
    // Move Into quizes Page
    quizesBtn.addEventListener('click', () => {
        videosPage.classList.add('none');
        booksPage.classList.add('none');
        quizesPage.classList.remove('none');
        assignsPage.classList.add('none');
        pPapersPage.classList.add('none');
        othersPage.classList.add('none');
        videosBtn.classList.remove('active2');
        booksBtn.classList.remove('active2');
        quizesBtn.classList.add('active2');
        assignsBtn.classList.remove('active2');
        pPapersBtn.classList.remove('active2');
        othersBtn.classList.remove('active2');
    });

    // Move Into quizes Page
    assignsBtn.addEventListener('click', () => {
        videosPage.classList.add('none');
        booksPage.classList.add('none');
        quizesPage.classList.add('none');
        assignsPage.classList.remove('none');
        pPapersPage.classList.add('none');
        othersPage.classList.add('none');
        videosBtn.classList.remove('active2');
        booksBtn.classList.remove('active2');
        quizesBtn.classList.remove('active2');
        assignsBtn.classList.add('active2');
        pPapersBtn.classList.remove('active2');
        othersBtn.classList.remove('active2');
        console.log("babe");
    });

    // Move Into quizes Page
    pPapersBtn.addEventListener('click', () => {
        videosPage.classList.add('none');
        booksPage.classList.add('none');
        quizesPage.classList.add('none');
        assignsPage.classList.add('none');
        pPapersPage.classList.remove('none');
        othersPage.classList.add('none');
        videosBtn.classList.remove('active2');
        booksBtn.classList.remove('active2');
        quizesBtn.classList.remove('active2');
        assignsBtn.classList.remove('active2');
        pPapersBtn.classList.add('active2');
        othersBtn.classList.remove('active2');
    });

    // Move Into quizes Page
    othersBtn.addEventListener('click', () => {
        videosPage.classList.add('none');
        booksPage.classList.add('none');
        quizesPage.classList.add('none');
        assignsPage.classList.add('none');
        pPapersPage.classList.add('none');
        othersPage.classList.remove('none');
        videosBtn.classList.remove('active2');
        booksBtn.classList.remove('active2');
        quizesBtn.classList.remove('active2');
        assignsBtn.classList.remove('active2');
        pPapersBtn.classList.remove('active2');
        othersBtn.classList.add('active2');
    });
  
  };
  
  export default switchLibraryTab;