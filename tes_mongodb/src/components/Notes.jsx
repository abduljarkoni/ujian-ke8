import React, { useState, useEffect } from "react";

const Note = () => {
    const [notes, setNotes] = useState([
      {
        username: "",
        email: "",
        phone: "",
        address: "",
      },
  ]);

  useEffect(() => {
    fetch("/notes")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setNotes(jsonRes));
  });

  return (
    <>
      <div className="container">
        <h1>List Page</h1>
        {/* {notes.map((note) => { */}
        <div className="form_pencarian">
          <form>
            <h3>Search By :</h3>
            <select className="form-control">
              <option>Name</option>
              <option>Email</option>
              <option>Phone</option>
              <option>Address</option>
            </select>

            <div>
              <h3>Keyword :</h3>
              <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                  ></input>
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </nav>
            </div>
          </form>
        </div>
        <div className="document">
          <div>
            {/* <h4>{note.username}</h4>
            <h4>{note.email}</h4>
            <h4>{note.phone}</h4>
            <h4>{note.address}</h4> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
