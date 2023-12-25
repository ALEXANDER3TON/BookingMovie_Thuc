
import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../Components/Admin/AdminHeader/AdminHeader";

import DashBoard from "../../Components/Admin/DashBoard/DashBoard";
import AdminFooter from "../../Components/Admin/AdminFooter/AdminFooter";
import { Box, Stack } from "@mui/material";
import AdminMovieTable from "../../Components/Admin/AdminMenu/AdminMovieTable";
import AdminUserTable from "../../Components/Admin/AdminUserTable";
import AddUser from "../../Module/Admin/AdminMovie/AddUser/AddUser";

const AdminLayout = () => {
  return (
    <Box>
      <Stack spacing={1}>
        <AdminHeader />
        <Stack spacing={2} direction={"row"}>
          <DashBoard />
          {/* <AdminMovieTable /> */}
          {/* <AdminUserTable /> */}
          {/* <AddUser /> */}
        </Stack>
        <AdminFooter />
      </Stack>
      <Outlet />
    </Box>
  );
};

export default AdminLayout;
