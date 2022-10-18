import React from "react";
import { Link } from "react-router-dom";
import { useDatabase, useFetch } from "../../utilities/database.js";
import "./Reviews.scss";

const Record = (props) => (
  <tr>
    <td>{props.record.username}</td>
    <td>{props.record.review}</td>
    <td>{props.record.rating}</td>
    <td>{props.record.bookname}</td>
    <td>
      <Link
        className="btn btn-link"
        to={`/simpleread/edit/${props.record._id}`}
      >
        Edit
      </Link>{" "}
      <button
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default async function RecordList() {
  const [records, setRecords] = useDatabase("/review");
  const secureFetch = await useFetch();

  // This method will delete a record
  async function deleteRecord(id) {
    await secureFetch(`/review/${id}`, undefined, "DELETE");

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <h1>Record List</h1>
      <table style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Review</th>
            <th>Rating</th>
            <th>Book</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}
