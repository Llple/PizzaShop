import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectSortItem } from "../Redux/Slices/filterSort";
import { RootState } from "../Redux/store";

export default function Sort() {
  const dispatch = useDispatch();
  const { selectSortItem, sortBy } = useSelector((state:RootState) => state.filter);
  const popupRef = React.useRef<HTMLDivElement>(null);
  const [showSort, setShowSort] = React.useState(false);

  const listSort = [...sortBy];

  const selectedSort = listSort[selectSortItem].name;

  const onClickSelectSortItem = (index:number) => {
    dispatch(setSelectSortItem(index));
  };

  const onClickShowListSort = () => {
    setShowSort((prev) => !prev);
  };


  React.useEffect(()=>{
    const closePopUp = (event:MouseEvent) =>{
      const eventPath = (event as unknown as Event).composedPath();
      if (!eventPath.includes(popupRef.current!)) {
        setShowSort(false);
      }
    }
    
    document.body.addEventListener("click",closePopUp )

    return ()=> {
      document.body.removeEventListener("click",closePopUp )
    }

  },[])

  return (
    <div ref={popupRef} onClick={onClickShowListSort} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {showSort && (
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          )}
        </svg>
        <b>Сортировка по:</b>
        <span>{selectedSort}</span>
      </div>
      {showSort ? (
        <div className="sort__popup">
          <ul>
            {listSort.map((item, index) => (
              <li
                onClick={() => {
                  onClickSelectSortItem(index);
                }}
                className={selectSortItem === index ? "active" : ""}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
