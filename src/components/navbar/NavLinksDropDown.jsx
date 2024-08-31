import React from 'react'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GoogleIcon from '@mui/icons-material/Google';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Box from '@mui/material/Box';
import "../sidebar/Sidebar.scss"


const NavLinksDropDown = ({props}) => {
    const renderSwitch = (props) => {
        switch(props){
            case 1: {
                return(

                        <p>
                        Tell us what you need and try the easy way to get quotes!
                        </p>

                );
            }
            case 2: {
                return (

                        <List>
                        <div className="call-to-action">
                        <button class="sign-in">Sign In</button>
                        <button class="join">Join</button>
                        </div>
                        <Divider>Or</Divider>
                        <div className="call-to-action-icons">
                        <img src="src/assets/facebook.png" clas/>
                        <img src="src/assets/linkdin.png"/>
                        <XIcon/>
                        <GoogleIcon/>
                        </div>
                        <div class="call-to-action-text">
                        <p>By clicking Sign In, Join Free or Continue with<br/>Facebook, Linkedin, Twitter, Google, I agree to<br/>the <a>User Agreement</a> and the <a>Privacy Policy</a></p>
                        </div>
                        <Divider variant="fullWidth" component="div"/>
                        {['Messages', 'Quotes', 'Orders', 'Favorites', 'Browsing History'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                            <ListItemText primary={text} disablePadding />
                            </ListItemButton>
                        </ListItem>
                        ))}
                         </List>

                )
        
            }
            case 3: {
                return (

                        <List>
                        <div className="call-to-action">
                        <button class="sign-in">Sign In</button>
                        <button class="join">Join</button>
                        </div>
                        <Divider>Or</Divider>
                        <div className="call-to-action-icons">
                        <img src="src/assets/facebook.png" clas/>
                        <img src="src/assets/linkdin.png"/>
                        <XIcon/>
                        <GoogleIcon/>
                        </div>
                        <div class="call-to-action-text">
                        <p>By clicking Sign In, Join Free or Continue with<br/>Facebook, Linkedin, Twitter, Google, I agree to<br/>the <a>User Agreement</a> and the <a>Privacy Policy</a></p>
                        </div>
                        <Divider variant="fullWidth" component="div"/>
                        {['Messages', 'Quotes', 'Orders', 'Favorites', 'Browsing History'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                            <ListItemText primary={text} disablePadding />
                            </ListItemButton>
                        </ListItem>
                        ))}
                         </List>

                )
        
            }
            case 4:
            {
                return null
        
            }
          }
        
    }
    console.log(props)
    return (
        <div class="dropdown-container">
            {renderSwitch(props)}
            
        </div>
    )
 
}

export default NavLinksDropDown