import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';

export default function ProductCard({ index, product, onDelete, onSave }) {
  const [edit, setEdit] = React.useState(false);
  const [data, setData] = React.useState(product);

  const handlEdit = () => {
    setEdit(!edit);
  }

  const hadleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });    
  }

  const handleSave = () => {
    if(onSave){
      onSave(index,data);
    }
    setEdit(false);
  }

  const handleCancel = () => {
    setData({...product});
    setEdit(false);
  }

  const handleDelete = () => {
    if(onDelete){
      onDelete(index);
    }
  }



  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image= {data.image}
        title="green iguana"
      />
      <CardContent>
        <Grid container>
          <Grid item sx={12}>
            {/* Si edit está en falso entonces */}
            {!edit && (
              <Typography gutterBottom variant="h5" component="div">
              {data.materia}
             </Typography>
            )}

            {edit && (
              <TextField 
              label="Materia" 
              variant="standard" 
              name = "materia"
              value={data.materia}
              onChange = {hadleChange}
              fullWidth
              />
            )}
            
            
          </Grid>
          <Grid item sx={12}>
            {!edit && (
              <Typography variant="body2" color="text.secondary">
                {data.profesor}
              </Typography>
            )}  
            
            {edit && (
              <TextField sx={{marginTop:2}}
              label="Profesor" 
              variant="standard"
              name ="profesor"
              value={data.profesor}
              onChange = {hadleChange}
              fullWidth
              />
            )}
          </Grid>
        </Grid>   
          {!edit && (
            <Typography variant="body2" color="text.secondary">
              {data.horario}
            </Typography>
          )}

            {edit && (
              
              <TextField sx={{marginTop:2}}
              label="Horario" 
              variant="standard" 
              name ="horario"
              value={data.horario}
              onChange = {hadleChange}
              fullWidth
              />
            )}
      </CardContent>
      <CardActions>
        {!edit ? (
          <Button size="small" onClick={handlEdit}>Editar</Button>
        ):
        (
          <>
            <Button size="small" onClick={handlEdit}>Guardar</Button>
            <Button size="small" color="error" onClick={handleCancel}>Cancelar</Button>
          </>
        )}
        <Button size="small" color="error" onClick={handleDelete}>Eliminar</Button>
        
        
      </CardActions>
    </Card>
  );
}