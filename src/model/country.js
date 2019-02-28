function Country(id) {
    
    
    Object.defineProperty(this, 'id', {'get': () => {return id},
    'set': (value)=> {
        id = value
    }},
    );

    let name ;
    Object.defineProperty(this, 'name', 
    {'get': () => {return name},
    'set': (value) => {
         name = value

    },enumerable:true, 
    configurable:true
});





    this.save = (countries) => {
        localStorage.setItem('countries', JSON.stringify(countries))
        
    };

    this.getters = () => {

        var storeCountries = localStorage.getItem('countries')
        storeCountries = JSON.parse(storeCountries)

        let country = storeCountries.filter( country => country.id == id)
        
        if(country == null || country.length <= 0){

            return {}

        }else{
            name = String(country[0].name)

            return {
                'id': id,
                'name': name,
            }
        }
    }
   
    

    
    function instance() {
    
    }

    if (id) instance();


    
}

export default Country;