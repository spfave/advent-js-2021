// Intersection observer
const observerOptions = {
  root: null,
  rootMargin: '0px 0px 0% 0px',
  threshold: 1,
};

function handleIntersect(entires) {
  entires.forEach((entry) => {
    if (!entry.isIntersecting) return; // exit for non-intersecting items
    console.log(`entry: `, entry);

    document.querySelector('.selected')?.classList.remove('selected');
    document
      .querySelector(`a[href="#${entry.target.id}"]`)
      .parentElement.classList.add('selected');
  });
}

const observer = new IntersectionObserver(handleIntersect, observerOptions);

const sectionTitles = document.querySelectorAll('h3');
sectionTitles.forEach((title) => {
  observer.observe(title);
});
