
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";





const initialState  = {
    notes : [],
    status : 'idol',
    error : null
}



 export  const fextchnotes  = createAsyncThunk("notes/fethc_notes" , async()=> {

    const responce =  await axios.get("http://localhost:9000/notes")
     return  responce 



 })



 export const addNote = createAsyncThunk("note/addNote", async (newNote) => {
    const response = await axios.post("http://localhost:9000/create_note", newNote);
    return response.data;
});


export const deletnote = createAsyncThunk("delet.delte_note"  , async(id) => {
    
    axios.delete(`http://localhost:9000/delete_note/${id}`)

    return id


})




export const editNote = createAsyncThunk("note/editNote", async ({noteId, updateNote}) => {
    const response = await axios.put(`http://localhost:9000/update_note/${noteId}`, updateNote);
    return response.data;
});





export const CreateSlice = createSlice({
    name : 'notes',
    initialState,
    reducers : {},
    extraReducers : (builder) =>{

        builder .addCase(fextchnotes.pending , (state) => {
            state.status  = "Loading",
            state.error = null
        })  . addCase(fextchnotes.fulfilled , (state,acttion) => {
            state.notes = acttion.payload,
            state.status  = "Succed"
        })    . addCase(fextchnotes.rejected , (state,acttion) => {
            
            state.status  = acttion.error.message
        })  .addCase(addNote.fulfilled , (state,acttion) => {
            state.notes.push(acttion.payload)
        }) .addCase(deletnote.fulfilled , (state,acttion) => {
            const id = acttion.payload

            state.notes =  state.notes.filter((item) => item.id !== id)
        }) .addCase(editNote.fulfilled, (state, action) => {
            const {id, title, content} = action.payload;
            const existingNote = state.notes.find((note) => Number(note.id) === Number(id));
            if (existingNote) {
                existingNote.title = title;
                existingNote.content = content;
    
     


        
       
    } 
    

})


    }
    })

    

export default  CreateSlice.reducer