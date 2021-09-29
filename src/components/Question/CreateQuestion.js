import React, {Component} from 'react';
import PropTypes from 'prop-types';
import QuestionOptionItem from "./QuestionOptionItem";
import QuestionItemForm from "./QuestionItemForm";
import QuestionItemFormResult from "./QuestionItemFormResult";

class QuestionCard extends Component {
    render() {
        const {author} = this.props;
        return (
            <div className="card">
                <div className="card-header text-center">
                    Create new question
                </div>
                <div className="card-body">
                    <p>Complete the question</p>
                    <h3>Would you rather...</h3>
                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Enter option one here"/>
                        </div>
                        <p className="text-center fw-bold mt-1 mb-1">Or</p>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Enter option two here"/>
                        </div>

                        <button type="submit" className="btn btn-success mt-2">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

QuestionCard.propTypes = {
    author: PropTypes.object.isRequired,
};
export default QuestionCard;