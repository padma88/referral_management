import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Row, Col
} from "react-bootstrap"
import Table from "../SharedComponents/Table";
import TopArea from "./TopArea";

import { fetchAllUsers } from "../../services/users";
import { fetchAll } from "../../store/user";
import { NavLink } from "react-router-dom";

function Listing() {
  const dispatch = useDispatch();
  const DATA = useSelector((state) => state.user.allUsers);
  const COLUMNS = [
    {
      Header: "Created At",
      accessor: "createdAt",
    },
    {
      Header: "First Name",
      Cell: (data) => {
        return (
          <NavLink to={`${data.row.original.id}`}>
            {data.row.original.firstName}
          </NavLink>
        );
      },
    },
    {
      Header: "Last Name",
      accessor: "lastName",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Role",
      accessor: "role",
    },
  ];
  useEffect(() => {
    fetchAllUsers().then((response) => {
      if (response.data.statusCode === 200) {
        dispatch(fetchAll(response.data.data));
      }
    });
  }, []);

  return (
    <Row>
      <Col sm={12}>
        <TopArea />
        <Table DATA={DATA} COLUMNS={COLUMNS}></Table>
      </Col>
    </Row>
  );
}

export default Listing;
