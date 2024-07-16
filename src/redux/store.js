import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsSlice from "./contactsSlice";
import filtersSlice from "./filtersSlice";

// Конфігурація для persist
const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"], // Збереження тільки поля items
};

// Застосування persistReducer до редюсера слайса контактів
const persistedContactsReducer = persistReducer(persistConfig, contactsSlice);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
