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
             <div class="vicon"><i class="fa-solid fa-photo-film"></i></i></div>
           </div>
           <div class="name-icon">
             <p>Video Lessons</p>
             <div class="vicon"><i class="fa-solid fa-photo-film"></i></i></div>
           </div>
           <div class="name-icon">
             <p>Video Lessons</p>
             <div class="vicon"><i class="fa-solid fa-photo-film"></i></i></div>
           </div>
           <div class="name-icon">
             <p>Video Lessons</p>
             <div class="vicon"><i class="fa-solid fa-photo-film"></i></i></div>
           </div>
           <div class="name-icon">
             <p>Video Lessons</p>
             <div class="vicon"><i class="fa-solid fa-photo-film"></i></i></div>
           </div>
           <div class="name-icon">
             <p>Video Lessons</p>
             <div class="vicon"><i class="fa-solid fa-photo-film"></i></i></div>
           </div>
         </div>
         <div class="library-data">
         </div>
      </div>`;
    libraryPage1.append(pdata1)
  };
  
  export default libraryPageData2;
  