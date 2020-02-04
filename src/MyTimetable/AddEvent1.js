import React, { Component } from 'react';
import Add from './AddEvent';
import  './style.css';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router';
import Box from "@material-ui/core/Box";

class AddEvent1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SurveyRunCode: '',
            Staff: '',
            Staffinitial:'',
            Vehicle:'',
            Date:'',
            HighTideTime:'',
            Vessel:'',
            MissionTime:'',
            LowTideTime:'',
            submit:''
        };
        // this.onChange = this.onChange.bind(this)
    }
    onChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit(e) {

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
         const url = 'http://deco3801-nova.uqcloud.net/wqschedule/createMission';
          fetch(proxyurl+url,{

             method:"POST",
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

        this.setState({submit:"success"})
        // browserHistory.push(path);


    }


    render(){
        if(this.state.submit == "success"){
            return (<Redirect to="/detail" />)
        }else{
        return (
            <div class="mission">
                <Box top={0} ml="30%"><h2>Add New Mission</h2></Box>
                <div>
                <form onSubmit={this.onSubmit.bind(this)} action="#/">
                    <div>
                        <label >SurveyRunCode</label>
                        <br />
                        <input type="text" name="SurveyRunCode" onChange={this.onChange.bind(this.valueOf())} defaultValue={this.state.SurveyRunCode} />
                    </div>
                    <div>
                        <label >Staff</label>
                        <br />
                        <textarea name="Staff" id="Staff"  onChange={this.onChange.bind(this)} defaultValue={this.state.Staff}></textarea>
                    </div>
                    <div>
                        <label >Staffinitial</label>
                        <br />
                        <textarea name="Staffinitial" id="Staffinitial"  onChange={this.onChange.bind(this)} defaultValue={this.state.Staffinitial}></textarea>
                    </div>
                    <div>
                        <label >Date</label>
                        <br />
                        <textarea name="Date" id="Date"  onChange={this.onChange.bind(this)} defaultValue={this.state.Date}></textarea>
                    </div>


                    <div>
                        <label >Vehicle</label>
                        <br />
                        <textarea name="Vehicle" id="Vehicle"  onChange={this.onChange.bind(this)} defaultValue={this.state.Vehicle}></textarea>
                    </div>

                    <div>
                        <label >Vessel</label>
                        <br />
                        <textarea name="Vessel" id="Vessel"  onChange={this.onChange.bind(this)} defaultValue={this.state.Vessel}></textarea>
                    </div>
                    <div>
                        <label >MissionTime</label>
                        <br />
                        <input type="text" name="MissionTime" onChange={this.onChange.bind(this.valueOf())} defaultValue={this.state.MissionTime} />
                    </div>
                    <div>
                    <label >HighTideTime</label>
                    <br />
                    <input type="text" name="HighTideTime" onChange={this.onChange.bind(this.valueOf())} defaultValue={this.state.HighTideTime} />
                </div>

                    <div>
                        <label >LowTideTime</label>
                        <br />
                        <input type="text" name="LowTideTime" onChange={this.onChange.bind(this.valueOf())} defaultValue={this.state.LowTideTime} />
                    </div>
                    <br />
                    {/*<input type="submit" class='btn' value="Confirm"  />*/}
                    <button type="submit">Confirm</button>
                    {/*<a href="#/newEvent">Finish</a>*/}
                    {/*<button onClick="form.submit();">Confirm</button>*/}
                    {/*<a href="#/newEvent">Finish</a>*/}
                    {/*<Button type="submit">*/}
                    {/*    <a href="#/newEvent">Confirm</a>*/}
                    {/*</Button>*/}

                </form>
                </div>
            </div>
        )
    }}

}
export default AddEvent1;


