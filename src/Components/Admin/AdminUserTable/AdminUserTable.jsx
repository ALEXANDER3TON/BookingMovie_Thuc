
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { deleteUserAPI, getListUser } from "../../../APIs/adminAPIS";
import { Button, Container, Table, TableBody, TableHead, Typography } from "@mui/material";

const AdminUserTable = () => {
  const { data: dataUserTable = [] } = useQuery({
    queryKey: ["admin-user-table"],
    queryFn: getListUser,
  });

  const handleDelete = async (userAPI) => {
    try {
      await deleteUserAPI(userAPI);
      //queryClient.invalidateQueries({ queryKey: ["admin-movie-table"] });
    } catch (err) {
      throw "Error!";
    }
  };

  return (
    <Container>
      <Typography style={{ textAlign: "center", fontWeight: 700 }}>
        QUẢN LÝ NGƯỜI DÙNG
      </Typography>
      <Table>
        <TableHead>
          <tr>
            <th>Tài khoản</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Loại người dùng</th>
            <th>Chức năng</th>
          </tr>
        </TableHead>
        <TableBody>
          {dataUserTable.map((item) => (
            <tr key={item.taiKhoan}>
              <td>{item.taiKhoan}</td>
              <td>{item.hoTen}</td>
              <td>{item.email}</td>
              <td>{item.soDT}</td>
              <td>{item.maLoaiNguoiDung}</td>
              <td>
                <Button variant="contained" onClick={() => handleEdit()}>
                  Edit
                </Button>
                <Button
                  variant="contained"
                  onClick={() => handleDelete(item.taiKhoan)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default AdminUserTable;
