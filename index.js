var submit_txt;
document.querySelectorAll(".second")[0].style.display = "none";
for (let index = 0; index < 5; index++) {
    document.querySelectorAll(".btn")[index].addEventListener("click", function() {
        var innerhtm = document.querySelectorAll(".btn")[index];
        innerhtm.classList.add("orange");
        var iin = innerhtm.innerHTML;
        console.log(iin);
        submit_txt = iin;

    })
}
document.querySelectorAll(".btn-submit")[0].addEventListener("click", function() {
    document.querySelectorAll(".second")[0].style.display = "block";
    document.querySelectorAll(".main-pg")[0].style.display = "none";
    var c = document.querySelectorAll(".second h1 span")[0];
    c.innerHTML = submit_txt;
    var cc = document.querySelectorAll(".second h1")[0];
    cc.classList.add('reward');
});