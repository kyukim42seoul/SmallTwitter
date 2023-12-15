import React, { useState } from 'react';
import axios from 'axios';

export const CreateUserTestForm = () => {
  // 세 개의 input 필드에 대한 상태
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  // 모든 필드가 채워졌는지 확인하는 함수
  const allFieldsFilled = input1 && input2 && input3;

  // form 제출 핸들러
  const handleSubmit = (event) => {
    event.preventDefault();
    if (allFieldsFilled) {
      // 여기에 제출 로직을 작성합니다.
      console.log('Form Submitted', { input1, input2, input3 });
      axios.post("http://localhost:3232/users", {
        userEmail: input1,
        userPassword: input2,
        userName: input3
      }, {
        headers: { "Content-Type": `application/json` },
      })
      .then(res => console.log(res.status, res.data))
      .catch(err => console.error(err.message));
    } else {
      console.log('Please fill all the fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input placeholder='userEmail' value={input1} onChange={e => setInput1(e.target.value)} />
        <input placeholder='userPassword' value={input2} onChange={e => setInput2(e.target.value)} />
        <input placeholder='userName' value={input3} onChange={e => setInput3(e.target.value)} />
      </div>
      <button type="submit" disabled={!allFieldsFilled}>Submit</button>
    </form>
  );
}
