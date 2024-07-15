import { createSlice, nanoid } from "@reduxjs/toolkit";

// Початковий стан слайсу контактів
const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.items.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      state.contacts.items = state.contacts.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});


export const { addContact, deleteContact } = contactsSlice.actions;


export const selectContacts = (state) => state.contacts.items;


export default contactsSlice.reducer;
