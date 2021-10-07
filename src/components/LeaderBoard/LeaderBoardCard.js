import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LeaderBoardCard extends Component {
    render() {
        const {author} = this.props;
        return (
            <div className="card mt-2">
                <div className="card-header">
                    <h3>      {author.name} </h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-3 d-flex justify-content-center flex-column">
                            <img src={author.avatarURL} alt="" className="img-fluid rounded-circle"/>
                        </div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

LeaderBoardCard.propTypes = {
    author: PropTypes.object.isRequired,
};
export default LeaderBoardCard;