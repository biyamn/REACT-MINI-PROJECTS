import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    criteriaMode: "all"
  });

  // 현재 입력값을 실시간으로 보여주기 위해 watch 사용
  const mailValue = watch("email");
  const phoneNubmberValue = watch("phoneNumber");
  
  // 제출 버튼을 눌렀을 때: 아무 기능 없음 
  const onSubmit = (data) => {
    return
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col my-4 gap-2 items-center">
      <h1>[리팩토링] form => React Hook Form</h1>
      <div className="inline-block">
        <div className="flex flex-col items-center">
          <input 
            {...register("email", {
              required: "내용을 입력해주세요.",
              pattern: {
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "올바른 형식의 이메일을 입력해주세요."
              },
            })}
            className="border border-gray-300 rounded p-2"
          />
          {errors.email && <span className="text-red text-sm font-medium">{errors.email.message}</span>}
        </div>
      </div>
      <div className="inline-block">
        <div className="flex flex-col items-center">
          <input
            {...register("phoneNumber", {
              required: "내용을 입력해주세요.",
              minLength: { 
                value: 10,
                message: "10자 이상 입력해주세요."
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "숫자만 입력해주세요."
              },
            })}
            className="border border-gray-300 rounded p-2"
          />
          {errors.phoneNumber && <span className="text-red text-sm font-medium">{errors.phoneNumber.message}</span>}
        </div>
      </div>
      <p>이메일: {mailValue}</p>
      <p>전화번호: {phoneNubmberValue}</p>
      <input type="submit" value="로그인하기" className="border border-gray-300 rounded p-2" />
    </form>
  );
}

export default App;
