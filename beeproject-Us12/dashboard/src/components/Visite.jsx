import React, { useEffect ,useState} from 'react';
import { Button, Image, Item ,Segment, Grid, Modal,Icon,Divider} from 'semantic-ui-react'
import { getvisite } from '../services/GetRucheApi';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

let info =[]
const handleclick= async()=> {
     info = await getvisite()
    return info
}





const paragraph = <Image src='' />
const Visite = ()=> {
    const [open, setOpen] =useState(false)
    const [visite , setvisite]= useState()
    const [datevisite ,setdatevisite] = useState()
    
    
    useEffect ( ()=> {
      
      getvisite().then(data=>{
        setvisite(data)
        setdatevisite(data.date)
        } )
        console.log(datevisite)
      
       }, [])
    
    return (
      <Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Item.Group relaxed>
     <Segment clearing>
    <Item>

      <Item.Image size='small' src='' />

      <Item.Content verticalAlign='middle' textAlign='middle'>
        <Item.Header><strong> Ici vous pouvez consulter les visites effectuer manuellement  </strong></Item.Header>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <br></br>
        <Modal
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={<Button onClick={handleclick} >Consulter vos visites</Button>}
        >
        <Modal.Header>Visite  </Modal.Header>
        <Modal.Content image scrolling>
        

        <Modal.Description>
          <p>
            Voici les donnees enregistrer lors de votre visite 
          </p>

          
          {visite && visite.map((item, index) => (
            <div> 
                  <strong>Date : {item.Date.substring(0,10)} </strong> <br></br>
                  <strong>Localisation :</strong> {item.Localisation}<br></br>
                  <strong>Numero de Ruche :</strong> {item. NumRuche}<br></br>
                  <strong>Cellule de reine :</strong> {item.CR }<br></br>
                  <strong>Nourriture :</strong> {item.Nourriture}<br></br>
                  <strong>Ponte Du Jour :</strong> {item.PonteDuJour}<br></br>
                  <strong>Presence De Cellule de Reine :</strong> {item.PresenceDeCR}<br></br>
                  <strong>Force De Colonie :</strong> {item.ForceDeColonie}<br></br>
                  <strong>Poids :</strong> {item.Poids }<br></br>
                  <strong>Comportement :</strong> {item.Comportement}<br></br>
                  <strong>Taille de Couvain :</strong> {item.TailleCouvain}<br></br>
                  <strong>Etat de Ruche :</strong> {item.EtatRuche }<br></br>
                  <strong>Nombre de Varoa :</strong> {item.NbrVaroa }<br></br>
                  <strong> Commentaire :</strong> {item.Commentaire}<br></br>
                  <strong>Action Réalisé :</strong> {item.ActionRéalisé}<br></br>
                  <strong>Action A Prevoir :</strong> {item.actionAPrevoir}<br></br>
                  <Divider />
        
            
            </div>
            
          ))}
          
          
            
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          Fermer <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
  
        </Item.Extra>
      </Item.Content>
    </Item>
    </Segment>

    {/* <Item>
      <Item.Content verticalAlign='middle'>
        
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          
          
        <Grid textAlign='center' verticalAlign='middle'>
          <Button >Programmer une visite</Button>
        </Grid>
        </Item.Extra>
      </Item.Content>
    </Item> */}

    <Item>
      <Item.Content verticalAlign='middle'>
        
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
        <Grid textAlign='center' verticalAlign='middle'>
          <Link to='/Fv'>
          <Button >Faire une visite</Button>
          </Link>
        </Grid>
        </Item.Extra>
      </Item.Content>
    </Item>
    

    
  </Item.Group>
  </Grid.Column>
        </Grid>
    )
}
export default Visite 