import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppWrapper from "../components/AppWrapper";
import LeaderBoardItem from "../components/LeaderBoard/LeaderBoardItem";

class LeaderBoard extends Component {
    render() {
        return (
            <AppWrapper>
                <LeaderBoardItem author={{
                    id: 'johndoe',
                    name: 'John Doe',
                    avatarURL: 'https://i.pravatar.cc/150?u=125',
                    answers: {
                        "xj352vofupe1dqz9emx13r": 'optionOne',
                        "vthrdm985a262al8qx3do": 'optionTwo',
                        "6ni6ok3ym7mf1p33lnez": 'optionTwo'
                    },
                    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
                }}/>
            </AppWrapper>
        );
    }
}

LeaderBoard.propTypes = {};

export default LeaderBoard;