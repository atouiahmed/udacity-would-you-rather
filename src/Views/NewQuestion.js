import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppWrapper from "../components/AppWrapper";

class NewQuestion extends Component {

    render() {
        return (
            <AppWrapper>
                <div className="card">
                    <div className="card-header text-center fs-4">
                        Create new question
                    </div>
                    <div className="card-body">
                        <p>Complete the question</p>
                        <h3>Would you rather...</h3>
                        <form className="mt-4" >
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Enter option one here"/>
                            </div>
                            <p className="text-center fw-bold m-0 p-0">Or</p>
                            <div className="mt-2">
                                <input type="text" className="form-control" placeholder="Enter option two here"/>
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
{
}
;

export default NewQuestion;