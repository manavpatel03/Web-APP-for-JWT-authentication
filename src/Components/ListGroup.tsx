import { MouseEvent, useState } from "react";
let list = ["wer", 2, 3, 4, 5];
const func = () => {
  return list.length === 5 && <p>Hello</p>;
};
function ListGroup() {
  let a = "list-group-item list-group-item-danger";
  let b = "list-group-item";
  const [x, setx] = useState(-1);
  const clickhandle = (Event: MouseEvent) => {
    console.log(Event.clientX + "is the x axis!!!");
  };
  return (
    <>
      <p>ListGroup!!</p>
      {func()}
      <ul className="list-group">
        {list.map((item, index) => (
          <li
            className={x == index ? a : b}
            key={item}
            onClick={() => {
              setx(index);
            }}
          >
            <a href="">{item}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
