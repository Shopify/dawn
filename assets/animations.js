const SCROLL_TRIGGER_CLASSNAME = "scroll-trigger";
const IN_VIEW_CLASSNAME = "scrolled-into-view";

const OPTIONS = {
    threshold: 0.5,
};

function onIntersection(entries, observer) {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add(IN_VIEW_CLASSNAME);
        observer.unobserve(entry.target);
        }
    }
}

function initializeScrollTrigger() {
    const scrollTriggerElements = Array.from(
        document.getElementsByClassName(SCROLL_TRIGGER_CLASSNAME)
    );

    if (scrollTriggerElements.length === 0) {
        return;
    }

    const observer = new IntersectionObserver(onIntersection, OPTIONS);

    scrollTriggerElements.forEach((element) => observer.observe(element));
}

window.addEventListener("load", initializeScrollTrigger);
