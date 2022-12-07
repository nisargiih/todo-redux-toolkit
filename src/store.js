import { configureStore, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
const useAdapter = createEntityAdapter()

const userSlice = createSlice({
    name: 'demo',
    initialState: useAdapter.getInitialState(),
    reducers: {
        userAddOne: useAdapter.addOne,
        userRemove: useAdapter.removeOne,
        userUpdate: useAdapter.updateOne,
        // closeInput : 
    },
})

export const { actions } = userSlice

export const selectors = useAdapter.getSelectors(state => state.user)

export default configureStore({
    reducer: {
        user: userSlice.reducer,
    }
})