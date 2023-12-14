
import React, { Component } from 'react';

class ProfileSettings extends Component {
  state = {
    profile: {
      username: 'exampleUser',
      email: 'example@example.com',
      password: '********',
      firstName: 'John',
      lastName: 'Doe',
      birthdate: '01/01/1990',
      gender: 'Male',
    },
    isEditing: false,
  };

  handleEditProfile = () => {
    this.setState({ isEditing: true });
  };

  handleSaveProfile = () => {
    // Save the updated profile information to your backend or state management system
    // Here, we'll just set the state for simplicity
    this.setState({ isEditing: false });
  };

  handleFieldChange = (field, value) => {
    const updatedProfile = { ...this.state.profile, [field]: value };
    this.setState({ profile: updatedProfile });
  };

  render() {
    const { profile, isEditing } = this.state;

    return (
      <div>
        <h2>Personal Info</h2>
        <form>
          {isEditing ? (
            <div>
              <label>
                Username:
                <input
                  type="text"
                  value={profile.username}
                  onChange={(e) => this.handleFieldChange('username', e.target.value)}
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => this.handleFieldChange('email', e.target.value)}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  value={profile.password}
                  onChange={(e) => this.handleFieldChange('password', e.target.value)}
                />
              </label>
              <br />
              <button onClick={this.handleSaveProfile}>Save Changes</button>
            </div>
          ) : (
            <div>
              <div>
                <strong>Username:</strong> {profile.username}
              </div>
              <div>
                <strong>Email:</strong> {profile.email}
              </div>
              <div>
                <strong>Password:</strong> {profile.password}
              </div>
              <button onClick={this.handleEditProfile}>Edit Profile</button>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default ProfileSettings;
