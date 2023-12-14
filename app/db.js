export const login = async (event, username, password, router) => {
    const axios = require("axios");

    event.preventDefault();
    const user = {
      username: username,
      password: password,
    }
    await axios.post("http://localhost:5000/login", user)
    .then(response => {
      console.log(response)
      if(response.status === 200) {
        router.push("/", 
          { username: response.data.username }
        );
      }
    }).catch(error => { console.log(error) })
  }