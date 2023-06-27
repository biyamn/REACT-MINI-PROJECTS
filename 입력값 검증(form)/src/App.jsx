import { useState } from 'react';
import ValidatedInputPractice from './ValidatedInput';
import ValidatedInputAnswer from './ValidatedInput.answer';

const isEmail = (input) =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    input
  );

const isNumeric = (input) => /^[0-9]+$/.test(input);

function App() {
  const [isAnswerMode, setIsAnswerMode] = useState(true);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const ValidatedInput = isAnswerMode
    ? ValidatedInputAnswer
    : ValidatedInputPractice;

  return (
    <div className="flex flex-col my-4 gap-2 items-center">
      <label className="flex gap-2">
        <input
          type="checkbox"
          checked={isAnswerMode}
          onChange={(e) => {
            setIsAnswerMode(e.target.checked);
            setEmail('');
            setPhoneNumber('');
          }}
        />
        정답 확인 모드
      </label>
      <ValidatedInput
        value={email}
        onInput={setEmail}
        validators={[
          {
            fn: (input) => input.length > 0,
            message: '내용을 입력해주세요.',
          },
          {
            fn: isEmail,
            message: '올바른 형식의 이메일을 입력해주세요.',
          },
        ]}
      />
      <ValidatedInput
        value={phoneNumber}
        onInput={setPhoneNumber}
        validators={[
          {
            fn: (input) => input.length > 0,
            message: '내용을 입력해주세요.',
          },
          {
            fn: isNumeric,
            message: '숫자만 입력해주세요.',
          },
          {
            fn: (input) => input.length >= 10,
            message: '10자 이상 입력해주세요.',
          },
        ]}
      />
      <p>이메일: {email}</p>
      <p>전화번호: {phoneNumber}</p>
    </div>
  );
}

export default App;
