import React ,{useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import { Checkbox,Button,Form ,Grid, Header,Segment} from 'semantic-ui-react';
import axios from 'axios'
import {fetchUser } from '../services/SignInApi';





const FormSi = ({Login , error}) => { 
    const [email ,setEmail]= useState('');
    const [password ,setPassword]= useState('');
    const [checkbox ,setCheckbox]= useState();
 
    const handleSubmit = async (evt)=>{
        evt.preventDefault()
        Login(email,password,checkbox)
    }
    return (
     <>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='blue' textAlign='center'>
                Log-in Into Your Account
            </Header>
            <Form size='large' onSubmit={handleSubmit} >
            <Segment stacked>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' name="email" value ={email} onChange={e=> setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' type='password' name="password" value ={password} onChange={e=>setPassword(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions'  value={checkbox} onChange={e=> setCheckbox(e.target.value)}  onChange={e=>setCheckbox(e.target.value)} />
                </Form.Field>
                
                    <Button type='submit' color='blue'>Submit</Button> 
                
            </Segment>
            </Form>
            </Grid.Column>
        </Grid>
    </>
    )
}

export default FormSi;