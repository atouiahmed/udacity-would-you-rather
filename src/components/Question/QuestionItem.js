import React, {Component} from 'react';
import PropTypes from 'prop-types';
import QuestionOptionItem from "./QuestionOptionItem";
import QuestionItemForm from "./QuestionItemForm";
import QuestionItemFormResult from "./QuestionItemFormResult";
import QuestionCard from "./QuestionCard";

class QuestionViewItem extends Component {
    state = {
        is_answered: false
    }

    render() {
        const {question} = this.props;

        return (
            <QuestionCard author={{
                id: 'johndoe',
                name: 'John Doe',
                avatarURL: 'https://i.pravatar.cc/150?u=125',
                answers: {
                    "xj352vofupe1dqz9emx13r": 'optionOne',
                    "vthrdm985a262al8qx3do": 'optionTwo',
                    "6ni6ok3ym7mf1p33lnez": 'optionTwo'
                },
                questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
            }}>
                <h5 className="card-title">Would you rather...</h5>
                <ul>
                    <li>{question.optionOne.text}</li>
                    <li>{question.optionTwo.text}</li>
                </ul>
                <div className="d-grid gap-2 mt-3">
                    <a className="btn btn-outline-success">View poll</a>
                </div>

            </QuestionCard>
        );
    }
}

QuestionViewItem.propTypes = {
    question: PropTypes.object.isRequired,
};
export default QuestionViewItem;