import { useEffect, useState } from 'react';

const Theme = () => {
  const [theme, setTheme] = useState({
    day: { color: '#fefbf6' },
    night: { color: '#FFF38C' },
  });
  useEffect(() => {
    document.querySelector('.sun').addEventListener('click', () => {
      document.querySelector('#whole-body').style.backgroundColor = '#fefbf6';
      document.querySelector('#whole-body').style.color = '#212121';
      setTheme({
        day: { color: '#FFF38C' },
        night: { color: '#fefbf6' },
      });
    });

    document.querySelector('.moon').addEventListener('click', () => {
      document.querySelector('#whole-body').style.backgroundColor = '#212121';
      document.querySelector('#whole-body').style.color = '#fefbf6';
      setTheme({
        day: { color: '#fefbf6' },
        night: { color: '#FFF38C' },
      });
    });
  }, []);

  return (
    <>
      <div
        className='sun d-inline-block py-2 px-3'
        style={{ border: '1px solid #fefbf6' }}
      >
        <i className='fa-solid fa-sun' style={theme.day}></i>
      </div>
      <div
        className='moon d-inline-block py-2 px-3'
        style={{ border: '1px solid #fefbf6' }}
      >
        <i className='fa-solid fa-moon' style={theme.night}></i>
      </div>
    </>
  );
};

export default Theme;
