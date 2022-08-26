import myImage from './me.jpg';
import myCV from './My_CV.pdf';
const Index = (props) => {
  return (
    <section id='Index' ref={props.view} className='container mb-2'>
      <div className='container'>
        <div className='image'>
          <img
            className='my_img mt-2'
            src={myImage}
            alt={"shahed's_Image"}
            style={{}}
          />
        </div>
        <div className='brief'>
          <h1 style={{ fontSize: '20px' }}>Shahed Chowdhury Omi</h1>
          <p style={{ fontSize: '16px' }}>
            A passionate software engineer{' '}
            <span style={{ color: 'red' }}> && </span>a constant learner 🚀
          </p>
        </div>
        <div className='cv text-center'>
          <a href={myCV} download={'Curriculum Vitae of Shahed Chowdhury Omi'}>
            <button type='button' className='btn body-btn mb-5 mt-2'>
              Download CV{' '}
              <i style={{ color: '#fff' }} className='fa-solid fa-download'></i>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Index;
