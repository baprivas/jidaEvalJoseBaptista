import React, {Component} from 'react';
import Collection from '../model/collection.js';


    const validate = values  => {

        
        let collection =  new Collection()

        let existe = collection.getUser(values.id)
        console.log(existe)
        const errors = {}


        if(! existe == undefined  ){

            if(existe.id !== '' && existe.name !== ''){
                errors.id = 'Este usuario ya existe'
            }

            
        }else{

        }

        if (!values.id){
            errors.id = 'Introduzca la cedula'
        }
        



        if (!values.name){
            errors.name = 'Introduzca su nombre'
        }


        if (!values.age){
            errors.age = 'Introduzca su edad'
        }

        if (!values.mail){
            errors.mail = 'Introduzca correo'
        }

        if (!values.country){
            errors.country = 'seleccione su pais'
        }

        return errors
    }


class UserForm extends Component {

    constructor(){
        super();

        this.collection = new Collection();


        this.state = {
            // id: '',
            // name: '',
            // age: 0,
            // mail: '',
            // country: '0'

            errors: {}
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

        
        const { errors, ...sinErrors} = this.state

 

        const result = validate( sinErrors )

        this.setState({
            errors: result,
            
        });



        if(!Object.keys(result).length){
            console.log('work!')
            this.props.onAddUser(this.state);
            

            this.setState({
                id: '',
            name: '',
            age: 0,
            mail: '',
            country: '0',
            errors: {},
            sinErrors: {}
            })
           
            console.log(result)
        }

        
       
        
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

                const { errors} = this.state
        return (

            

            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col s6 m6 l5 input-field">
                        <input name="id" id="cedula" type="text" className="validate"  onChange={this.handleInputChange}/>
                        <label htmlFor="cedula">C.I </label>
                        {errors.id && <span className="red-text">{ errors.id}</span>}
                    </div>

                    <div className="col s6 m6 l5 input-field">
                        <input name="name" id="name" type="text" className="validate"  onChange={this.handleInputChange}/>
                        <label htmlFor="name">Nombres </label>
                        {errors.name && <span className="red-text">{ errors.name}</span>}
                    </div>
                 
                </div>

                <div className="row">
                    <div className="col s6 m6 l5 input-field">
                        <input name="age" id="age" type="number" className="validate"  onChange={this.handleInputChange}/>
                        <label htmlFor="age" className="active">Edad </label>
                        {errors.age && <span className="red-text">{ errors.age}</span>}
                    </div>

                    <div className="col s6 m6 l5 input-field">
                        <input name="mail" id="mail" type="email" className="validate" onChange={this.handleInputChange}/>
                        <label htmlFor="mail">Email </label>
                        {errors.mail && <span className="red-text">{ errors.mail}</span>}
                    </div>
                </div>               

                <div className="row">

                    <div className="col s6 m6 l8 input-field">
                        <select className="browser-default" name="country"  id="countries" onChange={this.handleInputChange}>
                            <option value='0'>seleccionar</option>
                            {listCountries}
                        </select>
                        {errors.country && <span className="red-text">{ errors.country}</span>}
                        <label htmlFor="countries" className="active">Paises </label> 
                    </div>
                </div>

                <div className="row">
                    <button type="submit" className="col s12 m12 l4 btn btn-large">Agregar</button>
                </div>
            </form>
        );
    }


}

export default UserForm;