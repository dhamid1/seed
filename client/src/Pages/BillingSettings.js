import React, { Component } from 'react';

class BillingSettings extends Component {
  state = {
    paymentMethod: 'Credit Card',
    cardType: 'Visa',
    cardNumber: '**** **** **** 1234',
    isUpdatingPayment: false,
    newCardType: '',
    newCardNumber: '',
    newFirstName: '',
    newLastName: '',
    newSecurityCode: '',
    newExpirationMonth: '01',
    newExpirationYear: '2024',
    newBillingZip: '',
  };

  handleUpdatePayment = () => {
    this.setState({ isUpdatingPayment: true });
  };

  handleSavePaymentChange = () => {
    // Implement the logic to save the new card information
    // For simplicity, we'll just set the state
    this.setState({
      cardType: this.state.newCardType,
      cardNumber: this.state.newCardNumber,
      isUpdatingPayment: false,
      newFirstName: '',
      newLastName: '',
      newSecurityCode: '',
      newExpirationMonth: '01',
      newExpirationYear: '2024',
      newBillingZip: '',
    });
  };

  handleCardTypeChange = (event) => {
    this.setState({ newCardType: event.target.value });
  };

  handleCardNumberChange = (event) => {
    this.setState({ newCardNumber: event.target.value });
  };

  handleFirstNameChange = (event) => {
    this.setState({ newFirstName: event.target.value });
  };

  handleLastNameChange = (event) => {
    this.setState({ newLastName: event.target.value });
  };

  handleSecurityCodeChange = (event) => {
    this.setState({ newSecurityCode: event.target.value });
  };

  handleExpirationMonthChange = (event) => {
    this.setState({ newExpirationMonth: event.target.value });
  };

  handleExpirationYearChange = (event) => {
    this.setState({ newExpirationYear: event.target.value });
  };

  handleBillingZipChange = (event) => {
    this.setState({ newBillingZip: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Billing</h2>
        <div>
          <strong>Payment Method:</strong> {this.state.paymentMethod}
        </div>
        <div>
          <strong>Card Type:</strong> {this.state.cardType}
        </div>
        <div>
          <strong>Card Number:</strong> {this.state.cardNumber}
        </div>
        {this.state.isUpdatingPayment ? (
          <div>
            <label>
              First Name:
              <input
                type="text"
                value={this.state.newFirstName}
                onChange={this.handleFirstNameChange}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                type="text"
                value={this.state.newLastName}
                onChange={this.handleLastNameChange}
              />
            </label>
            <br />
            <label>
              Security Code:
              <input
                type="text"
                value={this.state.newSecurityCode}
                onChange={this.handleSecurityCodeChange}
              />
            </label>
            <br />
            <label>
              Card Type:
              <select
                value={this.state.newCardType}
                onChange={this.handleCardTypeChange}
              >
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="American Express">American Express</option>
                {/* Add more card types as needed */}
              </select>
            </label>
            <br />
            <label>
              Card Number:
              <input
                type="text"
                value={this.state.newCardNumber}
                onChange={this.handleCardNumberChange}
              />
            </label>
            <br />
            <label>
              Expiration Date:
              <select
                value={this.state.newExpirationMonth}
                onChange={this.handleExpirationMonthChange}
              >
                {/* Add month options */}
              </select>
              <input
                type="text"
                value={this.state.newExpirationYear}
                onChange={this.handleExpirationYearChange}
              />
            </label>
            <br />
            <label>
              Billing Zip Code:
              <input
                type="text"
                value={this.state.newBillingZip}
                onChange={this.handleBillingZipChange}
              />
            </label>
            <br />
            <button onClick={this.handleSavePaymentChange}>Save Payment Change</button>
          </div>
        ) : (
          <button onClick={this.handleUpdatePayment}>Update Payment</button>
        )}
      </div>
    );
  }
}

export default BillingSettings;
