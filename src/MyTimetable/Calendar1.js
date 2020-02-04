import React,{ Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from '@fullcalendar/timegrid';


import './main.scss' // webpack must be configured to do this

export default class DemoApp extends React.Component {





    calendarComponentRef = React.createRef()
    state = {
        calendarWeekends: true,
        calendarEvents: [ // initial event data
            { title: 'Mission', start: "2019-09-27" }
        ]
    }

    render() {
        return (
            <div>
                <p>{this.handletext1}</p>
                <FullCalendar
                    defaultView="dayGridMonth"
                    dateClick={this.handleDateClick}
                    header={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                    }}

                    plugins={[dayGridPlugin,interactionPlugin,timeGridPlugin]}
                    ref={ this.calendarComponentRef }
                    weekends={ this.state.calendarWeekends }
                    events={[
                        { title: 'Staff:"John Wick",Staffinitial:"JW",Vehicle:"QGNS40",Vessel: "MAK111"', start: '2019-09-17T08:00:00' },
                        { title: 'Staff:"Tom",Vehicle:"QGNS40",Vessel: "MAK111"', start: new Date() }
                    ]}
                    dateClick={ this.handleDateClick }


                />
            </div>



        )
    }


    handleDateClick = (arg) => {
        if (window.confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
            this.setState({  // add new event data
                calendarEvents: this.state.calendarEvents.concat({ // creates a new array
                    title: 'New Event',
                    start: arg.date,
                    allDay: arg.allDay
                })
            })
        }
    }



}
