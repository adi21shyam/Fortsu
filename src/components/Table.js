/* eslint-disable no-unused-vars */
import React from "react";
import Row from "./Row";

//For each Row

const Table = ({
  users,
  handleEdit,
  handleDelete,
  setEdit,
  edit,
  setToggle,
  toggle
}) => {
  const currentUsers = users.slice(0, 10); // Only use the first 10 users
  console.log(toggle,"table")
  return (
    <table className="border-separate border-spacing-2 border shadow-2xl table mx-10">
      <thead>
        <tr>
          
          <th className="w-1/6">Title</th>
          <th className="w-2/6 ">Description</th>
          <th className="w-1/6">Subject</th>
          <th className="w-1/6">Schedule</th>
          <th className="w-1/6">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <Row
            key={user.id}
            user={user}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            setEdit={setEdit}
            edit={edit}
            setToggle={setToggle}
            toggle={toggle}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;