import { Datagrid, TextField,List ,
    Edit,SimpleForm,EditButton,
    TextInput,Create,
    
} from "react-admin"

export  const listUsers =(props) =>(  
    <List {...props}>
   <Datagrid>   
    <TextField  source="id"/>
    <TextField  source="name"/>
    <TextField  source="pric"/>
  <EditButton basePath='/users'/>
  </Datagrid>
    </List> 
    
)
export  const editUser =(props) =>(  
    <Edit {...props}>
   <SimpleForm>   
    <TextInput  source="id"/>
    <TextInput  source="name"/>
    <TextInput  source="pric"/>
   </SimpleForm>
    </Edit> 
    
)
export  const createUser =(props) =>(  
    <Create {...props}>
   <SimpleForm>   
    <TextField  source="id"/>
    <TextField  source="name"/>
    <TextField  source="pric"/>
   </SimpleForm>
    </Create> 
    
)
