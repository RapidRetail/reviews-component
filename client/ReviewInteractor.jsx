import React from 'react';
import axios from 'axios';

class ReviewInteractor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votedHelpful: this.props.review.votedHelpful,
      votedNotHelpful: this.props.review.votedNotHelpful,
      inappropriate: this.props.review.inappropriate,
    };
    this.updateReview = this.updateReview.bind(this);
  }
  updateReview(e) {
    const { className } = e.target;
    this.setState(prevState => (
      { [className]: prevState[className] + 1 }
    ));
    axios.put('/reviews', {
      params: {
        field: className,
        value: this.state[className],
      },
    })
      .then(() => {
        console.log('You’ve successfully left feedback on this review!');
      });
  }
  render() {
    const { votedHelpful, votedNotHelpful } = this.state;
    return (
      <div className="review-interactor">
        Was this review helpful to you?
        <span className="votedHelpful" onClick={this.updateReview}>Yes</span>
        <span>{votedHelpful}</span>
        <span className="votedNotHelpful" onClick={this.updateReview}>No</span>
        <span>{votedNotHelpful}</span>
        <span className="inappropriate" onClick={this.updateReview}>Report as inappropriate</span>
      </div>
    );
  }
}

export default ReviewInteractor;
