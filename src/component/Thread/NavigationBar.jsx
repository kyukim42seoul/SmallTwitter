import Button from "../Common/Button";
import FlexContainer from "../Common/FlexContainer.jsx"
import styled from "styled-components";
import { GoHome, GoHomeFill, GoBookmark, GoBookmarkFill } from "react-icons/go";
import { FaRegUser, FaUser } from "react-icons/fa6";
import { LuLeaf } from "react-icons/lu";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


const NavigationBar = (props) => {
  const [isHome, setIsHome] = useState(true);
  const [isBookmarks, setIsBookmarks] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isShorten, setIsShorten] = useState(window.innerWidth < 1225);
  const navigate = useNavigate();

  const handleHome = () => {
    setIsHome(true);
    setIsBookmarks(false);
    setIsProfile(false);
    navigate("/thread");
  }

  const handleBookmarks = () => {
    setIsHome(false);
    setIsBookmarks(true);
    setIsProfile(false);
    navigate("/bookmarks");
  }

  const handleProfile = () => {
    setIsHome(false);
    setIsBookmarks(false);
    setIsProfile(true);
    navigate("/profile");
  }

  useEffect(() => {
    const handleResize = () => {
      setIsShorten(window.innerWidth < 1225);
    };

    window.addEventListener("resize", handleResize);

    return () => {window.removeEventListener("resize", handleResize)};
  }, []);

  return (
    <StyledNavigationBar {...props}>
      <StyledNavigationList>
        <StyledLink>
          <StyledImage src="./chat.png" $size="1.5rem" />
        </StyledLink>
        <StyledLink className={isHome ? "active" : ""} onClick={handleHome}>
          <StyledInnerBox>
            {isHome ? <GoHomeFill /> : <GoHome /> }
            <span className="iconText">Home</span>
          </StyledInnerBox>
        </StyledLink>
        <StyledLink className={isBookmarks ? "active" : ""} onClick={handleBookmarks}>
          <StyledInnerBox>
            {isBookmarks ? <GoBookmarkFill /> : <GoBookmark />}
            <span className="iconText">Bookmarks</span>
          </StyledInnerBox>
        </StyledLink>
        <StyledLink className={isProfile ? "active" : ""} onClick={handleProfile}>
          <StyledInnerBox>
            {isProfile ? <FaUser /> : <FaRegUser />}
            <span className="iconText">Profile</span>
          </StyledInnerBox>
        </StyledLink>
      </StyledNavigationList>
      <StyledButton>
        {isShorten ? <LuLeaf /> : "Post"}
      </StyledButton>
    </StyledNavigationBar>
  );
}

export default NavigationBar;

const StyledNavigationBar = styled.nav`
  display: none;

  @media screen and (min-width: 700px) {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1rem;
    padding-right: 1rem;
    border-right: 1px solid var(--grey3);

    .iconText {
      display: none;
    }
  }

  @media screen and (min-width: 1225px) {
    width: 275px;

    .iconText {
      display: unset;
    }
  }
`
const StyledImage = styled.img`
  padding: 0.75rem;
  width: ${({$size}) => $size || "1.5rem"};
  height: ${({$size}) => $size || "1.5rem"};
`

const StyledNavigationList = styled.div`
  display: flex;
  flex-direction: column;
  .active {
    font-weight: bold;
  }
`

const StyledInnerBox = styled.span`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  border-radius: 9999px;
  padding: 0.75rem;
  font-size: 1.25rem;
  :first-child {
    margin-right: 0.5rem;
  }
  `

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 3.5rem;
  &:hover ${StyledInnerBox} {
    background-color: var(--grey2);
  }
  &:focus ${StyledInnerBox} {
    font-weight: bold;
  }
  `

const StyledButton = styled.button`
  background-color: var(--main);
  color: var(--white);
  padding: 0.75rem 0;
  border-radius: 9999px;
  height: 3.25rem;
  font-size: 1.25rem;
  font-weight: bold;
  &:hover {
    background-color: var(--mainDarken);
  }
`