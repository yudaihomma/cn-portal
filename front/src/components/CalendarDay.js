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

// 出席状況を描画(モバイル)
export function CalendarDayMobile(props) {
    const { momentDate, isPractice, color, classes } = props;
    if (isPractice) {
      return (
        <div>
          <div style={{position:"absolute", top:"3px", left: 0, right: 0,}}>
          {momentDate}
          </div>
          <div style={{position:"absolute", bottom:"1px", left: 0, right: 0,}}>
            <Badge color={color} classes={classes} variant="dot"></Badge>
          </div>
        </div>
      )
    }
    return (
      <div style={{position:"absolute", top:"3px", left: 0, right: 0,}}>
        {momentDate}
      </div>
    )
  }

  CalendarDayMobile.propTypes = {
    momentDate: PropTypes.string.isRequired,
    isPractice: PropTypes.bool.isRequired,
    color: PropTypes.string,
    classes: PropTypes.object,
};

export function CalendarDay(props) {
    const { momentDate, chips, isPractice} = props;
    if (isPractice) {
        return (
        <div>
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

