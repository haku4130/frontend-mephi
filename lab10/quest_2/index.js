// Делает XMLHttpRequests запросы из браузера
// Делает http запросы из node.js

import axios from './node_modules/axios/lib/axios.js';

axios({
  method: 'get',
  url: 'https://vk.com/',
}).then(function (response) {
  console.log(response.data);
});
