import React from 'react';
import PropTypes from "prop-types";
import GistCard from '../GistCard/GistCard';
import classes from './GistList.module.css';

const GistList = ({ gists }) => {
  const listUpdate = gists.map((val) => (
    <div 
      className={classes.GistWrapper} 
      key={val.id}>
      <GistCard gistInfo={val} />
    </div>
  ));

  return (
    <div className={classes.GistContainer}>
      {listUpdate}
    </div>
  );
};

GistList.propTypes = {
  gists: PropTypes.array
}

export default GistList;
