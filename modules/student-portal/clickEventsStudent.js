const clickEventsStudent = () => {
//Menu button
const menu = document.querySelector("#menu2");
const menuItem = document.querySelector(".navs");

menu.addEventListener("click", () => {
    menu.style.display = "none";
    menuItem.style.display = "flex";
});

menuItem.addEventListener("click", () => {
    menu.style.display = "block";
    menuItem.style.display = "none";
});

// Results Show/hide
const showBtn = document.querySelector(".main-data");
const moreDta = document.querySelector(".other-data");
const showArrow = document.querySelector(".arrow");
const hideArrow = document.querySelector(".arrow2");

showBtn.addEventListener("click", () => {
    moreDta.classList.toggle('none');
    showArrow.classList.toggle('none');
    hideArrow.classList.toggle('none');

});

const showBtn1 = document.querySelector(".main-data1");
const moreDta1 = document.querySelector(".other-data1");
const showArrow1 = document.querySelector(".arrow1");
const hideArrow1 = document.querySelector(".arrow21");

showBtn1.addEventListener("click", () => {
    moreDta1.classList.toggle('none');
    showArrow1.classList.toggle('none');
    hideArrow1.classList.toggle('none');

});

const showBtn2 = document.querySelector(".main-data2");
const moreDta2 = document.querySelector(".other-data2");
const showArrow2 = document.querySelector(".arrow222");
const hideArrow2 = document.querySelector(".arrow22");

showBtn2.addEventListener("click", () => {
    moreDta2.classList.toggle('none');
    showArrow2.classList.toggle('none');
    hideArrow2.classList.toggle('none');
});

const showBtn3 = document.querySelector(".main-data3");
const moreDta3 = document.querySelector(".other-data3");
const showArrow3 = document.querySelector(".arrow3");
const hideArrow3 = document.querySelector(".arrow23");

showBtn3.addEventListener("click", () => {
    moreDta3.classList.toggle('none');
    showArrow3.classList.toggle('none');
    hideArrow3.classList.toggle('none');

});

const showBtn4 = document.querySelector(".main-data4");
const moreDta4 = document.querySelector(".other-data4");
const showArrow4 = document.querySelector(".arrow4");
const hideArrow4 = document.querySelector(".arrow24");

showBtn4.addEventListener("click", () => {
    moreDta4.classList.toggle('none');
    showArrow4.classList.toggle('none');
    hideArrow4.classList.toggle('none');

});
}

export default clickEventsStudent;