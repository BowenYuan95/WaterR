import React from 'react';
import FullCalendar from '@fullcalendar/react';
import { Calendar } from '@fullcalendar/core';
import listPlugin from '@fullcalendar/list';
import { makeStyles } from '@material-ui/core/styles';



export default class testSchedule extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title : '',
            date:'',
            events:[]
        }

    }

    // calendar = new Calendar(calendarEl, {
    //     plugins: [listPlugin],
    //     defaultView: 'listWeek'
    // });

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
                for(var i = 0; i < data.length; i++) {
                    var obj = data[i];
                    // console.log("Staff: " + obj.Staff + ", " + obj.id);
                    // console.log(typeof(obj.Staff))

                    this.setState({title:"Staff:"+obj.Staff+";Vehicle:"+obj.Vehicle});
                    this.setState({date:obj.Date});
                    a.push({title:this.state.title,start:this.state.date});


                    // Object.keys(obj).map(key => console.log(obj[key]));
                    // console.log(obj.Staff);
                    // console.log('data:', obj.Date);

                }
                this.setState({events:a});
                console.log(a);


            }
        )
    }

    componentWillMount(){
        this.getData();
    }


    render() {
        return (
            <FullCalendar
                defaultView="listWeek"
                header={{
                    left: 'title',
                    center: '',
                    right: 'listDay,listWeek,listMonth'
                }}
                plugins={[listPlugin]}
                views= {{
                    listDay: { buttonText: 'list day' },
                    listWeek: { buttonText: 'list week' },
                    listMonth: { buttonText: 'list month' }}

                }
                timeZone={'UTC'}
                // ref={ this.calendarComponentRef }
                // weekends={ this.state.calendarWeekends }
                // events={ this.state.calendarEvents }
                // dateClick={ this.handleDateClick }
                events={
                    this.state.events
                    // [
                    //
                    //
                    // {title:this.state.title,start:this.state.date}
                    // ]
                }

    />


        )
    }
}
