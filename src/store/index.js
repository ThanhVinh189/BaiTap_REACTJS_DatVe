import { configureStore } from "@reduxjs/toolkit";
import bookingTicketReducer from "../MainPage/BookingMovie/slice";

export const store = configureStore({
  reducer: {
    // Add your child reducers here
    bookingTicketReducer,
  },
});
