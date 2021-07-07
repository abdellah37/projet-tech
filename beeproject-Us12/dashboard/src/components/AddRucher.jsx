import React ,{useState , useEffect} from 'react';
import { Checkbox,Button,Form ,Grid, Header,Segment,TextArea} from 'semantic-ui-react'; 

const AddRucher = ({addRucher})=> {

    const [DateMiseEnService,setDateMiseEnService]=useState()
    const [GrilleAReine,setGrilleAReine]=useState()
    const [Hausse,setHausse]=useState()
    const [Nourriseur,setNourriseur]=useState()
    const [NumCadre,setNumCadre]=useState()
    const [NumReine,setNumReine]=useState()
    const [NumRuche,setNumRuche]=useState()
    const [PlaqueDeFond,setPlaqueDeFond]=useState()
    const [Rucher,setRucher]=useState()
    const [TypeRuche,setTypeRuche]=useState()


    const handleSubmit = async(evt)=> {
        evt.preventDefault()
        addRucher(TypeRuche,Rucher,PlaqueDeFond,NumRuche,NumReine,NumCadre,Nourriseur,Hausse,GrilleAReine,DateMiseEnService)
    }




    return(
        <>
         <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h1' color='blue' textAlign='center'>
                <br></br>
                Entrez les données de votre ruche 
            </Header>
            <Form size='large' onSubmit={handleSubmit} >
            <Segment stacked>
                <Form.Field>
                    <label>Date de mise en service *</label>
                    <input placeholder='Date de mise en service' name="DateMiseEnService" value ={DateMiseEnService} onChange={e=> setDateMiseEnService(e.target.value)} required/>
                </Form.Field>
                <Form.Field>
                    <label>Grille a reine *</label>
                    <input placeholder='Grille a reine' name="GrilleAReine" value ={GrilleAReine} onChange={e=>setGrilleAReine(e.target.value)} required/>
                </Form.Field>
                <Form.Field>
                    <label>Hausse *</label>
                    <input placeholder='Hausse'  name="Hausse" value ={Hausse} onChange={e=>setHausse(e.target.value)} required/>
                </Form.Field>
                <Form.Field>
                    <label>Nourriseur*</label>
                    <input placeholder='Nourriseur' name="Nourriseur" value ={Nourriseur} onChange={e=>setNourriseur(e.target.value)} required/>
                </Form.Field>
                <Form.Field>
                    <label>NumCadre *</label>
                    <input placeholder='NumCadre'  name="NumCadre" value ={NumCadre} onChange={e=>setNumCadre(e.target.value)}required />
                </Form.Field>
                <Form.Field>
                    <label>NumReine*</label>
                    <input placeholder='NumReine'  name="NumReine" value ={NumReine} onChange={e=>setNumReine(e.target.value)}required />
                </Form.Field>
                <Form.Field>
                    <label>NumRuche * </label>
                    <input placeholder='NumRuche '  name="NumRuche" value ={NumRuche} onChange={e=>setNumRuche(e.target.value)}required />
                </Form.Field>
                <Form.Field>
                    <label>PlaqueDeFond*</label>
                    <input placeholder='PlaqueDeFond'  name="PlaqueDeFond" value ={PlaqueDeFond} onChange={e=>setPlaqueDeFond(e.target.value)}required />
                </Form.Field>
                <Form.Field>
                    <label>Rucher *</label>
                    <input placeholder='Rucher ' name="Rucher" value ={Rucher} onChange={e=>setRucher(e.target.value)}required />
                </Form.Field>
                <Form.Field>
                    <label>TypeRuche *</label>
                    <input placeholder='TypeRuche'  name="TypeRuche" value ={TypeRuche} onChange={e=>setTypeRuche(e.target.value)}required />
                    
                    
                </Form.Field>
                <Button type='submit'>Ajouter</Button>
                </Segment>
                
                </Form>
                
                </Grid.Column>
                </Grid>
                </>
        
    )
}
export default AddRucher