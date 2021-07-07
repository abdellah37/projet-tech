
import React, { useState, useEffect } from 'react'

import ReactHtmlParser from 'react-html-parser';
import { Divider, Input, Button, Grid, Container } from 'semantic-ui-react';
import { GetRucher, getData } from '../services/GetRucheApi';



const Rouchers = () => {
  const [input, setNumRuche] = useState()

  const [val, setval] = useState()



  const numruche = async (evt) => {
    evt.preventDefault()

    let x = await GetRucher(parseInt(input))
    if (x) {
      const y = await getData(x)
      setval(y)
      console.log('exact', y)

    }
  }

  return (

    <>

      <Grid textAlign='center' verticalAlign='middle'>

        <Container textAlign='justified'>
          <p>
            <br></br>
            <strong>
              <p style={{ fontSize: '20px' }}>
                Vous pouvez chercher vos ruches avec vos numero de rucher contenant les ruches
        </p>
            </strong>

          </p>
          <form onSubmit={numruche}>

            <Input placeholder='Numero de Ruche' type='number' icon='search' value={input} onChange={e => setNumRuche(e.target.value)} />
            <br></br>
            <br></br>
            <Button type="submit">Rechercher</Button>
          </form>
          <br></br>
          <br></br>
          <Divider />

          {val && val.map((item, index) => (<div>
            <strong>Date de mise en service :</strong> {item.DateMiseEnService.substring(0, 10)}<br></br>
            <strong>GrilleAReine :</strong> {item.GrilleAReine}<br></br>
            <strong>Hausse :</strong> {item.Hausse}<br></br>
            <strong>Nourriseur:</strong> {item.Nourriseur}<br></br>
            <strong>NumCadre :</strong> {item.NumCadre}<br></br>
            <strong>NumReine :</strong> {item.NumReine}<br></br>
            <strong>NumRuche :</strong> {item.NumRuche}<br></br>
            <strong>PlaqueDeFond :</strong> {item.PlaqueDeFond}<br></br>
            <strong>Rucher :</strong> {item.Rucher}<br></br>
            <strong> TypeRuche :</strong> {item.TypeRuche}<br></br>

            <Divider />
          </div>))}

          <Button href='/AddRucher'> Ajouter des Ruches </Button>
          <br></br><br></br>
          <Button href='/Redirected'> Ajouter des Rucher</Button>
          <br></br><br></br>
          <Button href='/Cadre'> Ajouter Un cadre</Button>
          <br></br><br></br>
          <Button href='/Reine'> Ajouter Une Reine</Button>


        </Container>
      </Grid>

    </>
  )
}






export default Rouchers



// const panes = [
//   { menuItem: 'Rucher' , render: () => <Tab.Pane> <Ruches index={index} /> </Tab.Pane> },
//   { menuItem: 'Rucher', render: () => <Tab.Pane> </Tab.Pane> },

// ]

// const Ruchers = () => {
//     return (
//   <Tab 
//     menu={{ fluid: true, vertical: true }}
//     menuPosition='right'
//     panes={panes}
//   >

//       </Tab>
//     )}