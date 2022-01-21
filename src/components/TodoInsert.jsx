import { useCallback, useRef, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import '../scss/TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const valueChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const input = useRef('');
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (value === '') {
        input.current.focus();
      } else {
        onInsert(value);
        setValue('');
      }
    },
    [value, onInsert],
  );
  return (
    <form action="" className="TodoInsert" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요."
        ref={input}
        value={value}
        onChange={valueChange}
      />
      <button
        type="submit"
        onClick={() => {
          value === '' && input.current.focus();
        }}
      >
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
