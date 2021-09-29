import React, {Component} from 'react';
import PropTypes from 'prop-types';

import LeaderBoardCard from "./LeaderBoardCard";

class LeaderBoardItem extends Component {
    state = {
        is_answered: false
    }

    render() {
        const {author} = this.props;
        return (

            <LeaderBoardCard author={author}>
                <div className="col-6 border-1 border-start">
                    <p>Answered questions: 10</p>
                    <hr/>
                    <p>Created questions: 10</p>
                </div>
                <div className="col-3 border-1 border-start leader-board-score">
                    <div className="card">
                        <div className="card-header text-center">
                            Score
                        </div>
                        <div className="card-body p-2">
                            <div className="rounded-circle bg-success ">
                                <p className="text-white text-center d-flex">10</p>
                            </div>
                        </div>
                    </div>
                </div>
            </LeaderBoardCard>
        )
            ;
    }
}

LeaderBoardItem.propTypes = {
    author: PropTypes.object.isRequired,
};
export default LeaderBoardItem;