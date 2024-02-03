import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./Header.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
      window.scrollTo(0, 0);
    },[location])

    const openSearch = ()=>{
      setMobileMenu(false);
      setShowSearch(true);
    }

    const openMobileMenu= () =>{
      setMobileMenu(true);
      setShowSearch(false);
    }
    const searchQueryHandler = (e)=>{
      if(e.key === "Enter" && query.length > 0){
          navigate(`/search/${query}`);
      }
      setTimeout(()=>{
        setShowSearch(false);
      },1000)
    }

    const navigationHandler= (type)=>{
          if(type === "movie"){
            navigate("/explore/movie");
          }else if(type === "logo"){
            navigate("/")
          }else{
            navigate("/explore/tv");
          }
          setMobileMenu(false);
    }

    const controlNavBar = () =>{
    if(window.scrollY > 200){
      if(window.scrollY > lastScrollY && !mobileMenu){
        setShow("hide");
      }else{
        setShow("show")
      }
    }else{
      setShow("top")
    }
      
      setLastScrollY(window.scrollY);
    }

    useEffect(()=>{
      window.addEventListener("scroll", controlNavBar)
      return ()=>{
        window.removeEventListener("scroll", controlNavBar);
      }
    },[lastScrollY])

    return (
        <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
          <ContentWrapper> 
            <div className="logo" onClick={()=>{navigationHandler("logo")}}>
              <img src={logo} alt="MOVIX" />
            </div>
            <ul className="menuItems">
              <li className="menuItem" onClick={()=>{navigationHandler("movie")}}>Movies</li>
              <li className="menuItem" onClick={()=>{navigationHandler("tv")}}>TV Shows</li>
              <li className="menuItem">
                <HiOutlineSearch onClick={openSearch}></HiOutlineSearch>
              </li>
            </ul>
            <div className="mobileMenuItems">
              <HiOutlineSearch onClick={openSearch}></HiOutlineSearch>
              {mobileMenu ? (<VscChromeClose onClick={()=>{setShowSearch(false); setMobileMenu(false)}}></VscChromeClose>) : (<SlMenu onClick={openMobileMenu}></SlMenu>)}
            </div>
          </ContentWrapper>
          {showSearch && <div className="searchBar">
            <ContentWrapper>
              <div className="searchInput">
                          <input type="text" 
                              placeholder='Search for a movie or tv show....' 
                              onKeyUp={searchQueryHandler}
                              onChange={(e)=>setQuery(e.target.value)}  
                          />
                          <VscChromeClose onClick={()=>{setShowSearch(false)}}></VscChromeClose>
              </div>
            </ContentWrapper>
          </div>}
        </header>
    );
};

export default Header;