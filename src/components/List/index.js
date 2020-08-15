import React from 'react';
import {ListGroup } from 'react-bootstrap';
import Spinner from '../Spinner'
import {dispatchDataStorisId,dispatchDataStoris} from '../../actions/Get_Data';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Story from './Story'
 class DataList extends React.Component {
   
componentWillMount(){
  const {dispatchDataStorisId,match} = this.props;
  console.log(this.props)
  dispatchDataStorisId(`https://hacker-news.firebaseio.com/v0/${match.path.replace('/','')}.json`);
}



    render() {
      const {Data, error, pending,dispatchDataStoris} = this.props;
      if(pending) return <Spinner/>
      if(error) return <div className="Error"><p>Something Went Wrong </p></div>
      return ( <>
      <ListGroup as="ul">
  {Data.map((storyId,index)=>{
   return  <Story key={index} data={storyId}  />

})}
        
        <ListGroup.Item as="li" onClick={dispatchDataStoris} >
  <p > <a href="#more">More...</a></p>
  </ListGroup.Item>
      </ListGroup>
    
      </>)
    }
  }

  const mapStateToProps = state => ({
    error: state.error,
    pending:state.pending,
    Data: state.Data
})

const mapDispatchToProps = dispatch => bindActionCreators({
  dispatchDataStorisId,dispatchDataStoris
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DataList);