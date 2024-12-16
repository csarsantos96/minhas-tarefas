import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [],
  reducers: {
    removerTarefa: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})
