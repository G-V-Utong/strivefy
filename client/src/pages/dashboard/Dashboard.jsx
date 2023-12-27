import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./dashboard.scss";
import { useEffect } from "react";
import { getAllTasks } from "../../redux/taskSlice";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registering ChartJS elements and modules
ChartJS.register(ArcElement, Tooltip, Legend);

// Functional component for the Dashboard
const Dashboard = () => {
  // Selecting task and user information from the Redux store
  const tasklist = useSelector((state) => state.task);
  const { AllTasks } = tasklist;
  const user = useSelector((state) => state.auth);
  const { currentUser } = user;

  // Arrays to store pending and completed tasks
  let pendingTask = [];
  let completedTask = [];
  for (let i = 0; i < AllTasks.length; i++) {
    if (
      AllTasks[i].status === "Todo" ||
      AllTasks[i].status === "Pending" ||
      AllTasks[i].status === "backlog"
    ) {
      pendingTask.push(AllTasks[i]);
    } else if (AllTasks[i].status === "Completed") {
      completedTask.push(AllTasks[i]);
    }
  }

  // Redux hook to dispatch actions
  const dispatch = useDispatch();

  // Effect hook to fetch all tasks when the component mounts or when user data changes
  useEffect(() => {
    dispatch(getAllTasks(currentUser.token, currentUser.id));
  }, [dispatch, currentUser.token, currentUser.id]);

  // Calculating percentages for pending and completed tasks
  const pendingTaskPercentage =
    100 *
    ((AllTasks.length - completedTask.length) / AllTasks.length).toFixed(1);
  const completedTaskPercentage =
    100 * ((AllTasks.length - pendingTask.length) / AllTasks.length).toFixed(1);

  // Data for the doughnut chart
  const data = {
    labels: ["Pending", "Completed"],
    datasets: [
      {
        label: "% of All Tasks",
        data: [pendingTaskPercentage, completedTaskPercentage],
        backgroundColor: ["rgba(255, 0, 0, 1)", "rgba(0, 128, 0, 1)"],
        borderColor: ["rgba(255, 0, 0, 1)", "rgba(0, 128, 0, 1)"],
        borderWidth: 1,
      },
    ],
  };

  // JSX for rendering the Dashboard component
  return (
    <div>
      <div className="dashboard">
        <div className="dashboard__left">
          {/* Rendering the Sidebar component */}
          <Sidebar />
        </div>
        <div className="dashboard__right">
          <div className="dashboard__rightContent">
            <h2>Task Status Dashboard</h2>
            <div className="taskcount">
              <div className="chart box">
                <Doughnut data={data} />
              </div>

              <Link to="/taskmanager" className="">
                <div className="todo box">
                  <h1>{pendingTask.length}</h1>
                  <p>Pending tasks</p>
                </div>
              </Link>
              
              <Link to="/taskmanager" className="">
                <div className="done box">
                  <h1>{completedTask.length}</h1>
                  <p>Completed tasks</p>
                </div>
              </Link>
            </div>
            
            <div className="body__buttons">
              <Link to="/taskmanager" className="body__buttons__primary">
                <button className="body__buttons__primary">
                  Create new task
                </button>
              </Link>
              <Link to="/taskmanager" className="">
                <button className="body__buttons__secondary">
                  Go to Task Manager
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
