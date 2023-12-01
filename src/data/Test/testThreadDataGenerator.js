/**
 * writer - 프론트에 필요 없음
 * threadCardID - 댓글 요청할 때 사용, 각종 상호작용 시 선택자
 * nickname
 * email
 * **date
 * content
 * **tags
 * commentCount
 * shareCount
 * favoriteCount
 */

import {
  writers,
  nicknames,
  emailHead,
  emailTail,
  quotes,
  tags,
} from "src/data/Test/sampleData.js";

const getRandomString = (stringArray) => {
  const randomIndex = Math.floor(Math.random() * stringArray.length);

  return stringArray[randomIndex];
};

const getRandomStrings = (stringArray, length) => {
  const newStringArray = [];
  for (length > 0; length--; ) {
    const randomIndex = Math.floor(Math.random() * stringArray.length);
    newStringArray.push(stringArray[randomIndex]);
  }

  return newStringArray;
};

const getRandomDate = (startDate, endDate) => {
  const timeDiff = endDate.getTime() - startDate.getTime();
  const randomTimestamp = startDate.getTime() + Math.random() * timeDiff;

  const randomDate = new Date(randomTimestamp);

  return randomDate;
};

class threadDataGenerator {
  generate() {
    const dataID = Math.floor(Math.random() * 10000);
    const nickname = getRandomString(nicknames);
    const email = `${getRandomString(emailHead)}@${getRandomString(
      emailTail
    )}}`;
    const content = getRandomString(quotes);
    const threadTags = getRandomStrings(tags, 4);
    const commentCount = Math.floor(Math.random() * 100);
    const shareCount = Math.floor(Math.random() * 1000);
    const favoriteCount = Math.floor(Math.random() * 1000);

    const startDate = new Date("2023-09-01");
    const endDate = new Date("2023-09-18");
    const date = getRandomDate(startDate, endDate).toString();

    const threadData = {
      threadCardID: dataID,
      nickname: nickname,
      email: email,
      date: date,
      content: content,
      threadTags: threadTags,
      commentCount: commentCount,
      shareCount: shareCount,
      favoriteCount: favoriteCount,
    };

    return threadData;
  }

  generateMore(count) {
    const threadDataArray = [];
    for (count > 0; count--; ) {
      threadDataArray.push(this.generate());
    }

    return threadDataArray;
  }
}

export default threadDataGenerator;
