import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pet } from '../types/Pet';

interface PetsState {
  pets: Pet[];
}

const initialState: PetsState = {
  pets: [],
};

export const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    setPets: (state, action: PayloadAction<Pet[]>) => {
      state.pets = action.payload;
    },
    addPet: (state, action: PayloadAction<Pet>) => {
      state.pets.push(action.payload);
    },
  },
});

export const { setPets, addPet } = petsSlice.actions;

export default petsSlice.reducer;
