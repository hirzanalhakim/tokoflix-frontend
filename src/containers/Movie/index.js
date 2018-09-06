import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Slider from "react-slick";
import { apiHostOld } from '../../config';
import CardMovie from '../../components/CardMovie';
import Loader from '../../components/Loader';
import * as moment from 'moment';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      similarMovies: [],
      recommendMovies: [],
      movieDetail: null,
      movieId: null,
      detailLoading: false,
      similarLoading: false,
      recommenLoading: false
    }
  }

  componentDidMount() {
    // get id films
    const movieId = this.props.location.pathname.split('/');
    this.getDetailMovies(movieId[1]);

  }

  getDetailMovies = (id) => {
    this.setState({
      detailLoading: true
    })
    fetch(`${apiHostOld}/movie/${id}?api_key=b5d99c158b43161384447463b6d07611&language=en-US`)
      .then((response) => response.json())
      .then((res) => {
        console.log('movieDetail', res)
        if (res && res.status_code) {
          this.props.history.push('/undefined')
        } else {
          this.setState({
            movieDetail: res,
            detailLoading: false,
          })
          this.getSimilarMovies(id);
          this.getRecommendationMovies(id);
        }

      })
      .catch((err) => {
        console.error('Error:', err)
        this.setState({
          detailLoading: false,
        })
      });
  }

  getSimilarMovies = (id) => {
    this.setState({
      similarLoading: true
    })
    fetch(`${apiHostOld}/movie/${id}/similar?api_key=b5d99c158b43161384447463b6d07611&language=en-US&page=1`)
      .then((response) => response.json())
      .then((res) => {
        console.log('res', res)
        this.setState({
          similarMovies: res.results,
          similarLoading: false,
        })
      })
      .catch((err) => {
        console.error('Error:', err)
        this.setState({
          similarLoading: false,
        })
      });
  }

  getRecommendationMovies = (id) => {
    this.setState({
      recommenLoading: true
    })
    fetch(`${apiHostOld}/movie/${id}/recommendations?api_key=b5d99c158b43161384447463b6d07611&language=en-US&page=1`)
      .then((response) => response.json())
      .then((res) => {
        console.log('res', res)
        this.setState({
          recommendMovies: res.results,
          recommenLoading: false,
        })
      })
      .catch((err) => {
        console.error('Error:', err)
        this.setState({
          recommenLoading: false,
        })
      });
  }

  getArr = (genre) => {
    let arrGenres = [];
    if (genre.length === 1) {
      return genre[0].name
    } else {
      for (let i = 0; i < genre.length; i++) {
        arrGenres.push(genre[i].name)
      }
      return arrGenres.join(", ")
    }
  }

  clickCard = (id, title) => {
    const slug = title.replace(' ', '-');
    console.log('slug', slug)
    this.props.history.push(`/${id}/${slug}`);
    this.getDetailMovies(id);
  }
  render() {
    const { similarMovies, recommendMovies, movieDetail, detailLoading, similarLoading, recommenLoading } = this.state;
    console.log('movieDetail State', movieDetail);
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    };
    return (
      <Container fluid>
        <div style={{ paddingTop: '10px' }}>
          <h2>{movieDetail && movieDetail.original_title}</h2>
          <span style={{ display: 'block', borderBottom: '2px solid #c6aa28', marginTop: '20px', marginBottom: '20px' }}></span>
          {detailLoading ?
            <Loader /> :
            <Row>
              <Col md="3">
                <img src={`https://image.tmdb.org/t/p/w500/${movieDetail && movieDetail.poster_path}`} style={{ width: '100%' }} alt="" />
              </Col>
              <Col md="9">
                <p> <strong>Rating</strong> : {movieDetail && movieDetail.vote_average}</p>
                <p> <strong>Release Date</strong> : {movieDetail && moment(movieDetail.release_date).format('DD-MM-YYYY')}</p>
                <p> <strong>Genre</strong> : {movieDetail && this.getArr(movieDetail.genres)}</p>
                <p> <strong>Duration</strong> : {movieDetail && movieDetail.runtime} Minutes</p>
                <p> <strong>Production Company</strong> : {movieDetail && this.getArr(movieDetail.production_companies)}</p>
                <p> <strong>Overview</strong> : {movieDetail && movieDetail.overview}</p>
                <div>
                  <Button color="success" style={{ marginRight: '15px' }}> Buy Movie</Button>
                  <Button color="danger" onClick={() => this.props.history.push('/')}> Back to Home</Button>
                </div>

              </Col>
            </Row>
          }


          <span style={{ display: 'block', borderBottom: '2px solid #c6aa28', marginTop: '20px', marginBottom: '20px' }}></span>

          {!similarLoading &&
            <Row>
              <Col md={{ size: 8, offset: 2 }} sm='12' >
                <h2>Similar Movies You May Like</h2>
                <Slider {...settings}>
                  {similarMovies && similarMovies.length > 0 && similarMovies.map((data, key) => {
                    return (
                      <CardMovie data={data} clickCard={() => this.clickCard(data.id, data.title)} key={key} />
                    )
                  })}
                </Slider>
              </Col>
            </Row>
          }

          {!recommenLoading &&
            <Row>
              <Col md={{ size: 8, offset: 2 }} sm='12' >
                <h2>Recommend Movies For You</h2>
                <Slider {...settings}>
                  {recommendMovies && recommendMovies.length > 0 && recommendMovies.map((data, key) => {
                    console.log('data', data);
                    return (
                      <CardMovie data={data} clickCard={() => this.clickCard(data.id, data.title)} key={key} />
                    )
                  })}
                </Slider>
              </Col>
            </Row>
          }



        </div>
      </Container>
    )
  }
}