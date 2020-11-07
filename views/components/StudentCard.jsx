const React = require("react");

function StudentCard( props ) {

  // props ===>   {  fName: 'Uros',   lName: 'Cirkovic' }

  return (
        <section className="student-card">
          <h2>Student Card</h2>
          <hr />
          <h3>Details</h3>

          <div className="img-container">
            <img src={props.photo} alt="" />
          </div>
          
          <p className="name">First Name: { props.fName }</p>
          <p className="name">Last Name: { props.lName }</p>

          <button>See Profile</button>
        </section>
  );
}

module.exports = StudentCard;
