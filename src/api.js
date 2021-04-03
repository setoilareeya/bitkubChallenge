import axios from 'axios';

export default axios.create({
  //baseURL: `http://jsonplaceholder.typicode.com/`
  
  baseURL: `https://api-ropsten.etherscan.io/api?module=account&action=tokentx&address=0xEcA19B1a87442b0c25801B809bf567A6ca87B1da&startblock=0&endblock=999999999&sort=asc&apikey=K7ST5DC6VP2Z5ZVWWD1IB3JDB5AHIEV274`
});