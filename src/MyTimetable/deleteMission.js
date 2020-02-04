import React,{ Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from '@fullcalendar/timegrid';
import { Redirect } from 'react-router';
import Box from '@material-ui/core/Box';
import IconButton from './Buttons';

import './main.scss' // webpack must be configured to do this






export default class deleteMission extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title : '',
            date:'',
            events:[],
            description:[],
            function:'',
            id:'',
            deleteId:'',
            submit:''

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



                    this.setState({title:obj.Staff});
                    this.setState({date:obj.Date});
                    this.setState({id:obj._id});

                    a.push({title:this.state.title,start:this.state.date});
                    b.push([this.state.title,this.state.date,this.state.id]);


                }
                this.setState({events:a});
                this.setState({description:b});



            }
        )
    }

    componentWillMount(){
        this.getData();


    }


    delete(){
        const test = {"type":"Sale","status":1}
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'http://deco3801-nova.uqcloud.net/wqschedule/';
        var id = this.state.deleteId;
        fetch(proxyurl+url+id,{
            // post提交
            method:"DELETE"

        })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
            })
        this.setState({submit:"success"})
    }





    calendarComponentRef = React.createRef()
    state = {
        calendarWeekends: true

    }

    handleDateClick = (arg) => {

        let description = this.state.description;


        for(let e = 0; e < description.length; e++){
            console.log(description[e][1]);
            if(description[e][1]==arg.dateStr){
                var test = description[e][0];
                if (window.confirm('Would you like to delete ' + arg.dateStr+'  Mission: ' + test + ' ?')) {
                    console.log(description[e][2]);
                    this.setState({deleteId:description[e][2]})
                    this.delete();
                }

            }

        }

    }



    render() {
        if(this.state.submit == "success"){
            return (<Redirect to="/detail" />)
        }else{
        return (
            <div>
                <Box ml="2%" mt="2%">
                <IconButton/>  </Box>
                <Box top={0} ml="35%"><h3>Delete Mission</h3></Box>

                <Box mb="0%" ml="2.5%" mr="2.5%" mt="10%">
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
                </Box>


            </div>



        )}

    }




}







