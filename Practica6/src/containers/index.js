import Login from "@/components/template/longinComponent";
import Signup from "@/components/template/signUp";
import { Box, Paper, Tab, Tabs, Typography } from "@mui/material";
import React from "react";

const SignInOutContainer = () => {

    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    const paperStyle={width:340, margin:"20px auto"}

    function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box >
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
    }

      
    return(
        <Paper elevation={20} style={paperStyle}>
            <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                <Tab label="Iniciar Sesión" />
                
                <Tab label="Resgistrarse" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Login handleChange={handleChange}/>
                
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Signup/>
            </TabPanel>
        </Paper>


    );
}

export default SignInOutContainer;