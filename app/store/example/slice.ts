import { createSlice } from '@reduxjs/toolkit';

import { SlicesName } from '../types';

// export const todosAdapter = createEntityAdapter({
//   selectId: (todos) => todos.todoId,
// });

const initialState = {};

const slice = createSlice({
  initialState,
  name: SlicesName.TODO,
  reducers: {
    // addTodo: todosAdapter.addOne,
    // toggleTodo: (state, { payload }) => {
    //   const { id } = payload;
    //   const todo = state.entities[id];
    //   todo.completed = !todo.completed;
    // },
    // updateTodo: (
    //   state,
    //   { payload }: PayloadAction<{ id: string; text: string }>,
    // ) => {
    //   const { id, text } = payload;
    //   const todo = state.entities[id];
    //   todo.text = text;
    // },
    // deleteTodo: todosAdapter.removeOne,
  },
});

export const {
  // actions: { addTodo, deleteTodo, toggleTodo, updateTodo },
  reducer: todosReducer,
} = slice;
