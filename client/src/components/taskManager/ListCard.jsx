import "./listcard.scss";
import { BiChevronLeft, BiChevronRight, BiTrash } from "react-icons/bi";
import { arrowClick, deleteItem } from "../../redux/taskSlice";
import { useDispatch } from "react-redux";

// Functional component for rendering a task list card
const ListCard = (items) => {
  // Destructuring the 'items' prop to get the 'item' object
  const { item } = items;

  // Redux hook to dispatch actions
  const dispatch = useDispatch();

  // Function to handle left and right arrow button clicks
  const ArrowClick = (string) => {
    dispatch(arrowClick(item, string));
  };

  // Function to handle task deletion
  const handleDelete = () => {
    dispatch(deleteItem(item._id));
  };

  // JSX for the ListCard component
  return (
    <div className="menuCard">
      {/* Task information displayed in a list */}
      <ul
        className={` ${
          item.status === "Completed" ? "completed menu" : "menu"
        }`}
      >
        <li>
          {/* Displaying the task description */}
          <p>{item.task}</p>
        </li>
        <li>
          {/* Displaying the task status */}
          <p>{item.status}</p>
        </li>
        <li>
          {/* Buttons for moving the task left, right, and deleting */}
          <button
            // Disabling the left arrow button if the status is 'Todo'
            disabled={item.status === "Todo"}
            onClick={() => ArrowClick("left")}
          >
            <BiChevronLeft />
          </button>
          <button
            // Disabling the right arrow button if the status is 'Completed'
            disabled={item.status === "Completed"}
            onClick={() => ArrowClick("right")}
          >
            <BiChevronRight />
          </button>
          {/* Button for deleting the task */}
          <button onClick={handleDelete} className="trash">
            <BiTrash />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ListCard;
