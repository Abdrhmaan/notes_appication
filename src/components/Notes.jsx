/* eslint-disable react/prop-types */

import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fextchnotes } from "../store/api/CreateSlice";
import { deletnote } from "../store/api/CreateSlice";
import { Link } from "react-router-dom";

function Notes(props) {

  const notes = useSelector((stste) => stste.name.notes

  )

  const dipach = useDispatch()

  const handlxaan  = (id)=>{
    dipach(deletnote(id))
    
  }



  useEffect(() => {
    dipach(fextchnotes)

  },[useDispatch])

  
  return (
    <div className="flex flex-wrap justify-center mt-5">
      {notes.map((note) => (
        <div
          className="relative bg-yellow-400 w-64 h-64 m-5 shadow-2xl overflow-hidden"
          key={note.id}
        >
          <div className="p-5">
            <h3 className="font-bold text-2xl mb-4">{note.title}</h3>
            <p>{note.content}</p>
          </div>
          <div className="absolute bg-yellow-400 w-12 h-12 rotate-45 -top-6 -left-6" />
         
          <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
          <Link to={`/edit/${note.id}`} >
            <button className="mr-2">
            
              <FaEdit size={20}  /> 

            </button>
            </Link>
            <button>
              <FaTrash size={20} onClick={() => handlxaan(note.id)} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notes;