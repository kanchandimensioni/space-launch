import React, { Component } from  'react';
import { connect } from 'react-redux';
import { fetchMission } from '../actions';

class MissionList extends Component {
    componentDidMount() {
       this.props.fetchMission();
    }
    renderMission() {
        return this.props.mission.map(mission =>{
        return <li key={mission.flight_number}>{mission.mission_name}</li>
        });
    }
    render() {
        return(
            <div>
                <ul>{this.renderMission()}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { mission: state.mission}
}

export default connect(mapStateToProps, { fetchMission }) (MissionList);