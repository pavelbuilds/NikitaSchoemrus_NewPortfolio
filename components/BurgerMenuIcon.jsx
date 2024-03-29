import { useRef, useEffect } from 'react';
import styles from '../styles/BurgerMenuIcon.module.css';

const BurgerMenuIcon = ({ toggleMenu, menuOpen }) => {
  const checkboxRef = useRef();

  useEffect(() => {
    if (!menuOpen) {
      checkboxRef.current.checked = false;
    } else {
      checkboxRef.current.checked = true;
    }
  });

  return (
    <div onClick={toggleMenu} className={styles.menu_icon}>
      <input ref={checkboxRef} defaultChecked={false} className={styles.menu_icon__cheeckbox} type="checkbox" />
      <div>
        <span />
        <span />
      </div>
    </div>
  );
};

export default BurgerMenuIcon;
