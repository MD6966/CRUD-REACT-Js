import { FormControl, FormGroup, InputLabel, Input, Button, Typography } from "@material-ui/core";
import { makeStyles, mergeClasses } from "@material-ui/styles";
import { useState } from "react";
import { addUser } from "../Service/api";
import {useNavigate} from 'react-router-dom';



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



const AddUsers = () =>{
    const [user , setUser ] = useState(InitialValue); 
    const { Name , Email, Contact, Address} = user; 
   const classes = Usestyles();
   const history = useNavigate();
   
   const onValueChange =(e) => {
        // console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value})
        // console.log(user);
        
   }
   const adduserDetails = async () => {
    await  addUser (user);
    history('/all');
    
    // console.log (user); 
}
    return (
        
        <FormGroup className={classes.container}>
            <Typography variant ='h4'> Add User  </Typography>
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
            <Button variant="contained"  color="primary" onClick={() => adduserDetails()} > Add User </Button>
        </FormGroup>
    )
}
export default AddUsers;