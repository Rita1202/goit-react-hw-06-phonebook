import { createSlice } from '@reduxjs/toolkit';
import initialData from '../../initialData.json';

const initialState = {
  contacts: initialData,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, { payload }) {
      const repeat = state.contacts.find(el => {
        return el.name === payload.name;
      });

      if (repeat) {
        alert(`${payload.name} is already in contacts`);
      } else {
        state.contacts.push(payload);
      }
    },
    deleteContacts(state, { payload }) {
      state.contacts = state.contacts.filter(({ id }) => id !== payload.id);
    },
  },
});

export const { addContact, deleteContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
