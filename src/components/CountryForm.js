import React, {Component} from 'react';



const validate = values  => {

    const errors = {}

    if (!values.name){
        errors.name = 'Introduzca el pais'
    }
    


    return errors
}




class CountryForm extends Component {

    constructor(){
        super();
        
        this.state = {
            errors: {}
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    };

    handleInputChange (e){
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
        // console.log(this.state);
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
            this.props.onAddCountry(this.state);
            

            this.setState({
            id: '',
            name: '',
            errors: {},
            sinErrors: {}
            })
           
            console.log(result)
        }



        
    }
    render(){
        const { errors} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col s6 m6 l6 input-field">
                        <input name="name" id="name" type="text" className="validate"  onChange={this.handleInputChange}/>
                        <label htmlFor="name">País </label>
                        {errors.name && <span className="red-text">{ errors.name}</span>}
                    </div>
                </div>

                <div className="row">
                    <button type="submit" className="col s12 m12 l4 btn btn-large">Agregar</button>
                </div>
            </form>
        );
    }
}

export default CountryForm;