import { createSlice, nanoid } from "@reduxjs/toolkit";

// Початковий стан слайсу контактів
const initialState = {
  items: [],
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

// Експортуємо екшени
export const { addContact, deleteContact } = contactsSlice.actions;

// Оголошуємо селектор
export const selectContacts = (state) => state.contacts.items;

// Експортуємо редюсер
export default contactsSlice.reducer;
