import React, { useState } from "react";
import axios from "axios";

const CreateNote = () => {
  // 2.import usestate dari React dan buat usestate
  // parameter input nama usestate nya dan  seinput adalah nama untuk merubahnya
  const [input, setInput] = useState({
    // nama dari inputan dan valuenya/nilainya dikosongkan
    username: "",
    email: "",
    phone: "",
    address: "",
  });

  // 1. untuk menghandle perubahan yang di inputkan di form createnote
  function handleChange(event) {
    const { name, value } = event.target;

    //3. membuat fungsi perubahan
    // name inputnya dan value/nilai yang akan dimasukan
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  //   4.membuat fungsi handle clik button
  function handleClick(event) {
    event.preventDefault();

    // tes di console apakah inputan yang di masukan
    // sudah bisa masuk atau belom
    // console.log(input);

    // 5.buat axios
    const newNote = {
      username: input.username,
      email: input.email,
      phone: input.phone,
      address: input.address,
    };

    axios.post("http://localhost:3001/create", newNote);
  }

  return (
    <div className="container">
      <h1>Register Page</h1>
      <form>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="username"
            autoComplete="off"
            placeholder="username"
            className="form-control"
          ></input>
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="email"
            autoComplete="off"
            placeholder="email"
            className="form-control"
          ></input>
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="phone"
            autoComplete="off"
            placeholder="phone"
            className="form-control"
          ></input>
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="address"
            autoComplete="off"
            placeholder="address"
            className="form-control"
          ></input>
        </div>
        {/* <div className="form-group">
          <textarea
            onChange={handleChange}
            name="content"
            autoComplete="off"
            placeholder="note content"
            className="form-control"
          ></textarea>
        </div> */}

        <button onClick={handleClick} className="btn btn-lg btn-info">
          REGISTER
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
