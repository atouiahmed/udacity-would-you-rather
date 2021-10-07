import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppWrapper from "../components/AppWrapper";
import QuestionItem from "../components/Question/QuestionItem";
import {connect} from "react-redux";
import {handleQuestionsData} from "../actions/questions";

class Home extends Component {
    componentDidMount() {
        this.props.dispatch(handleQuestionsData())
    }

    render() {
        const {questionsIds, questions} = this.props;
        return (
            <AppWrapper>

                <ul className="nav  nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item w-50" role="presentation">
                        <button className="nav-link w-100 active" id="uq-tab" data-bs-toggle="tab" data-bs-target="#uq"
                                type="button" role="tab" aria-controls="uq" aria-selected="false">Unanswered
                            questions
                        </button>
                    </li>
                    <li className="nav-item w-50" role="presentation">
                        <button className="nav-link w-100 " id="aq-tab" data-bs-toggle="tab" data-bs-target="#aq"
                                type="button" role="tab" aria-controls="aq" aria-selected="true">Answered questions
                        </button>
                    </li>

                </ul>
                <div className="tab-content pt-3 " id="myTabContent">

                    <div className="tab-pane fade " id="aq" role="tabpanel" aria-labelledby="aq-tab">
                        {questionsIds.map(q_id => {
                            if (questions[q_id].optionOne.votes.length || questions[q_id].optionTwo.votes.length) {
                                return <QuestionItem
                                    key={q_id}
                                    id={q_id}
                                />
                            }
                        })}

                    </div>
                    <div className="tab-pane fade show active" id="uq" role="tabpanel" aria-labelledby="uq-tab">
                        {questionsIds.map(q_id => {
                            if (!questions[q_id].optionOne.votes.length && !questions[q_id].optionTwo.votes.length)
                                return (
                                    <QuestionItem
                                        key={q_id}
                                        id={q_id}
                                    />
                                )

                        })}
                    </div>
                </div>


            </AppWrapper>
        );
    }
}

Home.propTypes = {};

function mapStateToProps({questions, authedUser}) {
    let questionsIds = Object.keys(questions);

    return {
        questionsIds,
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(Home)