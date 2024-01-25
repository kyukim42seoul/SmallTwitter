import styled from "styled-components";
import ThreadCard from "src/component/Thread/ThreadCard.jsx";
import { useEffect, useState } from "react";

const user = {
  id: "id",
}

const Bookmarks = () => {
  let [bookmarkedThreads, setBookmarkedThreads] = useState([{}]);

  const getBookmarks = () => {};

  const updateThreads = (userId) => {
    let threads = getBookmarks(userId);
    setBookmarkedThreads(threads);
  }

  useEffect(() => {
    getBookmarks(user.id);
  }, [])

  return (
    <StyledBookmarks>
      <StyledHeader>
        Bookmarks
      </StyledHeader>
      <StyledMain>
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
      </StyledMain>
    </StyledBookmarks>
  );
}

export default Bookmarks;

const StyledBookmarks = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 600px;
  border-right: 1px solid var(--grey3);
  border-left: 1px solid var(--grey3);
  overflow-y: auto;
  scrollbar-width: none;

  ::-webkit-scrollbar { display: none; };

  @media screen and (min-width: 700px) {
    width: 600px;
  }
`

const StyledHeader = styled.div`
  padding: 0.5rem 1rem;
  height: 3.5rem;
  font-size: 1.25rem;
  font-weight: 600;
`

const StyledMain = styled.div``