import React, { useState, useEffect, useRef, forwardRef, useCallback } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Header.css';
import WTFLogo from '../images/WTFlogo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import beatCartImage from '../images/musicnote.svg';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = (props) => {
  // Mobile code
  const [navOpen, setNavOpen] = useState(false);

  const cartRef = useRef(null);
  const cartIconRef = useRef(null);
  
  const [cartVisible, setCartVisible] = useState(false);
  
  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartVisible && 
        !cartRef.current.contains(event.target) && 
        !cartIconRef.current.contains(event.target)
      ) {
        cartRef.current.classList.remove('slide-in');
        setCartVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cartVisible]);

  return (
    <header className="header">
      <div className="brand">
        <img className="logo" src={WTFLogo} alt = "WTFLogo"></img>
      </div>
      <GiHamburgerMenu 
        className='hamburger' 
        onClick={() => setNavOpen(!navOpen)}
      />
      <nav className="navbar ${navOpen ? 'open' : ''}">
        <ul>
          <li>
            <Link
              activeClass='active'
              to='beats'
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}>Beats</Link>
          </li>
          <li>
            <Link
              activeClass='active'
              to='pricing'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Pricing</Link>
          </li>
          <li>
            <Link
              activeClass='active'
              to='services'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Services</Link>
          </li>
          <li>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="cart-container" onClick={toggleCartVisibility} ref={cartIconRef}>
        <FontAwesomeIcon icon={faShoppingCart} className="header-cart-icon" />
        <Cart cart={props.cart} className={`header-cart-dropdown ${cartVisible ? 'visible' : ''}`} 
        clearCart = {props.clearCart} 
        ref={cartRef} />
      </div>
    </header>
  );
};

const Cart = forwardRef(({ cart, className, clearCart }, ref) => {
  const totalPrice = cart.reduce((acc, item) => acc + 20, 0);
  const numberOfItems = cart.length;

  useEffect(() => {
    if (className.includes('visible')) {
      setTimeout(() => {
        ref.current.classList.add('slide-in');
      }, 10);
    }
  }, [className, ref]);

  return (
    <div className={className} ref = {ref}>
      <p className='header-cart-item-count'>Items: {numberOfItems}</p>
      <ul className="header-cart-items">
        {cart.map((item, index) => (
          <li key={index}>
            <img src = {beatCartImage} alt='Beat' style={{ width: '20px', height: '20px', marginRight: '10px'}} />
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p className="header-cart-total">Subtotal: ${totalPrice}</p>
      <button className='header-cart-checkout'>Checkout</button>
      <button className='header-cart-clear' onClick={clearCart}>Clear Cart</button>
    </div>
  );
});


export default Header;
