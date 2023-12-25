import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH } from "./Routes/path";
import MainLayout from "./Layout/MainLayout";
import HomeModule from "./Module/Home/HomeModule";
import NotFound from "./Module/NotFound";
import Details from "./Module/Details";
import BookingPagse from "./Module/BookingPages/BookingPagse";
import Register from "./Module/Auth/Register";
import LogIn from "./Module/Auth/LogIn";
import AdminLayout from "./Layout/AdminLayout/AdminLayout";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { UserProvider } from "./contexts/useContext/useContext";
import AddUser from "./Module/Admin/AdminMovie/AddUser/AddUser";

function App() {
  return (
    // <UserProvider>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.HOME} element={<MainLayout />}>
            <Route index element={<HomeModule />} />
            <Route path={PATH.MOVIE_DETAILS} element={<Details />} />
            <Route path={PATH.BOOKING_MOVIE} element={<BookingPagse />} />
            <Route path={PATH.REGISTER} element={<Register />} />
            <Route path={PATH.LOG_IN} element={<LogIn />} />
          </Route>
          <Route path={PATH.ADMIN} element={<AdminLayout />}>
            {/* <Route index element={<AddUser />} /> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
    // </UserProvider>
  );
}

export default App;
