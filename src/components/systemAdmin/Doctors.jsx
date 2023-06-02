import { Datagrid, TextField,List ,
    Edit,SimpleForm,EditButton,
    TextInput,Create,
} from "react-admin"


export  const listDoctors = (props) =>(  
    <List {...props}>
   <Datagrid >   
    <TextField  source="id"/>
    <TextField  source="name"/>
    <TextField  source="img"/>
    <TextField  source="major"/>
    <EditButton basePath='/doctors'/>
   </Datagrid>
    </List> 
    
)

export const editDoctor = (props)=>(
    <Edit {...props}> 
    <SimpleForm>
        <TextInput  source="name"/>
        {/* <TextInput  source="brand"/>
        <TextInput  source="price"/> */}
    </SimpleForm>
    </Edit>
)

export const createDoctor = (props)=>(
    <Create {...props}> 
    <SimpleForm>
        <TextInput  source="name"/>
        {/* <TextInput  source="brand"/>
        <TextInput  source="price"/> */}
    </SimpleForm>
    </Create>
)
