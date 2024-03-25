import "../styles/jobs.css";

function Job() {
  return (
    <div className="job flex">
      <div className="company-image">
        <img src="/WhatsApp Image 2024-03-24 at 11.03.54 PM.jpeg" alt="" />
      </div>
      <div className="job-description">
        <h1>Full stack web developer- Remote- $60000/year</h1>
        <h4 className="company-name">CommaTech</h4>
        <p className="company-adress">Lebanon - Beirut</p>
        <button>Apply</button>
      </div>
    </div>
  );
}

export default Job;
