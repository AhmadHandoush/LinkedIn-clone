import Job from "../components/Job";
import "../styles/main.css";
import "../styles/jobs.css";

function Jobs() {
  return (
    <div className="jobs">
      <div className="container">
        <Job />
        <Job />
        <Job />
      </div>
    </div>
  );
}

export default Jobs;
