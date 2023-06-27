import { useState } from 'react';
import ValidatedInputPractice from './ValidatedInput';
import ValidatedInputAnswer from './ValidatedInput.answer';

// // input이 올바른 이메일인지 검사하는 함수, 정규 표현식 사용해서 형식 검사
// const isEmail = (input) =>
//   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     input
//   );
// // input이 숫자로만 이루어져 있는지 검사하는 함수, 정규 표현식 사용해서 모든 문자가 0-9 내에 들어가는지 검사
// const isNumeric = (input) => /^[0-9]+$/.test(input);

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
      <div className="inline-block">
        <div className="flex flex-col items-center">
          <input 
            {...register("email")}
            className="border border-gray-300 rounded p-2"
          />
          <span className="text-red text-sm font-medium">{error}</span>
        </div>
      </div>
      <div className="inline-block">
        <div className="flex flex-col items-center">
          <input
            {...register("phoneNumber")}
            className="border border-gray-300 rounded p-2"
          />
          <span className="text-red text-sm font-medium">{error}</span>
        </div>
      </div>
      {/* <ValidatedInput
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
      /> */}
      <p>이메일: {email}</p>
      <p>전화번호: {phoneNumber}</p>
    </div>
  );
}

export default App;
