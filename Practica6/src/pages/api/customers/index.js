import db from "@/database/models";

export default function handler(req, res) {
    switch(req.method){
        case 'GET':
            return customersList(req, res);
        case 'POST':
            return addCustomer(req, res);
        default:
            res.status(404).json({
                message:'Rescurso no encontrado',

            })
    }
}

const customersList = async (req,res) => {
    try{

        const customers = await db.Customer.findAll();

        return res.json(customers);

    }catch(error){

        return res.status(400).json({
            message:'Error al procesar la petición',
        });
    }
}

const addCustomer = async (req,res) => {
    try{
        console.log(req.body);
        const Customer = await db.Customer.create(req.body);
        return res.json({
            message:'Cliente registrado',
        });

    }catch(error){
        console.log(error);
        let errors =[];
        //si hay errores, tomar la info de cada uno
        if (error.errors){
            errors = error.errors.map((item) => (
                { 
                    field: item.path, 
                    message: item.validatorKey === 'not_unique' 
                        ? 'Ya existe un registro con este dato.' 
                        :  item.message
                }
            ));
        }
        return res.status(404).json({
            message:'Error al procesar la petición',
            errors
        });
    }
}