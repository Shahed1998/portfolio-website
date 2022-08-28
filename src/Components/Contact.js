import me from '../assets/Images/me.jpg';
const Contact = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12 col-lg-6'>
          <img className='my-img' src={me} alt={'Shahed'} />
        </div>

        <div className='col-sm-12 col-lg-6'>
          <div
            className='container d-flex align-items-center justify-content-center'
            style={{ minHeight: '90vh' }}
          >
            <div className='row'>
              <div className='col-12'>
                <h1 style={{ fontSize: '24px' }}>Contact me</h1>
              </div>
              <div className='col-12'>
                <form action='' method='post'>
                  <input
                    type='text'
                    placeholder='Full name'
                    className='w-100 p-2 mb-3'
                    name='full-name'
                  />
                  <input
                    type='text'
                    placeholder='Email'
                    className='w-100 p-2 mb-3'
                    name='email'
                  />
                  <textarea
                    name='text'
                    id=''
                    cols='30'
                    rows='10'
                    className='w-100 mb-3 p-2'
                    placeholder='Text me, I will get back to you as soon as possible.'
                    style={{ resize: 'none' }}
                  ></textarea>
                  <button
                    className='btn btn-primary w-100 p-3'
                    style={{
                      backgroundColor: '#FF4A4A',
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
