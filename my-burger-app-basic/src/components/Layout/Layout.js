import React from 'react';
import Aux from './../../hoc/Auxiliary';

import styled from 'styled-components';

const Main = styled.main`
margin-top: 16px;
`;

const layout = ( props ) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <Main>
            {props.children}
        </Main>
    </Aux>
);

export default layout;