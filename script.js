// Bring in the toggle buttons (queryselectorall)
const toggles = document.querySelectorAll('.faq-toggle');

// Loop through nodelist with foreach
// Add click event with addeventlistener
// Toggle the active class on the parent node with .parentNode & classList.toggle()
toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});
