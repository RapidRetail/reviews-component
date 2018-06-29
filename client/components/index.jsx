import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewRow from './ReviewRow.jsx';
import BodyWrapper from '../styles/Body.style.js';

axios.defaults.baseURL = '/reviews-module';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // productId: window.location.search.slice(1),
      reviews: this.props.reviews,
    };
    // this.getReviews = this.getReviews.bind(this);
  }
  // componentDidMount() {
  //   this.getReviews();
  // }
  // getReviews() {
  //   axios.get(`/reviews/${this.state.productId}/`)
  //     .then((res) => {
  //       this.setState({
  //         reviews: [...res.data],
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  render() {
    return (
      <BodyWrapper>
        {
          this.state.reviews.map(review => (
            <ReviewRow review={review} key={review.reviewid} />))
        }
      </BodyWrapper>
    );
  }
}

fetch(`/reviews-module/reviews/${window.location.pathname.slice(1)}`).then(response => response.json().then(body => {
  ReactDOM.render(<App reviews={body}/>, document.getElementById('reviews'));
}))
