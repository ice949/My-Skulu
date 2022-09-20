const clickEvents = () => {
    //Login validation
    const closeBtn = document.querySelector(".close");
const modalPage = document.querySelector(".modal");
const studentLog = document.querySelector(".student-form");
const userId = document.querySelector("#id");
const userPass = document.querySelector("#pass");

const staffLog = document.querySelector(".staff-form");
const username = document.querySelector("#username");
const staffPass = document.querySelector("#staff-pass");

studentLog.addEventListener("submit", (e) => {
  e.preventDefault();
  if (userId.value === "20220001" && userPass.value === "Chichiice.") {
    window.open("student.html");
  } else {
    modalPage.classList.remove("none");
  }
});

staffLog.addEventListener("submit", (e) => {
  e.preventDefault();
  if (username.value === "ice-berg" && staffPass.value === "st.patrick") {
    window.open("staff.html");
  } else {
    modalPage.classList.remove("none");
  }
});

closeBtn.addEventListener("click", () => {
  modalPage.classList.add("none");
});

//Menu button
const menu = document.querySelector("#menu");
const menuItem = document.querySelector(".navs");

menu.addEventListener("click", () => {
    menu.style.display = "none";
    menuItem.style.display = "flex";
});

menuItem.addEventListener("click", () => {
    menu.style.display = "block";
    menuItem.style.display = "none";
});
}

export default clickEvents;