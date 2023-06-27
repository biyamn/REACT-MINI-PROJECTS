import { useState } from 'react';

const ValidatedInput = (props) => {
  const [value, setValue] = useState(props.value ?? '');

  const [error, setError] = useState();

  const onChange = (e) => {
    setValue(e.target.value);

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
