import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import MetaHead from '../../components/MetaHead';
import GistList from '../../components/GistList/GistList';
import {fetchData, formatGistData } from '../../util/util';
import classes from './Home.module.css';

const Home = ({ gistList, apiError }) => {

  const [gistData, setGistData] = useState([]);
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const errorMsg = 'An unexpected error occured. Please try again';

  const userChangeHandler = (user) => {
    setUsername(user);
  };

  useEffect(() => {
    if(username) {
      setIsLoading(true);
      fetchData(username)
      .then((data) => {
        const fomattedData = formatGistData(data);
        setGistData(fomattedData);
        setIsLoading(false);
        setErrorMessage('');
      })
      .catch(() => {
        setIsLoading(false);
        setErrorMessage(errorMsg);
      });
    }
  }, [username]);

  useEffect(() => {
    setGistData(gistList);
    apiError ? setErrorMessage(errorMsg) : undefined;
    setIsLoading(false);
  }, []);

  return (
    <div className={classes.MainContainer}>
      <MetaHead />
      <Header gistUserInfo={gistData[0]} onUserInput={(e) => userChangeHandler(e)} fetchingUser={isLoading}/>
      <div className={`${classes.GistListBox} ${isLoading || gistData.length === 0 ? classes.NoData : ''}`}>
        {isLoading
          ? <Loader />
          : gistData.length === 0
            ? <p>{errorMessage || 'There are no records for your selected query'}</p>
            : <GistList gists={gistData} />}
      </div>
    </div>
  );
};

export default Home;
