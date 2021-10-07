import React, {Component} from 'react';
import QuestionCard from "./QuestionCard";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";

class QuestionItem extends Component {
    state = {
        is_answered: false
    }

    render() {
        const {id, question} = this.props;

        return (

            <QuestionCard question={question}>
                <h5 className="card-title">Would you rather...</h5>
                <ul>
                    <li>{question.optionOne.text}</li>
                    <li>{question.optionTwo.text}</li>
                </ul>
                <div className="d-grid gap-2 mt-3">
                    <Link to={`/question/${id}`} className="btn btn-outline-success">
                        View poll
                    </Link>
                </div>

            </QuestionCard>

        );
    }
}

function mapStateToProps({authedUser, users, questions}, {id}) {
    const question = questions[id];

    return {
        authedUser,
        question
    };
}

export default withRouter(connect(mapStateToProps)(QuestionItem))