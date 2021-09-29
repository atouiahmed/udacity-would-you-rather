import React, {Component} from 'react';
import PropTypes from 'prop-types';
import QuestionOptionItem from "./QuestionOptionItem";

class QuestionItemForm extends Component {
    render() {
        const {options} = this.props;
        return (
            <form action="">
                <h5 className="card-title">Would you rather...</h5>
                <div className="mt-2">
                    <QuestionOptionItem option={options.optionOne} checked={true}/>
                    <QuestionOptionItem option={options.optionTwo} checked={true}/>
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        );
    }
}

QuestionItemForm.propTypes = {
    options: PropTypes.object.isRequired,
};
export default QuestionItemForm;