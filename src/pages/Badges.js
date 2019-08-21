import React, { Component } from "react";
import "../styles/Badge.css";
import "../styles/Badges.css";
import logo from "../assets/images/splat3.jpg";
import Badge from "../components/Badge";
import BadgesList from "../components/BadgesList";
import api from '../apis/fake-api';
import { Link } from "react-router-dom";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

const STATIC_DATA = [
  {
    id: 1,
    name: "Octoling",
    email: "Octo@tavio.com",
    title: "dps",
    twitter: "@octo"
  },
  {
    id: 2,
    name: "Squid 1",
    email: "Octo@tavio.com",
    title: "dps",
    twitter: "@sqd1"
  },
  {
    id: 3,
    name: "Squid 2",
    email: "Octo@tavio.com",
    title: "dps",
    twitter: "@sqd2"
  }
];

export default class Badges extends Component {
  constructor(props) {
    super(props);
    console.log("1. constructor()");

    this.state = {
      nextPage: null,
      loading: true,
      errors: null,
      data: undefined
    };
  }

  componentDidMount() {
    console.log("3. componentDidMount()");
    this.fetchCharacters();
    // this.timeout = setTimeout(() => {
    //   this.setState({
    //     data: STATIC_DATA,
    //   });
    // }, 1500);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDidUpdate()");

    console.log({
      prevProps: prevProps,
      prevState: prevState
    });

    console.log({
      props: this.props,
      state: this.state
    });
  }

  componentWillUnmount() {
    console.log("6. componentWillUnmount()");
    clearTimeout(this.timeout);
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({loading: false, data: data});
    } catch (error) {
      this.setState({loading: false, error: error});
    }

    // try {
    //   let response;
    //   if (this.state.nextPage) {
    //     response = await fetch(
    //       this.state.nextPage
    //     );
    //   } else {
    //     response = await fetch(
    //       `https://rickandmortyapi.com/api/character`
    //     );
    //   }
    //   const data = await response.json();
    //   if (data.results) {
    //     this.setState({
    //       loading: false,
    //       nextPage: data.info.next,
    //       data: {
    //         info: data.info,
    //         results: [].concat(
    //           this.state.data.results,
    //           data.results,
    //         )
    //       }
    //     });
    //   } else {
    //     this.setState({
    //       loading: false,
    //       error: response.status
    //     });
    //   }
    // } catch (error) {
    //   this.setState({
    //     loading: false,
    //     error: error
    //   });
    // }
  };

  render() {
    console.log("2/4. Render()");
    if (this.state.loading){
      return (<PageLoading></PageLoading>)
    }
    if (this.state.error) {
      return <PageError error={this.state.error}></PageError>;
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={logo} alt="logo" />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data} />
          </div>
        </div>

        {this.state.loading && <div className="loader">loading...</div>}
        {!this.state.loading && (
          <button onClick={() => this.fetchCharacters()}>Load more</button>
        )}
      </React.Fragment>
    );
  }
}
