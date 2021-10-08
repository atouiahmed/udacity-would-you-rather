import React, {Component} from 'react';
import AppWrapper from "../components/AppWrapper";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import QuestionViewItem from "../components/Question/QuestionViewItem";

class QuestionView extends Component {

    componentDidMount() {
    }

    render() {
        const {question, match} = this.props;
        const {id} = match.params;
        if (!question) {
            return <p className="text-center p-5">This question doesn't exist!</p>
        }

        return (
            <AppWrapper>
                <QuestionViewItem id={id}/>
            </AppWrapper>
        );
    }
}

function mapStateToProps({authedUser, users, questions}, props) {
    const {id} = props.match.params;
    const question = questions[id];

    return {
        authedUser,
        question
    };
}

export default withRouter(connect(mapStateToProps)(QuestionView))

