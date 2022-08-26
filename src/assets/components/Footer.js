const Footer = () => {
  const reverse = () => {
    const footName = document.querySelector('.foot');
    const name = footName.textContent;
    let reversName = '';
    for (let i = name.length - 1; i >= 0; i--) {
      reversName += name[i];
    }
    footName.textContent = reversName;
  };

  return (
    <footer className='navbar-light bg-light p-2'>
      <div className='inner text-center'>
        <h1 style={{ fontSize: '20px' }}>
          Designed and developed by
          <br />
          <span
            className='foot'
            style={{ color: 'red' }}
            onMouseOver={reverse}
            onMouseLeave={reverse}
          >
            Shahed Chowdhury Omi
          </span>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
