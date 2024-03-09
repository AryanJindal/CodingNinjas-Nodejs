const axios = require('axios');
// console.log(axios)
axios.get('https://api.github.com/AryanJindal').then(
    (response) => {
        console.log(response.data);
    }
)What is inversion of control?