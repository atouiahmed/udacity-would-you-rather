import React, {Component} from 'react';
import AppWrapper from "../components/AppWrapper";
import {handleCreateQuestion} from "../actions/questions";
import {connect} from "react-redux";
import authedUser from "../reducers/authedUser";

class NewQuestion extends Component {

    state = {
        errors: {},
        optionOneText: '',
        optionTwoText: '',
    }
    handleInputChange = (option, e) => {
        let text = e.target.value;
        this.setState({[option]: text})
    }
    submitQuestion = (e) => {
        const {dispatch, authedUser} = this.props;
        const {optionOneText, optionTwoText} = this.state;
        let errors = {};
        e.preventDefault();

        if (optionOneText === '')
            errors.optionOneText = true;
        if (optionTwoText === '')
            errors.optionTwoText = true;

        if (Object.keys(errors).length) {
            this.setState({errors: errors});
            return;
        }
        let question = {
            author: authedUser.id,
            ...this.state
        }
        dispatch(handleCreateQuestion(authedUser, question));
        this.props.history.push('/')

    }

    render() {
        const {errors} = this.state;
        return (
            <AppWrapper>
                <div className="card">
                    <div className="card-header text-center fs-4">
                        Create new question
                    </div>
                    <div className="card-body">
                        <p>Complete the question</p>
                        <h3>Would you rather...</h3>
                        <form className="mt-4" onSubmit={this.submitQuestion}>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Enter option one here"
                                       onChange={(e) => this.handleInputChange('optionOneText', e)}/>
                                {errors.optionOneText && (
                                    <p className="text-danger">This field is required!</p>
                                )}
                            </div>
                            <p className="text-center fw-bold m-0 p-0">Or</p>
                            <div className="mt-2">
                                <input type="text" className="form-control" placeholder="Enter option two here"
                                       onChange={(e) => this.handleInputChange('optionTwoText', e)}/>
                                {errors.optionTwoText && (
                                    <p className="text-danger">This field is required!</p>
                                )}
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-success mt-2">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </AppWrapper>
        );
    }
}

NewQuestion.propTypes =
    {}
;

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)