import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { get, push, query, ref, remove, set, update } from "firebase/database";
import db from "../../firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";



var API_URL = "http://localhost:3000/taskList"



export const createTask = createAsyncThunk('/createTask', async(data) => {
    console.log(data);
    await addDoc(collection(db,'taskList'), data)
    return data
})



export const viewTask = createAsyncThunk('/viewTask', async() => {
    
   var arr = [];

   const result = await getDocs (query(collection(db,'taskList')))

   console.log(result);

   result.forEach((ele) => {
    const task ={
        id:ele.id,
        ...ele.data()
    }
    arr.push(task)
   })

   return arr
   
})



export const deleteTask = createAsyncThunk('/deleteTask', async(id) => {
    await deleteDoc(doc(db,`taskList/${id}`))
    return id
})


export const updateTask = createAsyncThunk('/updateTask', async(data) => {
  await updateDoc(doc(db,`taskList/${data.id}`), data)
  return data
})




const taskSlice = createSlice({

    name:'task',
    initialState:{
        taskList:[]
    },
    
    reducers:{},
    extraReducers:(res) => {
        res
        .addCase(createTask.fulfilled, (state, action) => {
            state.taskList.push(action.payload)
        })
        .addCase(viewTask.fulfilled, (state, action) => {
            state.taskList = action.payload
        })
        .addCase(deleteTask.fulfilled, (state,action) => {
            const {id} = action.payload
            const filterData = state.taskList.filter( (task) => task.id !== id )
            state.taskList = filterData
            location.reload()
        })
        .addCase(updateTask.fulfilled, (state, action) => {
            const {id} = action.payload

            const index = state.taskList.findIndex( (task) => task.id === id )

            if(index != -1){
                state.taskList[index] = action.payload
            }else{
                alert ("Task Not Found...")
            }
        })
    }
})



export default taskSlice.reducer;