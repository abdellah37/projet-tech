import _ from 'lodash'
import React, { Component, useEffect, useState } from 'react'
import { Divider, Tab, Button, Grid } from 'semantic-ui-react'
import Cards from './Card'
import Data from './Data'
import { getData } from '../services/GetRucheApi'


const Ruches = ({ }) => {
  const [rucheData, setRucheData] = useState(null);


  const panes = [
    {
      menuItem: 'Ruches',
      render: () => <Tab.Pane attached={false}>  <Data data={rucheData} /> </Tab.Pane>,
    },

  ]
  useEffect(async () => {
    getData().then(data => setRucheData(data))

  }, [])
  return (
    <>
      <Tab
        menu={{ borderless: true, attached: false, tabular: false }}
        panes={panes}
      >
      </Tab>
      <Grid textAlign='center' style={{ height: '16vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 200 }}>
          <Button type='submit' >Ajouter Une Ruche </Button>
        </Grid.Column>
      </Grid>
    </>
  )
}
export default Ruches