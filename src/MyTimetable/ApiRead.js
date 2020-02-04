import React from 'react';

class ApiRead extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mytext : '',
        }
    }

    getData(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `http://deco3801-nova.uqcloud.net/wqschedule/readMission`;
        fetch(proxyurl + url,{
            method: 'GET'
        }).then(res => res.json()).then(
            data => {
                this.setState({mytext:data.Staff})
                for(var i = 0; i < data.length; i++) {
                    var obj = data[i];
                    console.log("Staff: " + obj.Staff + ", " + obj.id);
                    console.log(typeof(obj.Staff))
                }
                console.log("test");
                console.log('data:', data);
            }
        )
    }

    componentWillMount(){
        this.getData();
    }

    render(){
        return(
            <div>
                <div>{this.state.mytext}</div>
            </div>
        )
    }

}

export default ApiRead;

