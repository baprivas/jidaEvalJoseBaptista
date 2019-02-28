import React, {Component} from 'react';



class BtnDeleteUser extends Component {


    constructor(props){
        super(props);

        this.returnId = this.returnId.bind(this)
    }


    returnId (){
        this.props.onDropUser(this.props.id);
       
    }



    render() {
        
        return (
            <button className="btn black white-text" onClick={this.returnId} >eliminar</button>
        );
    }



}


export default BtnDeleteUser;