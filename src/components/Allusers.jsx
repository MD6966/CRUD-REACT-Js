import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Table,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import { getUsers } from "../Service/api";
import { Link } from "react-router-dom";
import { deleteUserData } from "../Service/api";

const UseStyles = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  th: {
    "& > *": {
      background: "#000000",
      color: "#FFFFFF",
      fontSize: "20px",
    },
  },
});
const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const classes = UseStyles();
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response);
    setUsers(response.data);
  };
  const deleteUser = async(id) => {
        await deleteUserData(id) ;
        getAllUsers();
  }
  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.th}>
          <TableCell> Id</TableCell>
          <TableCell> Name</TableCell>
          <TableCell> Email</TableCell>
          <TableCell> Contact</TableCell>
          <TableCell> Address </TableCell>
          <TableCell> </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow>
            <TableCell> {user.id}</TableCell>
            <TableCell> {user.Name}</TableCell>
            <TableCell> {user.Email}</TableCell>
            <TableCell> {user.Contact}</TableCell>
            <TableCell> {user.Address}</TableCell>
            <TableCell>
              <Button variant="contained" color ="primary" style={{marginRight: 10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
              <Button variant="contained" color ="secondary" onClick={() => deleteUser(user.id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default AllUsers;
