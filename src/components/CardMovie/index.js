import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg } from 'reactstrap';
import * as moment from 'moment';
import { FaMoneyBillWave } from 'react-icons/fa';
import { convertToRupiah, showPrice, myFilm } from '../../utils/PublicFunc';

export default class CardMovie extends Component {
  static propTypes = {
    clickCard: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
  }
  render() {
    return (
      <Card style={{ marginBottom: '15px' }} className="card-container" onClick={this.props.clickCard}>
        <div className="overlay">
          <div className="card-title">
            {this.props.data.title}
            <div style={{ marginTop: '10px', textAlign: 'left', fontSize: '12px', paddingLeft: '5px' }}>
              <p className="detail-overlay">Rating: {this.props.data.vote_average}</p>
              <p className="detail-overlay">Release: {moment(this.props.data.release_date).format('DD-MM-YYYY')}</p>
            </div>

          </div>
        </div>
        <CardImg top width="100%"
          src={`https://image.tmdb.org/t/p/w300${this.props.data.poster_path}`}
          alt={this.props.data.title}
          className="cover-image"
        />
        <div className="top-overlay">
          {myFilm(this.props.data.vote_average) ?
            <div className="paid-logo">
              <FaMoneyBillWave />
            </div>
            :
            <div className="card-title">
              {convertToRupiah(showPrice(this.props.data.vote_average))}
            </div>
          }


        </div>
      </Card>
    )
  }
}