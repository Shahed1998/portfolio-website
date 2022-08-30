const Card = (props) => {
  return (
    <div className='col-lg-4 col-md-6 col-sm-12'>
      {/* style={{ width: '18rem' }} */}
      <div className='card mx-auto shadow'>
        <img
          src={props.image}
          className='card-img-top'
          alt='project img'
          style={{ width: '100%' }}
        />
        <div className='card-body'>
          <h5 className='card-title'>{props.title}</h5>
          {/* <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p> */}
          <a
            href={`${props.website}`}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary'
          >
            View application
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
