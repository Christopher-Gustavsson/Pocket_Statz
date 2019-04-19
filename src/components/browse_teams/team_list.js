import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Team from './team';
import axios from 'axios';

class TeamList extends Component {
    state = {
        teams: [],
        selectedTeams: [],
        view: 'off'
    }

    componentDidMount() {
        this.getTeams();
    }

    chooseTeam = (id) => {
        const { selectedTeams } = this.state;
        this.setState({
            selectedTeams: [...selectedTeams, id]
        });  
        console.log(selectedTeams);
    }

    confirmButton = () => {
        // route to user's home page
    }

    backToSportList = () => {
        // route back to list of sports
    }

    showButtons() {
        
    }

    async getTeams() {
        const response = await axios.get(`/api/data/getteam.json`);

        if (response.data.success){
            this.setState({
                teams: response.data.teams
            });
        }
    }

    render() {
        const teamList = this.state.teams.map((team) => {
            return <Team key={team.id} {...team} chooseTeam={this.chooseTeam} />
        })

        return (
            <div className="team-list row">
                <div className="container">
                    <ul className="collection team-collection">
                        {teamList}
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(TeamList);
