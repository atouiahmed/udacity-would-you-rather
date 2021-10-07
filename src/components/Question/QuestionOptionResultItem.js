import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class QuestionOptionResultItem extends Component {
    render() {
        const {option_name, question, is_winner, is_voted} = this.props;
        let option = question[option_name];
        const total_votes = question.optionOne.votes.length + question.optionTwo.votes.length;
        const percent = total_votes > 0 ? Math.round((option.votes.length * 100) / total_votes) : 0;
        const bg_class_active = is_winner ? 'option-result-bg-active' : '';
        const progress_class = 'progress-bar bg-success';
        return (
            <div className={'mt-2 border p-2 ' + bg_class_active}>
                {is_voted && (
                    <div className="float-end"><span className="badge rounded bg-info">Your vote</span></div>
                )}
                <p>{option.text}</p>
                <div className="progress">
                    <div className={progress_class} role="progressbar" style={{width: percent + '%'}}
                         aria-valuenow={percent}
                         aria-valuemin="0" aria-valuemax="100"><span>{percent}%</span>
                    </div>
                </div>
                <p className="text-center fw-bold mt-1">{option.votes.length} out of {total_votes}</p>
            </div>
        );
    }
}

QuestionOptionResultItem.propTypes = {
    option_name: PropTypes.string.isRequired,
    question: PropTypes.object.isRequired,
};


function mapStateToProps({authedUser}, {question, option_name}) {

    let my_vote = authedUser.answers[question.id];

    return {
        authedUser,
        is_voted: my_vote === option_name
    };
}

export default withRouter(connect(mapStateToProps)(QuestionOptionResultItem))