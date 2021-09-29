import React, {Component} from 'react';
import PropTypes from 'prop-types';
import QuestionOptionItem from "./QuestionOptionItem";
import QuestionOptionResultItem from "./QuestionOptionResultItem";

class QuestionItemFormResult extends Component {
    render() {
        const {options} = this.props;
        let total_votes = options.optionOne.votes.length + options.optionTwo.votes.length;
        let percent = options.optionOne.votes.length + options.optionTwo.votes.length;
        return (
            <form action="">
                <h5 className="card-title">Result:</h5>

                <QuestionOptionResultItem option={options.optionOne} all_options={options}/>
                <QuestionOptionResultItem option={options.optionTwo}  all_options={options}/>
            </form>
        );
    }
}

QuestionItemFormResult.propTypes = {
    options: PropTypes.object.isRequired,
};
export default QuestionItemFormResult;