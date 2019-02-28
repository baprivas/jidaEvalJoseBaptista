import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Navigation from './navigation';
import UserForm from './UserForm.js';
import Collection from '../model/collection.js';
import BtnDeleteUser from './BtnDeleteUser'


class List extends Component {

    constructor() {
        super();

        this.collection = new Collection();

        this.state = {
             'users': this.collection.users
        };


        this.handleAddUser = this.handleAddUser.bind(this);

        this.handdleDropUser = this.handdleDropUser.bind(this);
    }

    
    handleAddUser (nuevo){

 
        this.collection.newUser(nuevo);
        
        this.setState({
            'users': this.collection.users
           })
    }



    async handdleDropUser(deleteUser) {
        const result = await this.collection.deleteUser(deleteUser);
        this.setState({
            'users': this.collection.users
           })

      }

    componentWillMount() {
       
    }


    render() {
        let output = [];

        if(this.state.users == null || this.state.users.length <= 0  ){
            output = <div>No hay datos</div>
        }else{
            this.state.users.forEach(user => {

                let pais = this.collection.getCountryUser(user.country);
                output.push(
                    <div key={user.id} className="red-text text-lighten-1 collection-item">
                        <h5>{user.name}</h5><p> <br/>edad:  {user.age} - correo: {user.mail} - país: {pais}</p>

                        <Link  to={`/form/${user.id}`}  className="btn black white-text ">actualizar</Link>
                        
                        <BtnDeleteUser id = {user.id} onDropUser={this.handdleDropUser}/>
                    </div>

                );
            });
        }

        return (
            <div className="App">
                <header className="App-header">
                <Navigation />
                    <div className="section">
                        <h5>Users</h5>
                    </div>
                
                </header>   

                <div className="divider"></div>
                    <div className="row">

                        <div className="col s12 m12 l6">
                            <div className="collection">
                                {output}
                            </div>
                        </div>
                        <div className="col s12 m12 l6">
                            <UserForm onAddUser={this.handleAddUser}/>
                        </div>

                    </div>
            </div>
        );
    }
}




export default List;