import React, {Component} from 'react';
import PropTypes from 'prop-types';
import QuestionOptionItem from "./QuestionOptionItem";
import QuestionOptionResultItem from "./QuestionOptionResultItem";

class QuestionItemFormResult extends Component {
    render() {
        const {question} = this.props;
        let options = question;
        return (
            <form action="">
                <h5 className="card-title">Result:</h5>

                <QuestionOptionResultItem option={options.optionOne}
                                          question={question}
                                          is_winner={options.optionOne.votes.length > options.optionTwo.votes.length}
                />
                <QuestionOptionResultItem option={options.optionTwo}
                                          question={question}
                                          is_winner={options.optionOne.votes.length < options.optionTwo.votes.length}
                />
            </form>
        );
    }
}

QuestionItemFormResult.propTypes = {
    question: PropTypes.object.isRequired,
};
export default QuestionItemFormResult;