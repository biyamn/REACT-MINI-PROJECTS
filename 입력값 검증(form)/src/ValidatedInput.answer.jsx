import { useState } from 'react';

const ValidatedInput = (props) => {
  const [value, setValue] = useState(props.value ?? '');
  const [error, setError] = useState();

  const onChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    for (const rule of props.validators ?? []) {
      if (!rule.fn(newValue)) {
        setError(rule.message);
        return;
      }
    }
    setError(null);
    props.onInput?.(newValue);
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
