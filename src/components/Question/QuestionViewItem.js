import React, {Component} from 'react';
import PropTypes from 'prop-types';
import QuestionItemForm from "./QuestionItemForm";
import QuestionItemFormResult from "./QuestionItemFormResult";
import QuestionCard from "./QuestionCard";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class QuestionViewItem extends Component {
    state = {
        is_answered: false
    }


    render() {
        const {question, is_answered} = this.props;
        return (
            <QuestionCard question={question}>
                {is_answered ? (
                    <QuestionItemFormResult question={question}/>
                ) : (
                    <QuestionItemForm question={question}/>
                )}
            </QuestionCard>
        );
    }
}

QuestionViewItem.propTypes = {
    id: PropTypes.string.isRequired
}
;

function mapStateToProps({authedUser, users, questions}, props) {
    const {id} = props;

    const question = questions[id];
    let is_answered = question.optionOne.votes.some(v => v === authedUser.id) ||
        question.optionTwo.votes.some(v => v === authedUser.id);

    return {
        authedUser,
        question,
        is_answered
    };
}

export default withRouter(connect(mapStateToProps)(QuestionViewItem))