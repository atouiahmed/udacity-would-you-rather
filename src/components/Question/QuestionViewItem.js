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
        const {optionOne, optionTwo} = question;
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
                {this.state.is_answered ? (
                    <QuestionItemFormResult options={{optionOne, optionTwo}}/>
                ) : (
                    <QuestionItemForm options={{optionOne, optionTwo}}/>
                )}
            </QuestionCard>
        );
    }
}

QuestionViewItem.propTypes = {
    question: PropTypes.object.isRequired,
};
export default QuestionViewItem;