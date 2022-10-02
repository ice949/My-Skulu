const libraryPageData2 = () => {
  const libraryPage1 = document.querySelector("#library-page");
  const pdata1 = document.createElement("div");
  pdata1.className = "main-cont";
  pdata1.innerHTML = `
    <h2>Students Library</h2>
      <div class="cats-container">
         <div class="library-menu">
           <div class="name-icon active2" id="videos">
             <p>Video Lessons</p>
             <div class="vicon"><i class="fa-solid fa-photo-film"></i></div>
           </div>
           <div class="name-icon" id="books">
             <p>Books</p>
             <div class="vicon"><i class="fa-solid fa-book"></i></div>
           </div>
           <div class="name-icon" id="assigns">
             <p>Assigns</p>
             <div class="vicon"><i class="fa-solid fa-a"></i></div>
           </div>
           <div class="name-icon" id="p-papers">
             <p>Past papers</p>
             <div class="vicon"><i class="fa-sharp fa-solid fa-scroll"></i></div>
           </div>
           <div class="name-icon" id="quizes">
             <p>Quizzes</p>
             <div class="vicon"><i class="fa-brands fa-quinscape"></i></div>
           </div>
           <div class="name-icon" id="others">
             <p>Practicals</p>
             <div class="vicon"><i class="fa-sharp fa-solid fa-flask"></i></div>
           </div>
         </div>
         <div class="library-data">
         <div class="videos-page" id="videos-page">
           <div class="subject">
             <h3>Mathematics</h3>
            <div class="videos-data">
              <div class="video-tabs">
                 <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                 </video>
                 <p>Mensuration</p>
                 </div>
                 <div class="video-tabs">
                 <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                  </video>
                 <p>Mensuration</p>
                 </div>
                 <div class="video-tabs">
                 <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                  </video>
                 <p>Mensuration</p>
                 </div>
                 <div class="video-tabs">
                 <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                  </video>
                 <p>Mensuration</p>
                 </div>
              </div>
           </div>
           <div class="subject">
             <h3>Adma</h3>
            <div class="videos-data">
              <div class="video-tabs">
                 <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                  </video>
                 <p>Mensuration</p>
                 </div>
                 <div class="video-tabs">
                 <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                  </video>
                 <p>Mensuration</p>
                 </div>
                 <div class="video-tabs">
                 <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                  </video>
                 <p>Mensuration</p>
                 </div>
                 <div class="video-tabs">
                 <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                  </video>
                 <p>Mensuration</p>
                 </div>
              </div>
           </div>
           <div class="subject">
             <h3>English</h3>
            <div class="videos-data">
              <div class="video-tabs">
                 <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                  </video>
                 <p>Mensuration</p>
                 </div>
                 <div class="video-tabs">
                 <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                  </video>
                 <p>Mensuration</p>
                 </div>
                 <div class="video-tabs">
                 <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                  </video>
                 <p>Mensuration</p>
                 </div>
                 <div class="video-tabs">
                 <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                  </video>
                 <p>Mensuration</p>
                 </div>
              </div>
           </div>
           <div class="subject">
             <h3>Physics</h3>
            <div class="videos-data">
              <div class="video-tabs">
                 <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                  </video>
                 <p>Mensuration</p>
                 </div>
                 <div class="video-tabs">
                 <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                  </video>
                 <p>Mensuration</p>
                 </div>
                 <div class="video-tabs">
                 <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                  </video>
                 <p>Mensuration</p>
                 </div>
                 <div class="video-tabs">
                 <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                  </video>
                 <p>Mensuration</p>
                 </div>
              </div>
           </div>
           <div class="subject">
             <h3>Chemistry</h3>
            <div class="videos-data">
              <div class="video-tabs">
                 <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                  </video>
                 <p>Mensuration</p>
                 </div>
                 <div class="video-tabs">
                 <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                  </video>
                 <p>Mensuration</p>
                 </div>
                 <div class="video-tabs">
                 <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                  </video>
                 <p>Mensuration</p>
                 </div>
                 <div class="video-tabs">
                 <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                  </video>
                 <p>Mensuration</p>
                 </div>
              </div>
           </div>
           <div class="subject">
             <h3>Biology</h3>
            <div class="videos-data">
              <div class="video-tabs">
                 <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                  </video>
                 <p>Mensuration</p>
                 </div>
                 <div class="video-tabs">
                 <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                  </video>
                 <p>Mensuration</p>
                 </div>
                 <div class="video-tabs">
                 <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                  </video>
                 <p>Mensuration</p>
                 </div>
                 <div class="video-tabs">
                 <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                    </video>
                 <p>Mensuration</p>
                 </div>
              </div>
           </div>
         </div>


         <div class="books-page none" id="books-page">
            <div class="sub"><h3>Mathematics</h3><div class="arrowd"><i class="fa-solid fa-arrow-right"></i></div></div>
            <div class="sub"><h3>Science</h3><div class="arrowd"><i class="fa-solid fa-arrow-right"></i></div></div>
            <div class="sub"><h3>Biology</h3><div class="arrowd"><i class="fa-solid fa-arrow-right"></i></div></div>
            <div class="sub"><h3>R.E</h3><div class="arrowd"><i class="fa-solid fa-arrow-right"></i></div></div>
            <div class="sub"><h3>C.E</h3><div class="arrowd"><i class="fa-solid fa-arrow-right"></i></div></div>
            <div class="sub"><h3>D&T</h3><div class="arrowd"><i class="fa-solid fa-arrow-right"></i></div></div>
            <div class="sub"><h3>CS</h3><div class="arrowd"><i class="fa-solid fa-arrow-right"></i></div></div>
            <div class="sub"><h3>Commerce</h3><div class="arrowd"><i class="fa-solid fa-arrow-right"></i></div></div>
            <div class="sub"><h3>Accounts</h3><div class="arrowd"><i class="fa-solid fa-arrow-right"></i></div></div>
            <div class="sub"><h3>English</h3><div class="arrowd"><i class="fa-solid fa-arrow-right"></i></div></div>
         </div>


         <div class="quizes-page none" id="quizes-page"><button style="background-color:red;">comming soon</button></div>


         <div class="assigns-page none" id="assigns-page"><button style="background-color:red;">comming soon</button></div>


         <div class="p-papers-page none" id="p-papers-page">
            <div class="pp1" id="ecz">
               <h4>ECZ Past Exam Papers</h4>
               <div class="content1">
               <div class="grade-container">
                 <div class="main-data1">
                    <h2 class="heading">Grade 9 Results</h2>
                    <div class="arrow1"><i class="fa-solid fa-arrow-right"></i></div>
                    <div class="arrow21 none"><i class="fa-solid fa-arrow-up"></i></i></div>
                 </div>
                 <div class="other-data1 none">
                    <a href="../Sample_SSE_report.pdf">Grade Nine Term 1</a>
                    <a href="../Sample_SSE_report.pdf">Grade Nine Term 2</a>
                 </div>
              </div>
              <div class="grade-container">
                <div class="main-data1">
                 <h2 class="heading">Grade 9 Results</h2>
                 <div class="arrow1"><i class="fa-solid fa-arrow-right"></i></div>
                 <div class="arrow21 none"><i class="fa-solid fa-arrow-up"></i></i></div>
               </div>
               <div class="other-data1 none">
                 <a href="../Sample_SSE_report.pdf">Grade Nine Term 1</a>
                 <a href="../Sample_SSE_report.pdf">Grade Nine Term 2</a>
               </div>
             </div>
               </div>
            </div>
            <div class="pp2" id="school">
               <h4>School Past Exam Papers</h4>
               <div class="content2">
                  <div class="grd-8">
                     <h4 id="click-d1">Grade 8 </h4>
                     <div class="pdataa" id="pdata1">
                        <h4>2020</h4>
                        <h5>Mathematics</h5>
                        <a href="#">term 1</a>
                        <a href="#">term 2</a>
                        <a href="#">term 3</a>

                        <h5>English</h5>
                        <a href="#">term 1</a>
                        <a href="#">term 2</a>
                        <a href="#">term 3</a>

                        <h5>Science</h5>
                        <a href="#">term 1</a>
                        <a href="#">term 2</a>
                        <a href="#">term 3</a>

                        <h5>Computer Studies</h5>
                        <a href="#">term 1</a>
                        <a href="#">term 2</a>
                        <a href="#">term 3</a>
                     </div>
                  </div>
                  <div class="grd-8">
                     <h4 id="click-d1">Grade 9 </h4>
                     <div class="pdataa" id="pdata1">
                        <h4>2020</h4>
                        <h5>Mathematics</h5>
                        <a href="#">term 1</a>
                        <a href="#">term 2</a>
                        <a href="#">term 3</a>

                        <h5>English</h5>
                        <a href="#">term 1</a>
                        <a href="#">term 2</a>
                        <a href="#">term 3</a>

                        <h5>Science</h5>
                        <a href="#">term 1</a>
                        <a href="#">term 2</a>
                        <a href="#">term 3</a>

                        <h5>Computer Studies</h5>
                        <a href="#">term 1</a>
                        <a href="#">term 2</a>
                        <a href="#">term 3</a>
                     </div>
                  </div>
                  <div class="grd-8">
                     <h4 id="click-d1">Grade 10</h4>
                     <div class="pdataa" id="pdata1">
                        <h4>2020</h4>
                        <h5>Mathematics</h5>
                        <a href="#">term 1</a>
                        <a href="#">term 2</a>
                        <a href="#">term 3</a>

                        <h5>English</h5>
                        <a href="#">term 1</a>
                        <a href="#">term 2</a>
                        <a href="#">term 3</a>

                        <h5>Science</h5>
                        <a href="#">term 1</a>
                        <a href="#">term 2</a>
                        <a href="#">term 3</a>

                        <h5>Computer Studies</h5>
                        <a href="#">term 1</a>
                        <a href="#">term 2</a>
                        <a href="#">term 3</a>
                     </div>
                  </div>
                  <div class="grd-8">
                     <h4 id="click-d1">Grade 11</h4>
                     <div class="pdataa" id="pdata1">
                        <h4>2020</h4>
                        <h5>Mathematics</h5>
                        <a href="#">term 1</a>
                        <a href="#">term 2</a>
                        <a href="#">term 3</a>

                        <h5>English</h5>
                        <a href="#">term 1</a>
                        <a href="#">term 2</a>
                        <a href="#">term 3</a>

                        <h5>Science</h5>
                        <a href="#">term 1</a>
                        <a href="#">term 2</a>
                        <a href="#">term 3</a>

                        <h5>Computer Studies</h5>
                        <a href="#">term 1</a>
                        <a href="#">term 2</a>
                        <a href="#">term 3</a>
                     </div>
                  </div>
                  <div class="grd-8">
                     <h4 id="click-d1">Grade 12</h4>
                     <div class="pdataa" id="pdata1">
                        <h4>2020</h4>
                        <h5>Mathematics</h5>
                        <a href="#">term 1</a>
                        <a href="#">term 2</a>
                        <a href="#">term 3</a>

                        <h5>English</h5>
                        <a href="#">term 1</a>
                        <a href="#">term 2</a>
                        <a href="#">term 3</a>

                        <h5>Science</h5>
                        <a href="#">term 1</a>
                        <a href="#">term 2</a>
                        <a href="#">term 3</a>

                        <h5>Computer Studies</h5>
                        <a href="#">term 1</a>
                        <a href="#">term 2</a>
                        <a href="#">term 3</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>


         <div class="others-page none" id="others-page"><button style="background-color:red;">comming soon</button></div>



        </div>
      </div>`;
  libraryPage1.append(pdata1);
};

export default libraryPageData2;
