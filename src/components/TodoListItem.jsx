import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import '../scss/TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { text, checked, id } = todo;
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div
        className="remove"
        onClick={() => {
          window.confirm('일정을 삭제하시겠습니까?') && onRemove(id);
        }}
      >
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
