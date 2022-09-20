const libraryPageData2 = () => {
    const libraryPage1 = document.querySelector("#library-page");
    const pdata1 = document.createElement("div");
    pdata1.className = "main-cont";
    pdata1.innerHTML = `
    <h2>Students Library</h2>
      <div class="cats-container">
         <div class="library-menu">
           <div class="name-icon active2">
             <p>Video Lessons</p>
             <div class="vicon"><i class="fa-solid fa-photo-film"></i></div>
           </div>
           <div class="name-icon">
             <p>Books</p>
             <div class="vicon"><i class="fa-solid fa-book"></i></div>
           </div>
           <div class="name-icon">
             <p>Assigns</p>
             <div class="vicon"><i class="fa-solid fa-a"></i></div>
           </div>
           <div class="name-icon">
             <p>Past papers</p>
             <div class="vicon"><i class="fa-sharp fa-solid fa-scroll"></i></div>
           </div>
           <div class="name-icon">
             <p>Quizzes</p>
             <div class="vicon"><i class="fa-brands fa-quinscape"></i></div>
           </div>
           <div class="name-icon">
             <p>Other</p>
             <div class="vicon"><i class="fa-sharp fa-solid fa-flask"></i></div>
           </div>
         </div>
         <div class="library-data">
         </div>
      </div>`;
    libraryPage1.append(pdata1)
  };
  
  export default libraryPageData2;
  