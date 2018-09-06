import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import * as moment from 'moment';
import { FaMoneyBillWave } from 'react-icons/fa';

export default class CardMovie extends Component {

  showPrice = (rating) => {
    let price = 0;
    if (rating <= 3) {
      price = 3500;
    } else if (rating > 3 && rating <= 6) {
      price = 8250;
    } else if (rating > 6 && rating <= 8) {
      price = 16350;
    } else {
      price = 21250;
    }
    return price;
  }

  convertToRupiah = (angka) => {
    var rupiah = '';
    var angkarev = angka.toString().split('').reverse().join('');
    for (var i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.';
    return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
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
          {this.props.data
            && this.props.data.vote_average >= 7.3
            && this.props.data.vote_average <= 7.5 ?
            <div className="paid-logo">
              <FaMoneyBillWave />
            </div>
            :
            <div className="card-title">
              {this.convertToRupiah(this.showPrice(this.props.data.vote_average))}
            </div>
          }


        </div>
      </Card>
    )
  }
}