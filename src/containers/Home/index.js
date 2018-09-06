import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Container,
} from "reactstrap";
import CardMovie from '../../components/CardMovie';
import Loader from '../../components/Loader';
import { apiHostNew } from '../../config';
import { connect } from 'react-redux';
import addMovieList from '../../action';

class Home extends Component {
  static propTypes = {
    movie: PropTypes.object.isRequired,
    addMovieList: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      dataMovie: this.props.movie.movieList,
      loading: false,
      page: this.props.movie.page,
      canLoad: true,
      loadFail: false,
      message: ''
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.movie.movieList !== prevState.dataMovie) {
      return {
        dataMovie: nextProps.movie.movieList
      }
    }
    if (nextProps.movie.page !== prevState.page) {
      return {
        page: nextProps.movie.page
      }
    }
    return null;
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.getMovie();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight && this.state.canLoad
    ) {
      this.getMovie();
    }
  }

  getMovie = () => {
    const page = this.state.page + 1
    this.setState({
      loading: true,
      canLoad: false
    })
    fetch(`${apiHostNew}/list/${page}?&api_key=b5d99c158b43161384447463b6d07611`)
      .then((response) => response.json())
      .then((res) => {
        this.props.addMovieList(res.results, page);
        if (page !== 1) {
          this.props.history.push(`/?page=${page}`);
        } else {
          this.props.history.push('/')
        }
        this.setState({
          loading: false,
          canLoad: true
        })
      })
      .catch((err) => {
        this.setState({
          loading: false,
          loadFail: true,
          message: err.message
        })
      });
  }

  clickCard = (id, title) => {
    const slug = title.replace(' ', '-');
    this.props.history.push(`/${id}/${slug}`);
  }


  render() {
    const { dataMovie, loading } = this.state;
    return (
      <div>
        <Container fluid>
          <div style={{ paddingTop: '10px' }}>
            <Row>
              {dataMovie && dataMovie.length > 1 && dataMovie.map((data, key) => {
                return (
                  <div key={key} style={{ width: '20%', padding: '9px 6px 0 6px' }}>
                    <CardMovie data={data} clickCard={() => this.clickCard(data.id, data.title)} />
                  </div>
                )
              })}
            </Row>
            {loading && <Loader />}
          </div>

        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const movie = state.movie;
  return { movie }
};


export default connect(mapStateToProps, { addMovieList })(Home);