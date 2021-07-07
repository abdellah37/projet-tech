import React ,{useState , useEffect} from 'react';
import { Checkbox,Button,Form ,Grid, Header,Segment,TextArea} from 'semantic-ui-react'; 


const FaireVisite = ({Fairevisiter})=> {

    const [Localisation ,setLocalisation ]=useState();
    const [NumRuche,setNumRuche]=useState();
    const [date,setDate]=useState();
    const [CR,setCR]=useState();
    const [Nourriture,setNourriture]=useState();
    const [PonteDuJour,setPonteDuJour]=useState();
    const [PresenceDeCR,setPresenceDeCR]=useState();
    const [ForceDeColonie,setForceDeColonie]=useState();
    const [Poids,setPoids]=useState();
    const [Comportement,setComportement]=useState();
    const [TailleCouvain,setTailleCouvain]=useState();
    const [EtatRuche,setEtatRuche]=useState();
    const [NbrVaroa,setNbrVaroa ]=useState();
    const [Commentaire,setCommentaire]=useState();
    const [ActionRéalisé,setActionRéalisé]=useState();
    const [actionAPrevoir,setactionAPrevoir]=useState();

    const handleSubmit =  (evt)=> {
        evt.preventDefault()
       
        Fairevisiter(Localisation,NumRuche,date,CR,Nourriture,PonteDuJour,PresenceDeCR,ForceDeColonie,Poids,Comportement,TailleCouvain,EtatRuche,NbrVaroa,Commentaire,ActionRéalisé,actionAPrevoir) 
       
    }
   

    return (
        <>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h1' color='blue' textAlign='center'>
                <br></br>
                Entrez les données de votre visite 
            </Header>
            <Form size='large' onSubmit={handleSubmit} >
            <Segment stacked>
                <Form.Field>
                    <label>Localisation *</label>
                    <input placeholder='Localisation' name="Localisation" value ={Localisation} onChange={e=> setLocalisation(e.target.value)} required/>
                </Form.Field>
                <Form.Field>
                    <label>Numero de Ruche *</label>
                    <input placeholder='NumeRuche' name="NumeRuche" value ={NumRuche} onChange={e=>setNumRuche(e.target.value)} required/>
                </Form.Field>
                <Form.Field>
                    <label>Date *</label>
                    <input placeholder='Date'  name="Date" value ={date} onChange={e=>setDate(e.target.value)} required/>
                </Form.Field>
                <Form.Field>
                    <label>Compte rendu*</label>
                    <input placeholder='Compte Rendu' name="CR" value ={CR} onChange={e=>setCR(e.target.value)} required/>
                </Form.Field>
                <Form.Field>
                    <label>Nourriture*</label>
                    <input placeholder='Nourriture'  name="Nourriture" value ={Nourriture} onChange={e=>setNourriture(e.target.value)}required />
                </Form.Field>
                <Form.Field>
                    <label>Ponte du jour*</label>
                    <input placeholder='Ponte du jour'  name="PonteDuJour" value ={PonteDuJour} onChange={e=>setPonteDuJour(e.target.value)}required />
                </Form.Field>
                <Form.Field>
                    <label>Presence De Cellule de Reine* </label>
                    <input placeholder='Presence De Cellule de Reine '  name="PresenceDeCR" value ={PresenceDeCR} onChange={e=>setPresenceDeCR(e.target.value)}required />
                </Form.Field>
                <Form.Field>
                    <label>Force De la Colonie*</label>
                    <input placeholder='Force De la Colonie'  name="ForceDeColonie" value ={ForceDeColonie} onChange={e=>setForceDeColonie(e.target.value)}required />
                </Form.Field>
                <Form.Field>
                    <label>Poids *</label>
                    <input placeholder='Poids ' name="Poids" value ={Poids} onChange={e=>setPoids(e.target.value)}required />
                </Form.Field>
                <Form.Field>
                    <label>Comportement *</label>
                    <input placeholder='Comportement'  name="Comportement" value ={Comportement} onChange={e=>setComportement(e.target.value)}required />
                </Form.Field>
                <Form.Field>
                    <label>Taille Couvain *</label>
                    <input placeholder=' Taille Couvain'  name="TailleCouvain" value ={TailleCouvain} onChange={e=>setTailleCouvain(e.target.value)}required />
                </Form.Field>
                <Form.Field>
                    <label>Etat de la Ruche *</label>
                    <input placeholder='EtatRuche' name="EtatRuche" value ={EtatRuche} onChange={e=>setEtatRuche(e.target.value)} required/>
                </Form.Field>
                <Form.Field>
                    <label>Nombre de Varoa *</label>
                    <input placeholder='Nombre de Varoa'  name="NbrVaroa" value ={NbrVaroa} onChange={e=>setNbrVaroa(e.target.value)} required/>
                </Form.Field>
                <Form.Field>
                    <label>Commentaire*</label>
                    <TextArea placeholder='Commentaire' name="Commentaire" value ={Commentaire} onChange={e=>setCommentaire(e.target.value)} style={{ minHeight: 100 }}required />
                </Form.Field>
                <Form.Field>
                    <label>Action Réalisé*</label>
                    <TextArea placeholder='Action Réalisé' name="ActionRéalisé" value ={ActionRéalisé} onChange={e=>setActionRéalisé(e.target.value)}required />
                </Form.Field>
                <Form.Field>
                    <label>Action A Prevoir*</label>
                    <TextArea placeholder='action A Prevoir' name="actionAPrevoir" value ={actionAPrevoir} onChange={e=>setactionAPrevoir(e.target.value)}required />
                </Form.Field>
                
                    <Button type='submit' color='blue' >Submit</Button>  <br></br><br></br>

                    * champ obligatoire 
            </Segment>
            </Form>
            </Grid.Column>
        </Grid>
        </>
    )

}

export default FaireVisite ; 

