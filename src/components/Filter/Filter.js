import { v4 as uuid } from 'uuid';
import * as actions from '../../redux/actions';
import { useDispatch } from 'react-redux';

export default function Filter() {
  const IdFilter = uuid();
  const dispatch = useDispatch();

  const changefilter = e => dispatch(actions.changefilter(e.target.value));

  return (
    <>
      <label htmlFor={IdFilter}>Find contacts by name</label>
      <br />
      <input
        id={IdFilter}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={changefilter}
      />
    </>
  );
}
