import React, { useState } from 'react';
import classes from './GistCard.module.css';
import PropTypes from "prop-types";
import { formatForkData } from '../../util/util';

const GistCard = ({ gistInfo }) => {

  const [forks, setForks] = useState([]);
  const [isFetchForks, setIsFetchForks] = useState(false);

  const {
    created, name, forksUrl, updated, files
  } = gistInfo;

  const filesCount = Object.keys(files).length;
  const filesLangList = Object.keys(files).map(key => {
    return <li key={files[key].filename}>{files[key].language}</li>
  });
  const fetchForks = (forkUrl) => {
    return fetch(forkUrl)
            .then(req => req.json())
            .then((data) => {
              const fomattedForks = formatForkData(data);
              setForks(fomattedForks);
            });
  }

  const getForksHandler = (e) => {
    e.preventDefault();
    setIsFetchForks(true);
    fetchForks(forksUrl);
  }

  const displayForks = forks.map(fork => {
    return (
      <li className={classes.Forks} key={fork.id}>
        <img style={{width: '29px', borderRadius: '50%', marginRight: '15px'}} src={fork.avatar} alt={fork.username} />
        <span>{fork.username}</span>
      </li>
    )
  });

  return (
    <div className={classes.GistContainer}>
      <div className={classes.GistDetails}>
        <h3>{name}</h3>
        <div className={classes.GistFiles}>
            <span>{filesCount + (filesCount > 1 ? ' files' : ' file')}</span>
            <ul>
              {filesLangList}
            </ul>
          </div>
        <div className={classes.InfoList}>
          <strong>
            <span className="text-capitalize">Created on:</span>
          </strong>
          <span className={classes.DetailText}>{created}</span>
        </div>
        <div className={classes.InfoList}>
          <strong>
            <span className="text-capitalize">Updated on:</span>
          </strong>
          <span className={classes.DetailText}>{updated}</span>
        </div>
        <a href="#" onClick={(e) => getForksHandler(e)}>See forks</a>
        {isFetchForks ? 
          <div style={{marginTop: '15px'}}>
          <ul>
            {displayForks.length > 0 ? displayForks : 'No forks'}
          </ul>
        </div> :
        null
        }
        
      </div>
    </div>
  );
};

GistCard.propTypes = {
  gistInfo: PropTypes.object
}

export default GistCard;
