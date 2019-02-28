import React, {Component} from 'react';
import Collection from '../model/collection.js';

import Navigation from './navigation';



class UserUpdateForm extends Component {

    constructor(props){
        super(props);

        this.collection = new Collection();

        this.state = {
            id: '',
            name: '',
            age: 0,
            mail: '',
            country: '0'
        }


        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };


    
    handleInputChange (e){
        const {value, name } = e.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    handleSubmit (e){
        e.preventDefault();

        console.log(this.state)
        


         this.collection.updateUser(this.state);
        
         this.setState({
            id: '',
            name: '',
            age: 0,
            mail: '',
            country: '',
        });

        alert('fue actualizado con exito')

    }

    componentWillMount() {
        let prop = this.props.match.params.user_id;

        

        

         let user = this.collection.getUser(prop);

        this.setState({
            id: user.id,
            name: user.name,
            age: user.age,
            mail: user.mail,
            country: user.country
        });

    }



    render(){
        let listCountries = []
                
       
        
        
        if(this.collection.countries == null || this.collection.countries.length <= 0  ){
            listCountries = <option value="" selected>No existen paises registrados</option>
        }else{
            this.collection.countries.forEach(countries => {
                listCountries.push(
                    <option value={countries.id} key={countries.id} >{countries.name}</option>
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
            <form onSubmit={this.handleSubmit} className="container">
            <div className="section"></div>
            <div className="section"></div>
            <div className="section"></div>
                <div className="row">
                    <div className="col s6 m6 l5 input-field offset-l1">
                        <input name="id" id="cedula" type="text" disabled className="validate" value={this.state.id} onChange={this.handleInputChange}/>
                        <label className="active" htmlFor="cedula">C.I </label>
                    </div>

                    <div className="col s6 m6 l5 input-field">
                        <input name="name" id="name" type="text" className="validate" value={this.state.name} onChange={this.handleInputChange}/>
                        <label className="active" htmlFor="name">Nombres </label>
                    </div>
                </div>

                <div className="row">
                    <div className="col s6 m6 l5 input-field offset-l1">
                        <input name="age" id="age" type="number" className="validate" value={this.state.age} onChange={this.handleInputChange}/>
                        <label className="active" htmlFor="age">Edad </label>
                    </div>

                    <div className="col s6 m6 l5 input-field">
                        <input name="mail" id="mail" type="email" className="validate" value={this.state.mail} onChange={this.handleInputChange}/>
                        <label className="active" htmlFor="mail">Email </label>
                    </div>
                </div>

                <div className="row">

                    <div className="col s6 m6 l8 input-field offset-l1">
                        <select name="country" className="browser-default" value={this.state.country} id="countries" onChange={this.handleInputChange}>
                            <option value='0'>seleccionar</option>
                            {listCountries}
                        </select>
                        <label className="active" htmlFor="countries">Paises </label> 
                    </div>
                </div>

                <div className="row">
                    <button type="submit" className="col s12 m12 l4 btn btn-large offset-l3">Actualizar</button>
                </div>
            </form>
        </div>
            
           
        );
    }


}

export default UserUpdateForm;