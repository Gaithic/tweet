const email = document.querySelector('#email');
const password = document.querySelector('#password');
document.querySelector('#submit').addEventListener('click', (e)=>{
    e.preventDefault();    
    login(email.value, password.value);
});

async function login(email, password){
    const url = "http://127.0.0.1:8000/api/login-user";
    const data = {email, password};    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const json = response.json();
        console.log(json);
        if(response.ok){            
            json.then(data  => {
                console.log(JSON.parse(data));
                // if(data.access_token){
                //     chrome.storage.local.get(["authToken"], result => {
                //         if(result.authToken = data.access_token){
                //             chrome.storage.local.set({loggedIn: true}, () => {
                //             });
                //         }else{
                //             throw new Error("Invalid login credentials")
                //         }
                //     });
                // }else{
                //     throw new Error('Invalid Login credentials');
                // }
            })
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}