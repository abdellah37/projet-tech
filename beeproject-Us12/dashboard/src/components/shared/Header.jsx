import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Icon, Menu ,Container,Segment} from 'semantic-ui-react';

const trigger = (
    <span>
      <Icon name='user' /> Hello
    </span>
  )
const options = [
    {
      key: 'user',
      text: (
        <span>
          Signed in as <strong>Salhi Omar </strong>
        </span>
      ),
      disabled: true,
    },
    { key: 'profile', text: 'Your Profile' },
    { key: 'settings', text: 'Settings' , href :'/Settings'},
    { key: 'sign-out', text: 'Sign Out' , href : '/'},
  ]
  
  const NewHead = () => {

   

    return (
        <>

            <Segment
                inverted
                textAlign='center'
                style={{ padding: '1em 0em' }}
                vertical
            >
                <Menu
                    fixed
                    inverted
                    pointing
                    secondary
                    size='large'
                >
                    <Container>
                      <Link to ='/Visites'>
                        <Menu.Item as='a' active>
                            Home
                        </Menu.Item>
                      </Link>
                        <Link to ='/Ruchers'>
                        <Menu.Item as='a' active>Ruchers</Menu.Item>
                        </Link>
                        {/* <Link to='HomePage'>
                        <Menu.Item as='a' active>
                              Visites
                        </Menu.Item>
                        </Link> */}
                        <Menu.Item position='right'>
                        <Dropdown trigger={trigger} options={options} />
                            
                        </Menu.Item>
                        
                    </Container>
                </Menu>

            </Segment>


        </>

    )
}

export default NewHead;


