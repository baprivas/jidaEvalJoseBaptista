function User(id) {
    

    
    Object.defineProperty(this, 'id', {'get': () => id});

    let name;
    Object.defineProperty(this, 'name', {'get': () => name});


    let age;
    Object.defineProperty(this, 'age', {'get': () => age});

    let mail;
    Object.defineProperty(this, 'mail', {'get': () => mail});

    let country;
    Object.defineProperty(this, 'country', {'get': () => country});

  

    this.getters = () => {


        var storeUsers = localStorage.getItem('users');
        storeUsers = JSON.parse(storeUsers);
        
        
        if(storeUsers === null)
        {
            id = '';
            name = '';
            age = '';
            mail = '';
            country = '';
            
        }else{
            let user = storeUsers.filter( user => user.id === id);


            
        if(user == null || user.length <= 0){
           
        }else{
            id = String(user[0].id);
            name = String(user[0].name);
            age = String(user[0].age);
            mail = String(user[0].mail);
            country = String(user[0].country);



            return {
                'id': id,
                'name': name,
                'age' : age,
                'mail': mail,
                'country': country,
                
            }
        }
        }


        

    }

    this.save = (users) => {
        localStorage.setItem('users', JSON.stringify(users));
    };

    this.delete = () => {
        
    };

    // function instance() {

    // }

    // if (id) instance();
}

export default User;