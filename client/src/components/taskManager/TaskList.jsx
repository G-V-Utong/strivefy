import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../../redux/taskSlice";
import ListCard from "./ListCard";
import "./tasklist.scss";

// Functional component for rendering the list of tasks
const TaskList = () => {
  // Selecting authentication and task state from the Redux store
  const authenticate = useSelector((state) => state.auth);
  const tasksState = useSelector((state) => state.task);

  // Extracting relevant information from authentication and task state
  const { currentUser } = authenticate;
  const { AllTasks } = tasksState;

  // Redux hook to dispatch actions
  const dispatch = useDispatch();

  // Effect hook to fetch all tasks when the component mounts or when user data changes
  useEffect(() => {
    dispatch(getAllTasks(currentUser.token, currentUser.id));
  }, [dispatch, currentUser.token, currentUser.id]);

  // JSX for rendering the TaskList component
  return (
    <div>
      <ul className="list-header">
        <li>
          <h5>Your Tasks</h5>
        </li>
        <li>
          <h5>Task Status</h5>
        </li>
        <li>
          <h5>Action</h5>
        </li>
      </ul>
      {/* Mapping through all tasks and rendering ListCard component for each task */}
      {Object.values(AllTasks)
        .slice(0)
        .reverse()
        .map((item) => {
          return <ListCard key={item._id} item={item} />;
        })}
    </div>
  );
};

export default TaskList;
