import React, { Component } from 'react';
import ProfileSettings from './ProfileSettings';
import BillingSettings from './BillingSettings';
import SubscriptionSettings from './SubscriptionSettings';
import './settings.css';

class Settings extends Component {
  render() {
    return (
      <div>
        <h1>Settings</h1>
        <div className="settings-container">
          <div className="profile-section">
            <ProfileSettings />
          </div>
          <div className="subscription-section">
            <SubscriptionSettings />
          </div>
          <div className="billing-section">
            <BillingSettings />
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
