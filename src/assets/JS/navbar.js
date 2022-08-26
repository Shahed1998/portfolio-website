const nav = (field) => {
  const navLinks = document.querySelectorAll('.nav-link');

  //   Set existing inactive
  navLinks.forEach((link) => {
    if (link.classList.contains('active')) {
      link.classList.remove('active');
    }
  });

  document.querySelector('#' + field).classList.add('active');
};
export default nav;
