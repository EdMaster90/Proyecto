
import ProductCard from "@/components/template/ProductCard";
import { Button, Grid, Paper, TextField } from "@mui/material";
import { useState } from "react";

export default function Products(product) {
    const [products, setProducts] = useState (
        [
            {id:1, materia: "Desarrollo Web Profesional", profesor: "Mtro. Alfonso Felipe", horario: ' Miércoles 13-15, Viernes 13-15', image: "https://img.freepik.com/foto-gratis/programador-profesional-trabajando-tarde-oscura-oficina_1098-18705.jpg?w=740&t=st=1675309429~exp=1675310029~hmac=5f77d670ee1e4fda5bb67c11ca79b0d0697362d068c9752b1b460b6593cc3029" },
            {id:2, materia: "Matemáticas para Ingeniería", profesor: "Mtro. David García", horario: ' Miércoles 15-18, Viernes 16-18', image:"https://img.freepik.com/vector-gratis/pizarra-elementos-matematicos_1411-88.jpg?w=740&t=st=1675309300~exp=1675309900~hmac=699302868f3615b5c15a70f71c3822788e27c321761536f942c9234b201cb264"},
            {id:3, materia: "Seguridad en el Desarrollo de Software", profesor: "Mtro. Iván Antonio", horario: ' Martes 16-18,M Jueves 14 -16',image:"https://img.freepik.com/fotos-premium/hombre-negocios-usando-candado-digital-asegurar-su-representacion-3d-datos_117023-347.jpg?w=826" },
            {id:4, materia: "Planeación y Organización del trabajo", profesor: "Mtra. Alejandra Morán", horario: ' Martes 14-16, Jueves 13-14',image:"https://img.freepik.com/vector-gratis/equipo-analisis-foda-que-trabaja-lista-sus-oportunidades-estrategia-seguimiento-matriz-analisis-foda-concepto-planificacion-estrategica-ilustracion-aislada-violeta-vibrante-brillante_335657-399.jpg?w=740&t=st=1675309580~exp=1675310180~hmac=9850f3decd8458c25af92d2a8982d1978b07d59988ff3b4e32b55f740db27d68" }
        ]
        
    );


    // Manejar el CRUD
    const handleDelete = (index) => {
        // Eliminar el indice en el arreglo
        // Clonar el arreglo
        const productsCopy = [...products];
        productsCopy.splice(index,1);
        setProducts([...productsCopy]);
    }

    const handleSave = (product,index) => {
        // Actualizar el registro  el registro en el arreglo
        // Ver como actulizar el elemento en el arreglo
        const productsCopy = [...products];
        productsCopy.push(product,index);
        setProducts([...productsCopy]);

    }

    const renderProducts = () => {
        return products.map((item,index) => (
            <Grid key={item.id} item xs={12} ms={4} lg={4} xl={3}>
                <ProductCard 
                    product={item} 
                    index={index}
                    onSave={handleSave}
                    onDelete={handleDelete}
                />
            </Grid>
        ))
    };

    const renderForm = () => {
        return (
            <TextField label="Materia" variant="standard" />
        )
    };

    return (
        <Paper>
            <h1>Materias</h1>
            <Button variant="contained"  color="success" size="large" sx={{marginBottom:2, marginLeft:2}} onClick={renderForm}>
                Agregar
            </Button>
            <Grid container spacing={2} sx={{justifyContent:"center"}}>
                {renderProducts()}
                
            </Grid>
            
          
        </Paper>
    );
}
