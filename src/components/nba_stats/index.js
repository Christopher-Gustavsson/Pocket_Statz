import React, {Component, Fragment} from 'react';
import axios from 'axios';
import TeamScore from './team_score/team_score';
import TeamsTab from './teams_tab/teams_tab';
import PlayerStats from './players_stats/players_stats';
import LoadingScreen from "../loading_screen";

class GameInfo extends Component {

    state = {
        view: "left",
        isLoaded: false,
        team1: null,
        team2: null,
        gameDetails: null
    }   

    async componentDidMount(){
        console.log("gameinfo props:", this.state.props);
       this.retrieveNBAGameInfo();
    }

    async retrieveNBAGameInfo() {
        const resp = await axios.get(`/api/see-a-specific-team.php?team_id=${this.props.match.params.team_id}`);
        const resp2 = await axios.get(`/api/getnbagameid.php?team_name=${resp.data.api_key}`);

        if (typeof resp2.data === 'object'){
            this.setState({
                team1: resp2.data.awayTeam,
                team2: resp2.data.homeTeam,
                gameDetails: resp2.data.gameDetails,
                isLoaded: true
            })       
        };
    }

    showLeft = () => {
        this.setState({
            view: "left"
        });
    }

    showRight = () => {
        this.setState({
            view: "right"
        });
    }

    render(){  
        const {team1, team2, gameDetails} = this.state;
        const { view } = this.state;
        const {showLeft, showRight} = this;

        if (!gameDetails) {
            return <LoadingScreen />
        }

        return(
            
            <Fragment>
                <TeamScore team1={team1} team2={team2} gameDetails={gameDetails}/>
                <TeamsTab team1={team1} team2={team2} showLeft={showLeft} showRight={showRight}/>
                <PlayerStats view={view} team1={team1} team2={team2}/>
            </Fragment> 
            
        );
    }
}

export default GameInfo;