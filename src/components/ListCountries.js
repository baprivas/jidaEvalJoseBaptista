import React, {Component} from 'react';
import Navigation from './navigation';
import CountryForm from './CountryForm';
import Collection from '../model/collection.js';

class ListCountries extends Component {

    constructor(){
        super();

        
        this.collection = new Collection();
        
        this.state = {
            'countries': this.collection.countries,
            
        };

        this.handleAddCountry = this.handleAddCountry.bind(this);
    }


    handleAddCountry(nuevo) {
        
         
        this.collection.newCountry(nuevo);
         

         this.setState({
            'countries': this.collection.countries
           })

        //  console.log(this.state)

    }

    

    render(){
        let output = [];
        
        
        if(this.state.countries == null || this.state.countries.length <= 0  ){
            output = <div>No hay datos</div>
        }else{
            this.state.countries.forEach(country => {
                output.push(

                    <div key={country.id}>
                    <a key={country.id}  className="red-text text-lighten-1 collection-item">
                        <h4>{country.name}</h4>
                       
                    </a>
                    </div>
                );
            });
        }

        return (
            <div className="App">
                <header className="App-header">
                <Navigation />
                    <div className="section">
                        <h5>Countries</h5>
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
                            <CountryForm onAddCountry={this.handleAddCountry}/>
                        </div>

                    </div>
            </div>
        );
    }
}

export default ListCountries;