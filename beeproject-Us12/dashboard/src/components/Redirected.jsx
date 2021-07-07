import React, { useState } from 'react' 
import { Checkbox,Button,Form ,Grid, Header,Segment,TextArea,Container} from 'semantic-ui-react'; 
import {Link} from 'react-router-dom'

const Redirected = ({Ajouter})=> {
    const [Localisation,setLocalisation]=useState()
    const [NumRucher,setNumRucher]=useState()

    const handleSubmit = (evt)=> {
        evt.preventDefault()
        Ajouter(Localisation,NumRucher)
    }
    
    return ( 
        <>
        
           
        
         <Grid textAlign='center' style={{ height: '10vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header  as='h3' color='red' >
                <br></br>
                Vous avez rentrer un numero de rucher qui n'existe pas si vous voulez cree un rucher vous pouvez remplir le formulaire ci dessous <br></br> Ou changer de numero de rucher   <Link to ="/AddRucher"> ici 
            </Link> 
            </Header>
            <Form size='large' onSubmit={handleSubmit} >
            <Segment stacked>
                <Form.Field>
                    <label>Localisation *</label>
                    <input placeholder='Localisation' name="Localisation" value ={Localisation} onChange={e=> setLocalisation(e.target.value)} required/>
                </Form.Field>
                <Form.Field>
                    <label>Numero de Rucher *</label>
                    <input placeholder='NumeRucher' name="NumeRucher" value ={NumRucher} onChange={e=>setNumRucher(e.target.value)} required/>
                </Form.Field>

               
                <Button type='submit'> Ajouter </Button>
                <br></br><br></br>
                * champs obligatoires  
                
        </Segment>
        </Form>
        </Grid.Column>
        </Grid>

        </>
    )


}
export default Redirected