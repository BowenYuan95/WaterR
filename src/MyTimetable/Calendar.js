import React,{ Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from '@fullcalendar/timegrid';


import './main.scss' // webpack must be configured to do this
import DialogDate from './DialogDate';





export default class DemoApp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title : '',
            date:'',
            events:[],
            description:[],
            function:'',

        }



    }

    getData(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `http://deco3801-nova.uqcloud.net/wqschedule/readMission`;
        fetch(proxyurl + url,{
            method: 'GET'
        }).then(res => res.json()).then(
            data => {
                // this.setState({title:data.Staff});
                // this.setState({date:data.Date});
                var a =[];
                var b = [];
                for(var i = 0; i < data.length; i++) {
                    var obj = data[i];
                    // console.log("Staff: " + obj.Staff + ", " + obj.id);
                    // console.log(typeof(obj.Staff))
                    var titleD ="Staff: "+obj.Staff+ " ;Vehicle: "+obj.Vehicle +" ;HighTideTime: "+obj.HighTideTime+
                        "; LowTideTime: "+obj.LowTideTime+"; Vessel: "+obj.Vessel;

                    this.setState({title:titleD});
                    this.setState({date:obj.Date});
                    a.push({title:this.state.title,start:this.state.date});
                    b.push([this.state.title,this.state.date]);


                    // Object.keys(obj).map(key => console.log(obj[key]));
                    // console.log(obj.Staff);
                    // console.log('data:', obj.Date);

                }
                this.setState({events:a});
                this.setState({description:b});



            }
        )
    }

    componentWillMount(){
        this.getData();


    }






    calendarComponentRef = React.createRef()
    state = {
        calendarWeekends: true
        // calendarEvents: [ // initial event data
        // { title: 'Event Now', start: new Date(),location:'' }
        // ]
    }

    handleDateClick = (arg) => {
        // if (window.confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
        //   if (window.confirm('Would you like to add an event to ' + arg.title + ' ?')) {
        //   this.setState({  // add new event data
        //     calendarEvents: this.state.calendarEvents.concat({ // creates a new array
        //       title: 'New Event',
        //       start: arg.date,
        //       allDay: arg.allDay
        //     })
        //   })
        // }
        let description = this.state.description;


        for(let e = 0; e < description.length; e++){
            console.log(description[e][1]);
            if(description[e][1]==arg.dateStr){
                var test = description[e][0];
                alert(arg.dateStr+'  Mission: ' + test)


            }
            // let argum = arg.dateStr+'  Mission: ' + test;
            // window.showModalDialog(argum,"","");
        }

    }



    render() {
        return (
            <div>
                <p>{this.handletext1}</p>
                <FullCalendar
                    defaultView="dayGridMonth"
                    // dateClick={this.handleDateClick}
                    dateClick={this.handleDateClick}
                    header={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                    }}

                    plugins={[dayGridPlugin,interactionPlugin,timeGridPlugin]}
                    ref={ this.calendarComponentRef }
                    // weekends={ this.state.calendarWeekends }
                    events={ this.state.events }



                />


            </div>



        )

    }


    toggleWeekends = () => {
        this.setState({ // update a property
            calendarWeekends: !this.state.calendarWeekends
        })
    }

    gotoPast = () => {
        let calendarApi = this.calendarComponentRef.current.getApi()
        calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
    }

    seeDetail = (arg) => {
        return(
            <DialogDate />
        );

    }

    // alert('Clicked on: ' + arg.dateStr);
    // alert('Coordinates: ' + arg.jsEvent.pageX + ',' + arg.jsEvent.pageY);
    // alert('Current view: ' + arg.view.type);
    // change the day's background color just for fun
    // arg.dayEl.style.backgroundColor = 'yellow';
}







