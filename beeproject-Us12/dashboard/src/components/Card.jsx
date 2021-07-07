import React from 'react';
import { Card, Icon } from 'semantic-ui-react'

const Cards = ({ handleRouche }) => {
  return (
    <>
      <Card centered>
        <Card.Content  header='Ruches' />
        <Card.Content onClick={ () => handleRouche(0)}>
            Ruche 1
        </Card.Content>
        <Card.Content onClick={ () => handleRouche(1)} >
            Ruche 2
        </Card.Content>
        <Card.Content onClick={ () => handleRouche(2)} >
            Ruche 3
        </Card.Content>

        <Card.Content extra>
          <Icon name='user' />
       </Card.Content>
      </Card>
    </>
  )
}

export default Cards;

//onClick={ () => handleRouche(0)}