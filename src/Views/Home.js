import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppWrapper from "../components/AppWrapper";
import QuestionViewItem from "../components/Question/QuestionViewItem";
import LeaderBoardItem from "../components/LeaderBoard/LeaderBoardItem";
import QuestionItem from "../components/Question/QuestionItem";

class Home extends Component {
    render() {
        return (
            <AppWrapper>

                <ul className="nav  nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item w-50" role="presentation">
                        <button className="nav-link w-100 active" id="aq-tab" data-bs-toggle="tab" data-bs-target="#aq"
                                type="button" role="tab" aria-controls="aq" aria-selected="true">Answered questions
                        </button>
                    </li>
                    <li className="nav-item w-50" role="presentation">
                        <button className="nav-link w-100" id="uq-tab" data-bs-toggle="tab" data-bs-target="#uq"
                                type="button" role="tab" aria-controls="uq" aria-selected="false">Unanswered
                            questions
                        </button>
                    </li>
                </ul>
                <div className="tab-content pt-3 " id="myTabContent">

                    <div className="tab-pane fade show active" id="aq" role="tabpanel" aria-labelledby="aq-tab">
                        <QuestionItem
                            question={{
                                id: '6ni6ok3ym7mf1p33lnez',
                                author: 'johndoe',
                                timestamp: 1468479767190,
                                optionOne: {
                                    votes: [],
                                    text: 'become a superhero',
                                },
                                optionTwo: {
                                    votes: ['johndoe', 'sarahedo'],
                                    text: 'become a supervillain'
                                }
                            }}
                        />
                    </div>
                    <div className="tab-pane fade" id="uq" role="tabpanel" aria-labelledby="uq-tab">
                        <QuestionItem
                            question={{
                                id: '6ni6ok3ym7mf1p33lnez',
                                author: 'johndoe',
                                timestamp: 1468479767190,
                                optionOne: {
                                    votes: [],
                                    text: 'become a superhero',
                                },
                                optionTwo: {
                                    votes: ['johndoe', 'sarahedo'],
                                    text: 'become a supervillain'
                                }
                            }}
                        />
                    </div>
                </div>


            </AppWrapper>
        );
    }
}

Home.propTypes = {};

export default Home;