import React from 'react';
import UserInfoEntry from './UserInfoEntry.jsx';

const UserInfoContainer = ({
  review: {
    city, state, country, athletictype, age, bodytype,
  },
}) => (
  <div>
    <UserInfoEntry label="LOCATION" value={`${city}, ${state.toUpperCase()}, ${country}`} />
    <UserInfoEntry label="ATHLETIC TYPE" value={athletictype} />
    <UserInfoEntry label="AGE" value={age} />
    <UserInfoEntry label="BODY TYPE" value={bodytype} />
  </div>
);

export default UserInfoContainer;
