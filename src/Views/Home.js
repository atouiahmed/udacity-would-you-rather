import React, {Component} from 'react';
import AppWrapper from "../components/AppWrapper";
import QuestionItem from "../components/Question/QuestionItem";
import {connect} from "react-redux";
import _ from "lodash";
import {handleQuestionsData} from "../actions/questions";

class Home extends Component {
    componentDidMount() {
        this.props.dispatch(handleQuestionsData())
    }

    render() {
        const {AnsweredQuestionsIds, UnAnsweredQuestionsIds, loadingBar} = this.props;
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
                        {!loadingBar.default && !AnsweredQuestionsIds.length ? (
                            <p className="text-center p-3">There is no questions!</p>
                        ) : (
                            AnsweredQuestionsIds.map(q_id => {

                                return <QuestionItem
                                    key={q_id}
                                    id={q_id}
                                />

                            })
                        )}

                    </div>
                    <div className="tab-pane fade show active" id="uq" role="tabpanel" aria-labelledby="uq-tab">
                        {!loadingBar.default && !UnAnsweredQuestionsIds.length ? (
                            <p className="text-center p-3">There is no questions!</p>
                        ) : (
                            UnAnsweredQuestionsIds.map(q_id => {
                                return (
                                    <QuestionItem
                                        key={q_id}
                                        id={q_id}
                                    />
                                )

                            })
                        )}


                    </div>
                </div>


            </AppWrapper>
        );
    }
}

Home.propTypes = {};

function mapStateToProps({questions, authedUser, loadingBar}) {
    let questionsIds = Object.keys(questions);
    let AnsweredQuestionsIds = [];
    let UnAnsweredQuestionsIds = [];

    _.forEach(questions, function (q) {
        if (q.optionOne.votes.indexOf(authedUser.id) > -1 || q.optionTwo.votes.indexOf(authedUser.id) > -1) {
            AnsweredQuestionsIds.push(q.id);
        } else {
            UnAnsweredQuestionsIds.push(q.id);
        }
    });
    return {
        questionsIds,
        AnsweredQuestionsIds,
        UnAnsweredQuestionsIds,
        questions,
        authedUser,
        loadingBar,
    }
}

export default connect(mapStateToProps)(Home)