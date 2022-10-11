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
                    <source src=".../videos/sample.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                    Your browser does not support HTML video.
                 </video>
                 <p>Mensuration</p>
                 </div>
                 <div class="video-tabs">
                 <video width="400" controls>
                    <source src="../videos/sample.mp4" type="video/mp4">
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


         <div class="quizes-page none" id="quizes-page"><div class="full">
         <h2>Math Quiz</h2>
         <form class="question" id="num1">
           <h3>Q1. 1 + 2 = ?</h3>
           <p>a. 5</p>
           <p>b. 3</p>
           <p>c. 1</p>
           <p>d. 12</p>
           <input type="text" id="ans1" required />
           <button type="submit">Next</button>
         </form>
         <form class="question none" id="num2">
           <h3>Q2. -1 x -2 = ?</h3>
           <p>a. -2</p>
           <p>b. 2</p>
           <p>c. -3</p>
           <p>d. -3</p>
           <input type="text" id="ans2" required />
           <button type="submit">Next</button>
         </form>
         <form class="question none" id="num3">
           <h3>Q3. 1 / 2 = ?</h3>
           <p>a. No answer</p>
           <p>b. 0.2</p>
           <p>c. 0.5</p>
           <p>d. 1.2</p>
           <input type="text" id="ans3" required />
           <button type="submit">Next</button>
         </form>
         <form class="question none" id="num4">
           <h3>Q4. 1 + 2 x 3 / 1.5 = ?</h3>
           <p>a. 5</p>
           <p>b. 6</p>
           <p>c. 1</p>
           <p>d. 23</p>
           <input type="text" id="ans4" required />
           <button type="submit">Next</button>
         </form>
         <form class="question none" id="num5">
           <h3>Q5. 1 + 2 = ?</h3>
           <p>a. 5</p>
           <p>b. 3</p>
           <p>c. 1</p>
           <p>d. 12</p>
           <input type="text" id="ans5" required />
           <button type="submit">Next</button>
         </form>
         <form class="question none" id="num6">
           <h3>Q6. 1 + 2 = ?</h3>
           <p>a. 5</p>
           <p>b. 3</p>
           <p>c. 1</p>
           <p>d. 12</p>
           <input type="text" id="ans6" required />
           <button type="submit">Next</button>
         </form>
         <form class="question none" id="num7">
           <h3>Q7. 1 + 2 = ?</h3>
           <p>a. 5</p>
           <p>b. 3</p>
           <p>c. 1</p>
           <p>d. 12</p>
           <input type="text" id="ans7" required />
           <button type="submit">Next</button>
         </form>
         <form class="question none" id="num8">
           <h3>Q8. 1 + 2 = ?</h3>
           <p>a. 5</p>
           <p>b. 3</p>
           <p>c. 1</p>
           <p>d. 12</p>
           <input type="text" id="ans8" required />
           <button type="submit">Next</button>
         </form>
         <form class="question none" id="num9">
           <h3>Q9. 1 - 2 = ?</h3>
           <p>a. -5</p>
           <p>b. 3</p>
           <p>c. -1</p>
           <p>d. No answer</p>
           <input type="text" id="ans9" required />
           <button type="submit">Next</button>
         </form>
         <form class="question none" id="num10">
           <h3>Q10. 3 + 2 = ?</h3>
           <p>a. 5</p>
           <p>b. 3</p>
           <p>c. 1</p>
           <p>d. 12</p>
           <input type="text" id="ans10" required />
           <button type="submit">Submit</button>
         </form>
         <div class="final none" id="final">
           <p>You have scored <span id="total"></span>/10</p>
         </div>
       </div></div>


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
