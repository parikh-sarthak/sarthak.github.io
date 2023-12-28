document.addEventListener("DOMContentLoaded", function () {
    animateSkillBars();
});

function animateSkillBars() {
    const skillBars = document.querySelectorAll(".skill-bar");
    skillBars.forEach((bar) => {
        const level = bar.dataset.level;
        bar.style.width = `${level}%`;
    });
}
