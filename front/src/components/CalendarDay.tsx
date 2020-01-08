import React from 'react';

interface CalendarDayProps {
  momentDate: string,
  isPractice: boolean,
  clickEvent:() => void,
  chips: any[]
};

type Props = CalendarDayProps

export default function CalendarDay(props: Props) {
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

