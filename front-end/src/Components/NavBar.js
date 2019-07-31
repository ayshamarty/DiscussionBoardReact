import React from 'react';

import {
    Navbar,
    Button
 } from 'reactstrap';


function NavBar() {


    return(
        <div>
            <Navbar color="dark" light expand="md">
                <Button>Login</Button>
                <Button>Register</Button>
            </Navbar>
        </div>
    )   
}


export default NavBar;