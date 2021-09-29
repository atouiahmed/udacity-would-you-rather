import React, {Component} from 'react';
import PropTypes from 'prop-types';

class QuestionOptionItem extends Component {
    handleCheck = (e) => {
        console.log(e.target.checked);
    }

    componentDidMount() {
    }

    render() {
        const {option, checked} = this.props;
        const uid = 'flexRadioDefault' + Math.floor(Math.random() * 100);
        return (
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault"
                       onChange={this.handleCheck}
                       id={uid} value={option.text} checked={checked}/>
                <label className="form-check-label" htmlFor={uid}>
                    {option.text}
                </label>
            </div>
        );
    }
}

QuestionOptionItem.propTypes = {
    option: PropTypes.object.isRequired,
    checked: PropTypes.bool.isRequired
};

export default QuestionOptionItem;