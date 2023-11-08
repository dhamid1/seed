import React, { Component } from 'react';

class SubscriptionSettings extends Component {
  state = {
    plan: 'Basic Plan',
    isChangingPlan: false,
    newPlan: '',
  };

  handleManagePlan = () => {
    this.setState({ isChangingPlan: true });
  };

  handleSavePlanChange = () => {
    // Implement the logic to save the new plan
    // For simplicity, we'll just set the state
    this.setState({ plan: this.state.newPlan, isChangingPlan: false });
  };

  handlePlanChange = (event) => {
    this.setState({ newPlan: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Subscription</h2>
        <div>
          <strong>Base Plan:</strong> {this.state.plan}
        </div>
        {this.state.isChangingPlan ? (
          <div>
            <label>
              Choose a New Plan:
              <select value={this.state.newPlan} onChange={this.handlePlanChange}>
                <option value="Basic Plan">Basic Plan</option>
                <option value="Premium Plan">Premium Plan</option>
                <option value="Pro Plan">Pro Plan</option>
              </select>
            </label>
            <br />
            <button onClick={this.handleSavePlanChange}>Save Plan Change</button>
          </div>
        ) : (
          <button onClick={this.handleManagePlan}>Manage Plan</button>
        )}
      </div>
    );
  }
}

export default SubscriptionSettings;
