
import { QueryClient, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getListMovieAPI } from "../../../APIs/movieAPI";
import { deleteMovieAPI } from "../../../APIs/adminAPIS";
import { Button, Container, Table, TableBody, TableHead, Typography } from "@mui/material";

const AdminMovieTable = () => {
  const { data: dataMovieTable = [] } = useQuery({
    queryKey: ["admin-movie-table"],
    queryFn: getListMovieAPI,
  });

  const handleDelete = async (movieID) => {
    try {
      await deleteMovieAPI(movieID);
    } catch (err) {
      throw "Error!";
    }
  };

  return (
    <Container>
      <Typography style={{ textAlign: "center", fontWeight: 700 }}>
        QUẢN LÝ PHIM
      </Typography>
      <Table>
        <TableHead>
          <tr>
            <th>Mã Phim</th>
            <th>Hình Ảnh</th>
            <th>Tên Phim</th>
            <th>Mô tả</th>
            <th>Hành động</th>
          </tr>
        </TableHead>
        <TableBody>
          {dataMovieTable.map((item) => (
            <tr key={item.maPhim}>
              <td>{item.maPhim}</td>
              <td>
                <img
                  src={item.hinhAnh}
                  style={{ width: "50px", height: "75px" }}
                />
              </td>
              <td>{item.tenPhim}</td>
              <td>{item.moTa}</td>
              <td>
                <Button
                  variant="contained"
                  onClick={() => handleEdit(item.maPhim)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  onClick={() => handleDelete(item.maPhim)}
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

export default AdminMovieTable;
