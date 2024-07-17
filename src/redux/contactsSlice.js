import { createSlice, nanoid } from "@reduxjs/toolkit";
import contactsData from '../contacts.json'

const initialState = {
  items: contactsData,
};


const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});


export const { addContact, deleteContact } = contactsSlice.actions;


export const selectContacts = (state) => state.contacts.items;


export default contactsSlice.reducer;
