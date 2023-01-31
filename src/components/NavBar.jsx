import { AppBar, Toolbar, Typography , makeStyles } from "@material-ui/core"
import { NavLink } from "react-router-dom";
const UseStyles = makeStyles({
    header : {
            background : "#111111",
    },
    navb : {
        textDecoration: "none",
        color:"#FFFFFF",
        marginRight: 30,
        fontSize: 20, 
    }

    
})

const NavBar = () => {
    const classes= UseStyles();       
    return (
                <AppBar className={classes.header} position='static'>
                    <Toolbar>
                    <NavLink to ="./" className={classes.navb} > React CRUD App </NavLink>
                    <NavLink to ="all" className={classes.navb} > All users </NavLink>
                    <NavLink to ="add" className={classes.navb} > Add User </NavLink>
                    
                    </Toolbar>
                    </AppBar>
            )
}

export default NavBar;