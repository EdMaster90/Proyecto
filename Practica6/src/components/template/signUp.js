import { Avatar, Button, Checkbox, FormHelperText, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Formik, Field, Form, ErrorMessage,  } from 'formik';
import * as Yup from 'yup';



const Signup = () => {
    const paperStyle={padding: 20, width:300, margin:"0 auto"}
    const headerStyle={margin:0}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const marginTop={marginTop:5}
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const initialValues= {
        name:'',
        email:'',
        gender:'',
        phoneNumber:'',
        password:'',
        confirmPassword:'',
        termsAndConditions:false

    }
    const onSubmit=(values,props) => {
        console.log(values)
        console.log(props)
        setTimeout(()=>{

            props.resetForm()
            props.setSubmitting(false)


        },2000)
    }
    
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(5,"Es muy corto").required("Obligatorio"),
        email: Yup.string().email("Escribe un email valido").required("Obligatorio"),
        gender: Yup.string().oneOf(["male","female"],"Obligatorio").required("Obligatorio"),
        phoneNumber: Yup.number().typeError("Ingresa un número de teléfono valido"),
        password: Yup.string().min(8,"La longitud minima del password debe ser 8").required("Obligatorio"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')],"La contraseña no coincide").required("Obligatorio"),
        termsAndConditions: Yup.string().oneOf(["true"], "Se requiere que acepte los terminos y condiciones").required("Obligatorio"),
    })
    


    return (

        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon/>
                    </Avatar>
                    <h2 style={headerStyle}>Registrarse</h2>
                    <Typography variant="caption" gutterBottom> Llena el siguiente formulario para crear una cuenta</Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>                           
                            <Field as={TextField} fullWidth name="name" label='Nombre' variant="standard" placeholder="Escribe tu nombre" helperText={<ErrorMessage name="name"/>}/>
                            <Field as={TextField} fullWidth name="email" label='Correo Electrónico' variant="standard" helperText={<ErrorMessage name="email"/>}/>

                            <FormControl style={marginTop}>
                                <FormLabel id="demo-radio-buttons-group-label">Sexo</FormLabel>
                                <Field as={RadioGroup}
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    // name="radio-buttons-group"
                                    name="gender"
                                    style={{display:'initial'}}
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Femenino" />
                                    <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                                    
                                
                                </Field>
                            </FormControl>
                            <FormHelperText><ErrorMessage name="gender"/></FormHelperText>

                            <Field as={TextField} fullWidth name="phoneNumber" label='Teléfono' variant="standard" helperText={<ErrorMessage name="phoneNumber"/>} />

                            <Field as={TextField} fullWidth name="password" label='Contraseña' type="password" variant="standard" helperText={<ErrorMessage name="password"/>}/>

                            <Field as={TextField} fullWidth name="confirmPassword" label='Confirmar contraseña' variant="standard" type="password" helperText={<ErrorMessage name="confirmPassword"/>}/>
                        
                            <FormControlLabel control={
                                <Field as={Checkbox} name="termsAndConditions" {...label} defaultChecked={false}  />
                            }
                            label="Acepto los terminos y condiciones" 
                            />
                            <FormHelperText><ErrorMessage name="termsAndConditions"/></FormHelperText>

                            <Button type='submit' variant='contained' disabled={props.isSubmitting}  color='primary'>{props.isSubmitting?"Cargando":"Registrate"}</Button>
                        </Form>
                    )}
                </Formik>
                
            </Paper>
        </Grid>
    )
}

export default Signup;