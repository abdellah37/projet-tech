import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Icon, Menu } from 'semantic-ui-react';

const HeaderSignIn = () => {
    return (
        <Menu secondary stackable attached borderless >
            <Container>
                <Link to="/">
                    <Menu.Item  >
                         <Icon name="home"  />
                    Home
                </Menu.Item>
                </Link>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Link to='/'>
                            <Icon name="sign-in "/>
                            </Link>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
        </Menu>
    )
}

export default HeaderSignIn;