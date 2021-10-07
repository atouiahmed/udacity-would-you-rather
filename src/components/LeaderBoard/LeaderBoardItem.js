import React, {Component} from 'react';
import PropTypes from 'prop-types';

import LeaderBoardCard from "./LeaderBoardCard";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class LeaderBoardItem extends Component {
    state = {
        is_answered: false
    }

    render() {
        const {author} = this.props;
        const total_questions = author.questions.length;
        const total_answers = Object.keys(author.answers).length;
        const score = total_questions + total_answers;
        return (

            <LeaderBoardCard author={author}>
                <div className="col-6 border-1 border-start">
                    <p>Answered questions: {total_answers}</p>
                    <hr/>
                    <p>Created questions: {total_questions}</p>
                </div>
                <div className="col-3 border-1 border-start leader-board-score">
                    <div className="card">
                        <div className="card-header text-center">
                            Score
                        </div>
                        <div className="card-body p-2">
                            <div className="rounded-circle bg-success ">
                                <p className="text-white text-center d-flex">{score}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </LeaderBoardCard>
        )
            ;
    }
}

LeaderBoardItem.propTypes = {
    id: PropTypes.string.isRequired,
};

function mapStateToProps({authedUser, users, questions}, {id}) {
    const author = users[id];

    return {
        authedUser,
        author
    };
}

export default withRouter(connect(mapStateToProps)(LeaderBoardItem))