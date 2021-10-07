import React, {Component} from 'react';
import PropTypes from 'prop-types';
import QuestionOptionItem from "./QuestionOptionItem";
import {connect} from "react-redux";
import {handleAnswerQuestion} from "../../actions/questions";
import authedUser from "../../reducers/authedUser";
import QuestionItemFormResult from "./QuestionItemFormResult";

class QuestionItemForm extends Component {
    handleCheck = (e) => {
        let answer = e.target.value;
        this.setState({answer});
    }
    submitAnswer = (e) => {
        e.preventDefault();
        const {dispatch, authedUser, question} = this.props;
        const {answer} = this.state;
        dispatch(handleAnswerQuestion(authedUser.id, question.id, answer))
    }

    render() {
        const {question} = this.props;
        const {optionOne, optionTwo} = question;
        const uid1 = 'flexRadioDefault' + Math.floor(Math.random() * 100);
        const uid2 = 'flexRadioDefault' + Math.floor(Math.random() * 100);
        return (
            <form action="" onSubmit={this.submitAnswer}>
                <h5 className="card-title">Would you rather...</h5>
                <div className="mt-2">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault"
                               onChange={this.handleCheck}
                               id={uid1} value={'optionOne'}/>
                        <label className="form-check-label" htmlFor={uid1}>
                            {optionOne.text}
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault"
                               onChange={this.handleCheck}
                               id={uid2} value={'optionTwo'}/>
                        <label className="form-check-label" htmlFor={uid2}>
                            {optionTwo.text}
                        </label>
                    </div>

                </div>
                <div className="d-grid gap-2 mt-3">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        );
    }
}

QuestionItemForm.propTypes = {
    question: PropTypes.object.isRequired,
};

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionItemForm)