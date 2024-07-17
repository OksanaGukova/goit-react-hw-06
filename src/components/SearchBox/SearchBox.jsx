import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";



export default function SearchBox() {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div >
      <p >Find contact by name</p>
      <input
       
        type="text"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
