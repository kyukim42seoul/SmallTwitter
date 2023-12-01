/**
 * 게시 날짜로부터 경과 시간에 따른 표시 테스트
 */

import { useEffect, useState } from "react";

export const DateShortcutTest = () => {
  const uploadDate = new Date("2023-10-14 19:00");
  const today = new Date();
  const timeDiff = today - uploadDate;
  const resultHour = Math.floor(timeDiff / ((1000 * 60 * 60)));
  const resultDate = Math.floor(timeDiff / ((1000 * 60 * 60 * 24)));
  const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const [Month, setMonth] = useState();

  useEffect(()=>{
    if (resultHour >= 48) {
      setMonth(monthName[uploadDate.getMonth()]);
    };
  }, []);

  const dateShortCut = Month + " " + uploadDate.getDay();

  console.log(`mm: ${Month} dd: ${uploadDate.getDate()}`)

  return (
    <div>
      <p style={{fontSize:"40px"}}>
        {"Date: " + resultDate + "d"}
      </p>
      <p style={{fontSize:"20px"}}>
        {"Hour: " + resultHour + "h"}
      </p>
      <p style={{fontSize:"16px"}}>
        {dateShortCut}
      </p>
    </div>
  );
}