import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppWrapper from "../components/AppWrapper";
import LeaderBoardItem from "../components/LeaderBoard/LeaderBoardItem";
import {connect} from "react-redux";
import {handleUsersData} from "../actions/users";

class LeaderBoard extends Component {
    componentDidMount() {
        this.props.dispatch(handleUsersData())
    }

    render() {
        const {usersIds} = this.props;
        return (
            <AppWrapper>
                {usersIds.map(u_id => (
                    <LeaderBoardItem key={u_id} id={u_id}/>
                ))}

            </AppWrapper>
        );
    }
}

LeaderBoard.propTypes = {};


function mapStateToProps({users, authedUser}) {
    let usersIds = Object.keys(users);
    console.log('users', users)
    usersIds.sort((a, b) => {
        let a_score = users[a].questions.length + Object.keys(users[a].answers).length;
        let b_score = users[b].questions.length + Object.keys(users[b].answers).length;
        return b_score - a_score;
    });
    return {
        users,
        usersIds,
        authedUser
    }
}

export default connect(mapStateToProps)(LeaderBoard)