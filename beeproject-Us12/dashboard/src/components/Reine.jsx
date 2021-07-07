import React, { useState } from 'react'
import { Checkbox, Button, Form, Grid, Header, Segment, TextArea, Container } from 'semantic-ui-react';

const Reine = ({ addReine }) => {
    const [NumReine, setNumReine] = useState()
    const [CodeGénéalogique, setCodeGénéalogique] = useState()
    const [Marquée, setMarquée] = useState()
    const [Clippée, setClippée] = useState()
    const [DateNaissance, setDateNaissance] = useState()

    const handleSubmit = (evt) => {
        evt.preventDefault()
        addReine(NumReine, CodeGénéalogique, Marquée, Clippée, DateNaissance)

    }
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h1' color='blue' textAlign='center'>
                    <br></br>
                Entrez les données de votre Reine
            </Header>
                <Form size='large' onSubmit={handleSubmit} >
                    <input placeholder='Clippée' name="Clippée" value={Clippée} onChange={e => setClippée(e.target.value)} required />
                    <Segment stacked>
                        <Form.Field>
                            <label>Numero reine *</label>
                            <input placeholder='Numero reine' name="Numero reine" value={NumReine} onChange={e => setNumReine(e.target.value)} required />
                        </Form.Field>
                        <Form.Field>
                            <label>Code Généalogique *</label>
                            <input placeholder='CodeGénéalogique' name="CodeGénéalogique" value={CodeGénéalogique} onChange={e => setCodeGénéalogique(e.target.value)} required />
                        </Form.Field>
                        <Form.Field>
                            <label>Marquée *</label>
                            <input placeholder='Marquée' name="Marquée" value={Marquée} onChange={e => setMarquée(e.target.value)} required />
                        </Form.Field>
                        <Form.Field>
                            <label>Clippée *</label>
                        </Form.Field>
                        <Form.Field>
                            <label>Date de Naissance *</label>
                            <input placeholder='DateNaissance' name="DateNaissance" value={DateNaissance} onChange={e => setDateNaissance(e.target.value)} required />
                        </Form.Field>

                        <Button type='submit'>Ajouter</Button>
                    </Segment>

                </Form>

            </Grid.Column>
        </Grid>
    )
}
export default Reine