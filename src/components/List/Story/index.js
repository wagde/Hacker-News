import {ListGroup } from 'react-bootstrap';
import React from 'react';

export default class Story extends React.Component {
    render(){
        return( 
<>
  <ListGroup.Item as="li" active>
    Cras justo odio
  </ListGroup.Item>
</>
         )
    }

} 