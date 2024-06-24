import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Container,
  Body,
  Page,
  LinkTag,
  SocialContainer,
  Overlaybg
} from "../styles/Navigation.styles";
import { withRouter } from "react-router";
import NavButton from "./NavButton";

const NavigationMenu = ({ history, hasBackground, setBackground }) => {
  const [isOn, setState] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [linking, setLink] = useState("");

  useEffect(() => {
    !!linking &&
      setTimeout(() => {
        switch (linking) {
          case "home":
            history.push("/");
            setState(false);
            setLink("");
            break;
          case "about":
            history.push("/about");
            setState(false);
            setLink("");
            break;
          case "work":
            history.push("/work");
            setState(false);
            setLink("");
            break;
          // case "news":
          //   history.push("/news");
          //   setState(false);
          //   setLink("");
          //   break;
          case "contact":
            history.push("/contact");
            setState(false);
            setLink("");
            break;
          default:
            setLink("");
        }
        setBackground(false);
        window.scrollTo(0, 0);
      }, 0);
  }, [linking, history, setBackground]);

  useEffect(() => {
    shouldAnimate &&
      !isOn &&
      setTimeout(() => {
        setShouldAnimate(false);
      }, 0);
  }, [shouldAnimate, isOn]);

  const closeHandler = () => {
    setShouldAnimate(true);
    setState(!isOn);
  };

  const setLinkHandler = text => {
    setShouldAnimate(true);
    setLink(text);
  };

  useEffect(() => {
    const header = document.getElementById("header");
    const totop = document.getElementById("scroll-to-top")
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
    if (window.pageYOffset > sticky + 0) {
      header.classList.add("sticky");
      totop.classList.add("show");
    } else {
      header.classList.remove("sticky");
      totop.classList.remove("show");
    } 
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
    }, []);

  return (
    <header>
      <div id='header'></div>
      <div className="logo d-flex align-items-center">
      <img
        src="./img/logowhite.png"
        className="img-fluid"
        style={{ height: '80px' }}
        alt="Logo"
      />
      <span className="ml-3 callus">
        Aviha Group (PVT) LTD
      </span>
    </div>
      <Wrapper open={isOn} shouldAnimate={shouldAnimate}>
        <Overlaybg open={isOn} shouldAnimate={shouldAnimate} onClick={closeHandler}/>
        <Container
          open={isOn}
          onClick={closeHandler}
          hasBackground={hasBackground}>
          <NavButton open={isOn} />
        </Container>
        <Body className='midwrpr' open={isOn} shouldAnimate={shouldAnimate}>
  <div style={{ position: 'absolute', top: '-150px', right: '20px' }}>
    <img
      src="./img/logowhite.png"
      className="img-fluid"
      style={{ height: '80px' }}
      alt="Logo"
    />
  </div>
  <div className='conPage'>
    <Page className='mainBtn' variant="home" onClick={() => setLinkHandler("home")}>
      <LinkTag>Home</LinkTag>
    </Page>
    <Page className='mainBtn' variant="about" onClick={() => setLinkHandler("about")}>
      <LinkTag>About</LinkTag>
    </Page>
    <Page className='mainBtn' variant="work" onClick={() => setLinkHandler("work")}>
      <LinkTag>Events</LinkTag>
    </Page>
    <Page className='mainBtn' variant="about" onClick={() => setLinkHandler("contact")}>
      <LinkTag>Contact</LinkTag>
    </Page>
  </div>

  <div className='info'>
    <span>(+94) 77 237 3019</span>
    <span className='link'>support@aviha.com</span>
    <span>No.67, Walukarama Road, Colombo 03, Sri Lanka.</span>
  </div>
</Body>

        <SocialContainer className='soc-icon' open={isOn}>
    <span>Follow us:</span>
    <span className='socicon'>
        <a href="https://www.facebook.com/p/Aviha-Group-100070033276546/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook-f"></i>
        </a>
    </span>
    <span className='socicon'>
        <a href="https://www.linkedin.com/company/aviha-group" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin"></i>
        </a>
    </span>
    <span className='socicon'>
        <a href="3" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i>
        </a>
    </span>
    <span className='socicon'>
        <a href="3" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i>
        </a>
    </span>
</SocialContainer>

      </Wrapper>

      
    </header>
  );
};

export default withRouter(NavigationMenu);
