import Styles from './../styles/footer.module.css';
import React from 'react';
import Image from 'next/image';
// let copy = React.string({js|\u00a9|js});

const Footer = ({ openNavbar, setOpenNavbar }) => {
  let copyright = String.fromCodePoint(0x00a9);
  return (
    <footer className={Styles.container}>
      <div className={Styles.underFooter}>
        {/* Left Side< */}
        <div className={Styles.image}>
          <Image
            src={'/reda_favicon.png'}
            height={50}
            width={50}
            alt="favicon for footer"
          />
        </div>
        {/* Center  Side< */}
        <p className={Styles.par}>
          CopyRight{' '}
          <span>
            {copyright} {new Date().getFullYear()}
          </span>
        </p>

        {/* Right  Side< */}
        <div className={Styles.logo} onClick={() => setOpenNavbar(false)}>
          <div className={Styles.logoContainer}>
            <span
              className={`${Styles.span} ${openNavbar && Styles.activeSpan}`}
            >
              RE
            </span>
            <span
              className={`${Styles.span} ${openNavbar && Styles.activeSpan2}`}
            >
              DA
            </span>
          </div>
        </div>
        {/* -------------RIGHT------------------- */}
      </div>
    </footer>
  );
};

export default Footer;
