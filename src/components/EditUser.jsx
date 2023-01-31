import { FormControl, FormGroup, InputLabel, Input, Button, Typography } from "@material-ui/core";
import { makeStyles,  } from "@material-ui/styles";
import react, { useEffect, useState } from "react";
import { editUser } from "../Service/api";
import {useNavigate, useParams} from 'react-router-dom';
import { getUsers } from "../Service/api";




const Usestyles=makeStyles(
    {
        container: {
            width: "50%",
            margin : "5% 0 0 25%",
            '& > *' : {
                marginTop: 20,
            }
        }
    }
)

const InitialValue = {
    Name : '',
    Email : '',
    Contact : '',
    Address : '',
    
}



const EditUser = () =>{
    const [user , setUser ] = useState(InitialValue); 
    const { Name , Email, Contact, Address} = user; 
    const{id}= useParams();
   const classes = Usestyles();
   const history = useNavigate();
   useEffect(() => {
       loadUserData();
   },[]);
   const loadUserData = async  () => {
   const response = await getUsers(id);
   setUser(response.data);
   }
   
   
   
   const onValueChange =(e) => {
        // console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value})
        // console.log(user);
        
   }
   const edituserDetails = async () => {
    history('/all');
    await  editUser (id,user);
    
    // console.log (user); 
}
    return (
        
        <FormGroup className={classes.container}>
            <Typography variant ='h4'> Edit User  </Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Name' value={Name} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)}  name='Email'value={Email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Contact</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Contact' value={Contact}/>
            </FormControl>
            <FormControl>
                <InputLabel>Address </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Address' value={Address}/>
            </FormControl>
            <Button variant="contained"  color="primary" onClick={() => edituserDetails()} > Update User </Button>
        </FormGroup>
    )
}
export default EditUser;