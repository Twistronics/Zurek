let timeline1 = document.querySelector("#timeline-1");
let items = timeline1.querySelectorAll(".timeline-item");

items[0].classList.add("timeline-item--active");
timeline1.style.backgroundImage = `url(${items[0].querySelector(".timeline__img").getAttribute("src")})`;

document.addEventListener('scroll',() => {
    let max, min, height;
    let pos = document.body.scrollTop;
    items.forEach((i) => {
        min = i.getBoundingClientRect().top + document.body.scrollTop;
        height = parseFloat(getComputedStyle(i, null).height.replace("px", ""));
        max = height + (i.getBoundingClientRect().top + document.body.scrollTop);
        if (i == items[items.length - 2] && pos > min + height / 2) {
            items.forEach(e => e.classList.remove("timeline-item--active"));
            timeline1.style.backgroundImage = `url(${items[items.length - 1].querySelector(".timeline__img").getAttribute("src")})`;
            document.body.style.setProperty("--bg-color", items[items.length - 1].getAttribute("data-color"));
            items[items.length - 1].classList.add("timeline-item--active");
        } else if (pos <= max - 40 && pos >= min) {
            timeline1.style.backgroundImage = `url(${i.querySelector(".timeline__img").getAttribute("src")})`;
            document.body.style.setProperty("--bg-color", i.getAttribute("data-color"));
            items.forEach(e => e.classList.remove("timeline-item--active"));
            i.classList.add("timeline-item--active");
        }
    });
});


let nowTimeDom = document.getElementById("nowTime");
setInterval(() => {
    nowTimeDom.innerHTML = new Date().toLocaleString();
}, 1000);
