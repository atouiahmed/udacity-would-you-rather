import React, {Component} from 'react';
import PropTypes from 'prop-types';

class QuestionOptionResultItem extends Component {
    render() {
        const {option, all_options} = this.props;
        const total_votes = all_options.optionOne.votes.length + all_options.optionTwo.votes.length;
        const percent = total_votes > 0 ? Math.round((option.votes.length * 100) / total_votes) : 0;
        const is_winner = true;
        const bg_class_active = is_winner ? 'option-result-bg-active' : '';
        const progress_class = 'progress-bar bg-success';
        return (
            <div className={'mt-2 border p-2 ' + bg_class_active}>
                <p>{option.text}</p>
                <div className="progress">
                    <div className={progress_class} role="progressbar" style={{width: percent + '%'}}
                         aria-valuenow={percent}
                         aria-valuemin="0" aria-valuemax="100"><span>{percent}%</span>
                    </div>
                </div>
                <p className="text-center fw-bold mt-1">{option.votes.length} out of {total_votes}</p>
            </div>
        );
    }
}

QuestionOptionResultItem.propTypes = {
    option: PropTypes.object.isRequired,
    all_options: PropTypes.number.isRequired,
};

export default QuestionOptionResultItem;