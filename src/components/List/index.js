import React from 'react';
import {ListGroup } from 'react-bootstrap';
import Spinner from '../Spinner'
import {dispatchData} from '../../actions/Get_Data';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Story from './Story'
 class DataList extends React.Component {



  componentWillMount() {
    const {dispatchData} = this.props;
    dispatchData("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");
}

    render() {
      const {Data, error, pending} = this.props;
      if(pending) return <Spinner/>
      if(error) return <div className="Error"><p>Something Went Wrong </p></div>
         console.log(Data)
      return ( <>
      <ListGroup as="ul">
  {/* {Data&&Data.data&&Data.data.map((storyId,index)=>{

   return  <Story key={index} storyId={storyId}  />

})} */}
        
      
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
  dispatchData
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DataList);