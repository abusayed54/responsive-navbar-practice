import React, { useEffect, useState } from 'react';
import classes from './Header.module.scss';
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {

    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(true)

    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    })
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p)
    };
    const ctaClickHandler = () => {
        menuToggleHandler();
        navigate("/page-cta");
    };

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <h2 className={classes.header__content__logo}>navbar</h2>
                <nav className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ""}`}>
                    <ul>
                        <li>
                            <Link to="/page-one" onClick={menuToggleHandler} >Page One</Link>
                        </li>
                        <li>
                            <Link to="/page-two" onClick={menuToggleHandler} >Page Two</Link>
                        </li>
                        <li>
                            <Link to="/page-three" onClick={menuToggleHandler} >Page Three</Link>
                        </li>

                    </ul>
                    <button onClick={ctaClickHandler}>CTA Page</button>
                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;