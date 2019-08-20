import React from 'react';

const Users = ({ users }) => {
  const spacing = {
    padding: "5px",
    font: "Times New Roman",
  }

    return (
        <div>
          {users.map((users) => (
            <div>
              <div style={spacing}>
                <h5>Name:     {users.fName} {users.lName}</h5>
                <h6>Table Assignemnt:       {users.tableAssignment}</h6>
              </div>
            </div>
          ))}
        </div>
    )
};

export default Users;