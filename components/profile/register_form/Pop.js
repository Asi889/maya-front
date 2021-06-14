import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';

const Pop = (props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const wrapper = document.querySelector('#__next');
      wrapper.style.filter = 'blur(2px)';
    } else {
      const wrapper = document.querySelector('#__next');
      wrapper.style.filter = 'blur(0px)';
    }
  }, [open]);

  const { termsText } = props;

  return (
    <Popup
      onClose={() => {
        setOpen(!open);
      }}
      trigger={
        <button type="button" className="button">
          <u
            onKeyDown={() => {
              setOpen(!open);
            }}
            onClick={() => {
              setOpen(!open);
            }}
            role="button"
            tabIndex={0}
          >
            תנאי התקנון
          </u>
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal bg-white text-xl leading-5 text-grey-active overflow-hidden rounded-lg    max-h-96">
          <button
            type="button"
            className="close"
            onClick={() => {
              close();
            }}
          >
            x
          </button>
          <div className="header font-black text-3xl leading-8 text-grey-mid text-center my-4">
            תנאי תקנון:
          </div>
          <div className="uu w-[98%] max-w-5xl max-h-72 overflow-auto scrollbar-thin  scrollbar-thumb-grey-light ">
            <div className="content px-8">{termsText.text}</div>
          </div>
          <div className="actions">
            <button
              type="button"
              className="button"
              onClick={() => {
                close();
              }}
            >
              סגור
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};
export default Pop;
