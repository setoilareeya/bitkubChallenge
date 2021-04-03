import React from 'react';

class UserProfiles extends React.Component {
  constructor(){
    super();
    this.state = {
      name: {title: '', first: '', last: ''},
      image: ''
    };
    // fix the this value
    this.getUser = this.getUser.bind(this);
  }

  componentWillMount() {
    this.getUser();
  }

  getUser() {
    fetch('https://api-ropsten.etherscan.io/api?module=account&action=tokentx&address=0xEcA19B1a87442b0c25801B809bf567A6ca87B1da&startblock=0&endblock=999999999&sort=asc&apikey=K7ST5DC6VP2Z5ZVWWD1IB3JDB5AHIEV274')
    .then(response => {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(data => {
      this.setState(
        {

        blockHash: data.result[0].blockHash,
        fromAddress: data.result[0].from,
        toAddress: data.result[0].to,
        amountTransfer: data.result[0].value,
        tokenSymbol: data.result[0].tokenSymbol
      });
        


    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    console.log(this.state.blockHash);
    return (
	<div>

         <h1> Detective Bitkub</h1>
         <p> blockHash: ${this.state.blockHash}</p>
         <p> fromAddress: ${this.state.fromAddress}</p>
         <p> toAddress: ${this.state.toAddress}</p>
         <p> amountTransfer: ${this.state.amountTransfer}</p>
         <p> tokenSymbol: ${this.state.tokenSymbol}</p>
        
        

         <p></p>
	</div>
    );
  }
}

export default UserProfiles;