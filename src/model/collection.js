import User from './user';
import Country from './country';

function Collection() {
    


    let users = [];
    Object.defineProperty(this, 'users', {
        'get': () => {
            var storeUsers = localStorage.getItem('users')

            if (storeUsers == null){
                users = []
            }else{
                users  = JSON.parse(storeUsers)
            }


            return users;
        },
        'set': (value) => {
            users.push({value})
        }
    });

    let countries = [];
    Object.defineProperty(this, 'countries', {
        'get': () => {
            
            var storeCountries = localStorage.getItem('countries')

            if (storeCountries == null){
                countries = []
            }else{
                countries  = JSON.parse(storeCountries)
            }
            
            // var storelistCountry = localStorage.getItem('countries.list')


            return countries;
        },
        'set': (value) => {
            countries.push({value})
        }
    });
  
    this.load = () => {
        
        console.log('collection loaded');
        this.getCountries()
        this.getUsers()
    };

    //USERS
        this.newUser = (nuevo) => {

            let user = new User();
            
            this.users.push(nuevo);

            user.save(users);

            this.updateListUsers()

        }

        this.updateListUsers = () => {
            let usersList = []
    
            this.users.forEach(user => {
    
                usersList.push({id: user.id })
    
            });
    
            localStorage.setItem('users.list', JSON.stringify(usersList))
    
        }

        this.getUsers = () => {

            let listUsers = localStorage.getItem('users.list')
    
            listUsers = JSON.parse(listUsers)
    
            let caja = []
    
            if(listUsers){
                listUsers.forEach( user => {
                    let usersearch = new User(user.id);
    
                    if(usersearch){
                        caja.push(usersearch.getters())
                    }
    
                });
            }else {
                caja = []
            }
            console.log(caja)
            return caja;
        }
    
    
        this.getCountryUser = (id) => {
            
            let country = new Country(id)
    
            // console.log(country.getters())
             let countryUser = country.getters()
            return countryUser.name
            
        }
    
    
        this.getUser = (id) => {
            let user = new User(id)
             user = user.getters()
            return user
        }
    
        this.updateUser = (updateUser) =>{
    
            // console.log(user)
        
            var storeUsers = localStorage.getItem('users')
            users  = JSON.parse(storeUsers)
    
            let user = new User();
    
            let encontrado = users.filter( element => element.id === updateUser.id);
            encontrado = updateUser 
            
            let filtro = users.filter(element => element.id !== updateUser.id)
    
            console.log(filtro)
    
            filtro.push(encontrado)
             console.log(filtro)
            user.save(filtro);
    
            this.updateListUsers()
    
    
        } 


        this.deleteUser = (deleteUser) =>{
            
    
            let user = new User();
            
            let filtro = users.filter(element => element.id !== deleteUser)
    

            user.save(filtro);
            console.log('borrado' + deleteUser)

            
            this.updateListUsers()
        }

    //COUNTRIES

        this.newCountry = (nuevo) => {

            let country = new Country();
            let newId = this.countries.length + 1;

            nuevo.id = newId;
            this.countries.push(nuevo);
            country.save(countries);

            this.updateListCountries()
        }

        this.updateListCountries = () => {

            let countriesList = []

            this.countries.forEach( country => {
                
                countriesList.push({id : country.id})
            });

            localStorage.setItem('countries.list', JSON.stringify(countriesList))

        }

        this.getCountries = () => {

            let listCountries = localStorage.getItem('countries.list')

            listCountries = JSON.parse(listCountries)


            let caja = []

            if(listCountries ){
                listCountries.forEach( country => {
                    let countrysearch = new Country(country.id); 
                    
                    if(countrysearch){
                        caja.push(countrysearch.getters())
                    }
        
                    
                } );
            }else{
                caja = []
            }

            // console.log(caja)
            return caja;
        }

   

    this.load();
    
 

}

export default Collection;