import { useState } from 'react';

// 여기 props에 props.value, props.onInput, props.validators가 들어감
const ValidatedInput = (props) => {
  // props.value가 null도 아니고 undefined도 아니면 props.value 외에는 ''
  const [value, setValue] = useState(props.value ?? '');

  const [error, setError] = useState();

  // 여기를...만들면...되는 것 같음....
  // 일단 input이 입력되게 해야.. 헐됏다
  const onChange = (e) => {
    setValue(e.target.value);

    // 이제 검증을 해야..
    // console.log(props.validators[0].fn(e.target.value));
    // console.log(props.validators[1].fn(e.target.value));

    // if (!props.validators[0].fn(e.target.value)) {
    //   setError(props.validators[0].message);
    // } else if (!props.validators[1].fn(e.target.value)) {
    //   setError(props.validators[1].message);
    // } else if (!props.validators[2].fn(e.target.value)) {
    //   setError(props.validators[2].message);
    // } else {
    //   setError('');
    //   props.onInput(e.target.value);
    // }
    let hasError = false;

    props.validators.forEach((rule) => {
      if (!hasError) {
        if (!rule.fn(e.target.value)) {
          setError(rule.message);
          hasError = true;
        }
      }
    });

    if (!hasError) {
      setError('');
      props.onInput(e.target.value);
    }
  };

  return (
    <div className="inline-block">
      <div className="flex flex-col items-center">
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="border border-gray-300 rounded p-2"
        />
        <span className="text-red text-sm font-medium">{error}</span>
      </div>
    </div>
  );
};

export default ValidatedInput;
