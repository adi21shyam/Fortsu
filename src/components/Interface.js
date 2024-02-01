/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/style.css";
import { toast } from "react-toastify";
import Table from "./Table";
import Search from "./Search";
import PageHandler from "./PageHandler";
// import DeleteButton from "./DeleteButton";
import EditData from "./EditData";
import AddData from "./AddData";

const URL = "https://dataplant-assessment.onrender.com";

const Interface = () => {
  const [users, setUsers] = useState([]);
  const [filterUsers, setfilterUsers] = useState([]);
  const [page, setpage] = useState(1);
  const [searchText, setsearchText] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [edit, setEdit] = useState(null);
  const [toggle, setToggle] = useState(false);

  const itemsPerPage = 7;

  useEffect(() => {
    fetchTheData();
  }, [toggle]);

  const fetchTheData = async () => {
    try {
      const response = await axios.get(`${URL}/schedule`);
      console.log(response.data);
      setUsers(response.data);
      setfilterUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setsearchText(query);

    const filtered = users.filter((user) => user.Title.toLowerCase().includes(query));
    setfilterUsers(filtered);
    setpage(1);
  };

  const handleEdit = (id) => {
    setEdit(id);
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${URL}/schedule/${id}`);
      console.log(res.data, "res");
      setfilterUsers(res.data);

      toast.error("Deleted Successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Deletion Failed!");
    }
  };

  const handlePage = (page) => {
    setpage(page);
  };


  const handleAddClick = () => {
    setShowAdd(!showAdd);
  };

 
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = filterUsers.slice(startIndex, endIndex);

  return (
    <div className="container bg-blue-100">
    <div className="container my-16 flex">
      <div className="w-1/12  bg-blue-950 p-10"></div>
      <div className="container ">
        <div className="flex justify-between mx-10">
          <Search searchText={searchText} handleSearch={handleSearch} />
          <div className="flex">
            {showAdd && (
              <div>
                <AddData showAdd={showAdd} setShowAdd={setShowAdd} setToggle={setToggle} />
              </div>
            )}
            <div className="bg-blue-950 text-white p-2 my-4 rounded-md mx-14">
              <button className="flex" onClick={handleAddClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Add
              </button>
            </div>
          </div>
        </div>
      
      
        <Table users={currentUsers} handleEdit={handleEdit} handleDelete={handleDelete} setEdit={setEdit} edit={edit} setToggle={setToggle} toggle={toggle}  />
      </div>
      </div>
      <div className="justify-center flex"><PageHandler currentPage={page} itemsPerPage={itemsPerPage} totalItems={filterUsers.length} handlePagination={handlePage} /></div>
    </div>
  );
};

export default Interface;
