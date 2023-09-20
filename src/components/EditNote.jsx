import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { useEffect,useState } from 'react';
import { fextchnotes } from '../store/api/CreateSlice';
import { useParams } from 'react-router-dom';
import { editNote } from '../store/api/CreateSlice';

const EditNote = (props) => {
  const [cuurnte , setcurrente] = useState({
    title: '',
    content: '',
  })
  const params = useParams()


  const notes = useSelector((stste) => stste.name.notes

  )


  const disocht = useDispatch()


  useEffect(()=> {
    disocht(fextchnotes)

  },[disocht])


  useEffect(()=> {


      const xaan = notes.find((item) => item.id == Number(params.id))
      if(xaan) {
        setcurrente({
          title: xaan.title,
          content: xaan.content,
        })
      }
  },[notes , params.id])


  const initialValues = {
    title: "",
    content: ""
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    content: Yup.string().required('Content is required'),
  });



  const handleSubmit = (values) => {
 
    disocht(editNote({
      noteId: Number(params.id),
      updateNote: values,
    }))
  };

  

    // Reset the form after submission


  return (
    <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-5">
            <Field
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              className="border border-gray-300 shadow p-3 w-full rounded mb-"
            />
            <ErrorMessage name="title" component="div" className="text-red-500" />
          </div>

          <div className="mb-5">
            <Field
              as="textarea"
              name="content"
              placeholder="Body"
              className="border border-gray-300 shadow p-3 w-full rounded mb-"
            />
            <ErrorMessage name="content" component="div" className="text-red-500" />
          </div>

          <button
            type="submit"
            className="block w-full bg-yellow-400 text-black font-bold p-4 rounded-lg hover:bg-yellow-500"
          >
            Update Note
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default EditNote;
