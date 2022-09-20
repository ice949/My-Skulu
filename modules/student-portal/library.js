const libraryPageData2 = () => {
    const libraryPage1 = document.querySelector("#library-page");
    const pdata1 = document.createElement("div");
    pdata1.className = "main-cont";
    pdata1.innerHTML = `
    <h2>Students Library</h2>
      <div class="cats-container">
         
      </div>`;
    libraryPage1.append(pdata1)
  };
  
  export default libraryPageData2;
  