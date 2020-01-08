import * as React from 'react';

import Badge from '@material-ui/core/Badge';

interface CalendarDayMobileProps {
  momentDate: string,
  isPractice: boolean,
  color: 'primary' | 'secondary' | 'default' | 'error',
  classes: object,
};

type Props = CalendarDayMobileProps

// 出席状況を描画(モバイル)
export default function CalendarDayMobile(props: Props) {
  const { momentDate, isPractice, color, classes } = props;
  if (isPractice) {
    return (
      <div>
        <div style={{position:"absolute", top:"3px", left: 0, right: 0,}}>
        {momentDate}
        </div>
        <div style={{position:"absolute", bottom:"1px", left: 0, right: 0,}}>
          <Badge children="" color={color} classes={classes} variant="dot"></Badge>
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
