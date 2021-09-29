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
                <div className="card-header">
                    {author.name} asks:
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-3 d-flex justify-content-center flex-column">
                            <img src={author.avatarURL} alt="" className="img-fluid rounded-circle"/>
                        </div>
                        <div className="col-9 border-1 border-start">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

QuestionCard.propTypes = {
    author: PropTypes.object.isRequired,
};
export default QuestionCard;