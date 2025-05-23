import { Fragment } from "react";
import { MouseEvent } from "react";
import { useState } from "react";

interface Props {
  items: string[]; // Array of strings to be displayed in the list group
  heading: string; // Heading for the list group
  onSelectItem: (item: string) => void; // Optional callback function to handle item selection
}

// funtion ListGroup is a functional component that renders a list of items. It uses the useState hook to manage the state of the selected index.
function ListGroup(props: Props) {
  const [SelectedIndex, setSelectedIndex] = useState(-1); // State to keep track of the selected index

  const getMessage = () => {
    return props.items.length === 0 && <p> "No items found" </p>;
  };
  // event handler function to handle click events
  const handleClick = (event: MouseEvent) => {
    console.log(event); //Using event.currentTarget to get the text of the clicked item
  };

  return (
    <>
      <h1>{props.heading}</h1>
      {getMessage}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            className={
              SelectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              props.onSelectItem(item); // Call the onSelectItem function passed as a prop
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
//Exporting the ListGroup component so it can be used in other files.
