import React from 'react';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';

const styles = {
    // Cards
    card: {
      width: 330,
      marginTop: 10,
      marginBottom: 10,
    },
}

export default function CalendarDay(props) {
    const { momentDate, chips, isPractice, clickEvent} = props;
    if (isPractice) {
        return (
        <div onClick={clickEvent}>
          <div style={{position:"absolute", top:"3px", left: 0, right: 0,}}>
          {momentDate}
          </div>
          <div>
            {chips}
          </div>
        </div>
        )
    }
    return(
        <div style={{position:"absolute", top:"3px", left: 0, right: 0,}}>
            {momentDate}
        </div>
    )
}

CalendarDay.propTypes = {
    momentDate: PropTypes.string.isRequired,
    isPractice: PropTypes.bool.isRequired,
    chips: PropTypes.array,
};

