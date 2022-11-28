import { useState } from 'react';
import ValidatedInputPractice from './ValidatedInput';
import ValidatedInputAnswer from './ValidatedInput.answer';

/// input이 올바른 이메일인지 검사하는 함수, 정규 표현식 사용해서 형식 검사
const isEmail = (input) =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    input
  );
/// input이 숫자로만 이루어져 있는지 검사하는 함수, 정규 표현식 사용해서 모든 문자가 0-9 내에 들어가는지 검사
const isNumeric = (input) => /^[0-9]+$/.test(input);

function App() {
  const [isAnswerMode, setIsAnswerMode] = useState(true);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // 정답 확인 모드인지에 따라 실제로 사용되는 컴포넌트를 변경하는 코드, 무시해도 됨
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
      {/* 이메일 확인.. */}
      <ValidatedInput
        // ValidatedInput 컴포넌트에 props로 .. 3개를 넘겨주는?
        // email은 위에서 state로 선언했음
        value={email}
        // onInput은 선언한 email의 최신값?
        onInput={setEmail}
        // validators는 객체임. 두 개의 원소가 있음.
        // 근데 fn이 뭔지 모르겠음. 위에는 함수고 아래는..아래도 함수네
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
      {/* 여기까지 보고 ValidatedInput.jsx로 가보자 */}

      {/* 전화번호 확인.. */}
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
