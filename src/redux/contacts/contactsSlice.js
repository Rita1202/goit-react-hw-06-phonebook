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
      state.contacts.push(payload);
    },
    deleteContacts(state, { payload }) {
      state.contacts = state.contacts.filter(({ id }) => id !== payload.id);
    },
  },
});

export const { addContact, deleteContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
