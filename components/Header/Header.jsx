import React from 'react';
import PropTypes from "prop-types";
import SearchBar from '../SearchBar/SearchBar';
import UserInfo from '../UserInfo';
import classes from './Header.module.css';

const Header = ({gistUserInfo, onUserInput, fetchingUser}) => {
    return (
        <header className={classes.Header}>
          <SearchBar onUserChange={(e) => onUserInput(e)}/>
          {
              gistUserInfo && !fetchingUser? <UserInfo user={gistUserInfo}/> : null
          }
        </header>
    );
};

Header.propTypes = {
    rockets: PropTypes.object
}

export default Header;