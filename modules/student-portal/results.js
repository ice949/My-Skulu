const resultsPageData2 = () => {
  const resultsPage1 = document.querySelector("#results-page");
  const pdata1 = document.createElement("div");
  pdata1.className = "main-cont";
  pdata1.innerHTML = `
  <h2>My Main Results</h2>
    <div class="grade-container">
       <div class="main-data">
          <h2 class="heading">Grade 8 Results</h2>
          <div class="arrow none"><i class="fa-solid fa-arrow-right"></i></div>
          <div class="arrow2"><i class="fa-solid fa-arrow-up"></i></i></div>
       </div>
       <div class="other-data">
          <a href="../Sample_SSE_report.pdf">Grade Eight Term 1</a>
          <a href="../Sample_SSE_report.pdf">Grade Eight Term 2</a>
          <a href="../Sample_SSE_report.pdf">Grade Eight Term 3</a>
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
    <div class="grade-container">
       <div class="main-data2">
          <h2 class="heading">Grade 10 Results</h2>
          <div class="arrow222"><i class="fa-solid fa-arrow-right"></i></div>
          <div class="arrow22 none"><i class="fa-solid fa-arrow-up"></i></i></div>
       </div>
       <div class="other-data2 none">
          <a href="#">Grade Ten Term 1</a>
          <a href="#">Grade Ten Term 2</a>
          <a href="#">Grade Ten Term 3</a>
       </div>
    </div>
    <div class="grade-container">
       <div class="main-data3">
          <h2 class="heading">Grade 11 Results</h2>
          <div class="arrow3"><i class="fa-solid fa-arrow-right"></i></div>
          <div class="arrow23 none"><i class="fa-solid fa-arrow-up"></i></i></div>
       </div>
       <div class="other-data3 none">
          <a href="../Sample_SSE_report.pdf">Grade Eleven Term 1</a>
          <a href="../Sample_SSE_report.pdf">Grade Eleven Term 2</a>
          <a href="../Sample_SSE_report.pdf">Grade Eleven Term 3</a>
       </div>
    </div>
    <div class="grade-container">
       <div class="main-data4">
          <h2 class="heading">Grade 12 Results</h2>
          <div class="arrow4"><i class="fa-solid fa-arrow-right"></i></div>
          <div class="arrow24 none"><i class="fa-solid fa-arrow-up"></i></i></div>
       </div>
       <div class="other-data4 none">
          <a href="../Sample_SSE_report.pdf">Grade Twelve Term 1</a>
          <a href="../Sample_SSE_report.pdf">Grade Twelve Term 2</a>
       </div>
    </div>`;
  resultsPage1.append(pdata1)
};

export default resultsPageData2;
