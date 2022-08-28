class ContactPage {
  constructor(form, emailjs) {
    this.form = form;
    this.emailjs = emailjs;
  }
  //   Modal
  modalPopUp = (heading, text) => {
    document.querySelector('.modal-title').textContent = heading;
    document.querySelector('.modal-body').textContent = text;
    document.querySelector('#modalBtn').click();
    this.form.current.reset();
  };

  sendEmail = (e) => {
    e.preventDefault();
    const name = this.form.current[0].value;
    const email = this.form.current[1].value;
    const text = this.form.current[2].value;
    if (!name || !email || !text) {
      this.modalPopUp('Error', 'Fill up all the input fields');
    } else {
      this.emailjs
        .sendForm(
          'service_8p8nuph',
          'template_xfe0s69',
          this.form.current,
          'JdaDR-5ASOb8koqbp'
        )
        .then(
          (result) => {
            this.modalPopUp('Success', 'Email sent successfully');
          },
          (error) => {
            this.modalPopUp('Error', 'Unable to send email');
          }
        );
    }
  };
}

export default ContactPage;
