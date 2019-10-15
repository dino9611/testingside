import React, { Component } from 'react';
import {connect} from 'react-redux'
import Axios from 'axios'
import { Apiurl } from './supports/URL';
import {CustomInput} from 'reactstrap' 
class Test extends Component {
    state = { laoding:true }
    componentDidMount(){
        Axios.get(`${Apiurl}/product/getproductdetail/${this.props.location.pathname.split('/')[2]}`)
        .then((res)=>{
            this.setState({laoding:false})
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        if(this.state.laoding){
            return <h1>laoding</h1>
        } 
        return (
            <div>
                <CustomInput type='file'/>
                <h1>{this.props.Angka}</h1>
            </div>
          );
    }
}


const MapStateToProps=(state)=>{
    return{
       Angka:state.Operasi
    }
  }

export default connect(MapStateToProps) (Test);