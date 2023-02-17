import { Grid, Paper, Avatar, TextField,FormControlLabel,Checkbox,Button,Typography,Link  } from "@mui/material";
import React from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const Login = ({handleChange}) => {

    const paperStyle={padding: 20, height: '78vh', width:300, margin: "0 auto"}
    const avatarStyle = {backgroundColor:'#1bbd7e'}
    const btnstyle = {margin: '8px 0'}
    const textFieldStyle = {margin: '8px 0'}
    
    return(
        <Grid>
            <Paper style={paperStyle}>
                <Grid align="center">

                <Avatar style ={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Iniciar sesión</h2> 
                </Grid>
                <TextField style={textFieldStyle} variant="standard" label='Usuario' placeholder='Escribe tu nombre de usuario' fullWidth required/>
                <TextField style={textFieldStyle} variant="standard" label='Password' placeholder='Escribe tu contraseña' type='password' fullWidth required/>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Recuerdame" />
                <Button type='submit' color='primary' variant="contained"  fullWidth style={btnstyle}> Entrar</Button>
                
                <Typography>
                    <Link href="#">
                        ¿Olvidaste tu contraseña?
                    </Link>
                </Typography>

                <Typography>
                    ¿No tienes una cuenta?
                    <Link href="#" onClick={()=>handleChange("event",1)}>
                        ¡Registrate!
                    </Link>
                </Typography>
                
                

                
            </Paper>

        </Grid>
    );
}

export default Login