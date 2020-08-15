import { ListGroup } from 'react-bootstrap';
import React from 'react';
import moment from 'moment';

export default class Story extends React.Component {
  render() {
    const { title, by, score, time, url } = this.props.data;
    return (
      <>
        <ListGroup.Item as="li" >
          <p><a href={url}> {title} </a> </p>
          <span><b>{score}</b> points</span>
          <span>,by <b> {by}</b>  </span>
          <span> ,{moment(time * 1000).fromNow()} </span>

        </ListGroup.Item>
      </>
    )
  }

} 