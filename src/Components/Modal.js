const Modal = (props) => {
  return (
    <>
      {/* Btn trigger modal */}
      <button
        type='button'
        id='modalBtn'
        className='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
        style={{ display: 'none' }}
      >
        Launch demo modal
      </button>

      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5
                className='modal-title'
                id='exampleModalLabel'
                style={{ color: '#212121' }}
              >
                Modal title
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div
              className='modal-body p-5 d-flex align-items-center justify-content-center'
              style={{ color: '#212121' }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
