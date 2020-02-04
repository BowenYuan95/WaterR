import React,{ Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from '@fullcalendar/timegrid';
import { Redirect } from 'react-router';
import Box from '@material-ui/core/Box';
import IconButton from './Buttons';
import  './style.css';

import './main.scss'





export default class UpdateMission extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title : '',
            date:'',
            events:[],
            description:[],
            function:'',
            id:'',
            updateId:'',
            SurveyRunCode: '',
            Staff: '',
            Staffinitial:'',
            Vehicle:'',
            Date:'',
            HighTideTime:'',
            Vessel:'',
            MissionTime:'',
            LowTideTime:'',
            change:''

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
                    this.setState({SurveyRunCode:obj.SurveyRunCode});
                    this.setState({Staffinitial:obj.Staffinitial});
                    this.setState({Vehicle:obj.Vehicle});
                    this.setState({HighTideTime:obj.HighTideTime});
                    this.setState({Vessel:obj.Vessel});
                    this.setState({MissionTime:obj.MissionTime});
                    this.setState({LowTideTime:obj.LowTideTime});


                    a.push({title:this.state.title,start:this.state.date});
                    b.push([this.state.title,this.state.date,this.state.id,this.state.SurveyRunCode,
                        this.state.Staffinitial,this.state.Vehicle,this.state.HighTideTime,this.state.Vessel,
                        this.state.MissionTime,this.state.LowTideTime]);


                }
                this.setState({events:a});
                this.setState({description:b});



            }
        )
    }

    componentWillMount(){
        this.getData();


    }

    onChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    onSubmit(e){
        e.preventDefault();

        const post ={
            SurveyRunCode:this.state.SurveyRunCode,
            Staff:this.state.Staff,
            Staffinitial:this.state.Staffinitial,
            Date:this.state.Date,
            MissionTime:this.state.MissionTime,
            HighTideTime:this.state.HighTideTime,
            LowTideTime:this.state.LowTideTime,
            Vehicle:this.state.Vehicle,
            Vessel:this.state.Vessel

        }

        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'http://deco3801-nova.uqcloud.net/wqschedule/';
        var id = this.state.updateId;
        fetch(proxyurl+url+id,{
            // post提交
            method:"PUT",
            headers:{
                "Content-type":"application/json",
            },
            body:
            // eval(post)
                JSON.stringify(post)

        })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
            })
        this.setState({change:"submit"})

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
                if (window.confirm('Would you like to update ' + arg.dateStr+'  Mission: ' + test + ' ?')) {
                    console.log(description[e][2]);
                    this.setState({updateId:description[e][2]});
                    this.setState({Staff:description[e][0]});
                    this.setState({Date:description[e][1]});
                    this.setState({Staffinitial:description[e][4]});
                    this.setState({SurveyRunCode:description[e][3]});
                    this.setState({MissionTime:description[e][8]});
                    this.setState({HighTideTime:description[e][6]});
                    this.setState({LowTideTime:description[e][9]});
                    this.setState({Vehicle:description[e][5]});
                    this.setState({Vessel:description[e][7]});


                    this.setState({change:'update'});
                }

            }

        }

    }



    render() {
        if(this.state.change == "submit"){
            return (<Redirect to="/detail" />)
        }else if(this.state.change == "update"){
            return(
                <div className="mission">
                    <Box top={0} ml="30%"><h2>Update Mission</h2></Box>
                    <div>
                        <form onSubmit={this.onSubmit.bind(this)} >
                            <div>
                                <label>SurveyRunCode</label>
                                <br/>
                                <input type="text" name="SurveyRunCode" onChange={this.onChange.bind(this.valueOf())}
                                       defaultValue={this.state.SurveyRunCode}/>
                            </div>
                            <div>
                                <label>Staff</label>
                                <br/>
                                <textarea name="Staff" id="Staff" onChange={this.onChange.bind(this)}
                                          defaultValue={this.state.Staff}></textarea>
                            </div>
                            <div>
                                <label>Staffinitial</label>
                                <br/>
                                <textarea name="Staffinitial" id="Staffinitial" onChange={this.onChange.bind(this)}
                                          defaultValue={this.state.Staffinitial}></textarea>
                            </div>
                            <div>
                                <label>Date</label>
                                <br/>
                                <textarea name="Date" id="Date" onChange={this.onChange.bind(this)}
                                          defaultValue={this.state.Date}></textarea>
                            </div>


                            <div>
                                <label>Vehicle</label>
                                <br/>
                                <textarea name="Vehicle" id="Vehicle" onChange={this.onChange.bind(this)}
                                          defaultValue={this.state.Vehicle}></textarea>
                            </div>

                            <div>
                                <label>Vessel</label>
                                <br/>
                                <textarea name="Vessel" id="Vessel" onChange={this.onChange.bind(this)}
                                          defaultValue={this.state.Vessel}></textarea>
                            </div>
                            <div>
                                <label>MissionTime</label>
                                <br/>
                                <input type="text" name="MissionTime" onChange={this.onChange.bind(this.valueOf())}
                                       defaultValue={this.state.MissionTime}/>
                            </div>
                            <div>
                                <label>HighTideTime</label>
                                <br/>
                                <input type="text" name="HighTideTime" onChange={this.onChange.bind(this.valueOf())}
                                       defaultValue={this.state.HighTideTime}/>
                            </div>

                            <div>
                                <label>LowTideTime</label>
                                <br/>
                                <input type="text" name="LowTideTime" onChange={this.onChange.bind(this.valueOf())}
                                       defaultValue={this.state.LowTideTime}/>
                            </div>
                            <br/>
                            <button type="submit">Confirm</button>
                        </form>
                    </div>
                </div>
            )

        }else
            {
            return (
                <div>
                    <Box ml="2%" mt="2%">
                        <IconButton/>  </Box>
                    <Box top={0} ml="35%"><h3>Update Mission</h3></Box>

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







