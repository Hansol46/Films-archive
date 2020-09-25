import React, { Component } from "react";
import { Input } from "antd";
import "./App.css";
import { Button } from "antd";

const API_KEY = "480344f1";

class Fetched extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie:"tt3896198",
      movies: []
    };
    this.APIURL = 'http://www.omdbapi.com/?i=${
      this.state.movie
    }&apikey=${API_KEY}';
  }

  changeUserInput = movie => {
    this.setState({ movie });
  };

  onSubmit= (movie) => {
   this.componentWillMount();
  }

  componentWillMount() {
    fetch(this.APIURL)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        const updatedMovies = this.state.movies;
        updatedMovies.push(data);
        this.setState({
          movies:updatedMovies,
        })
        console.log(this.state.movies);
      });
  }

  render() {
    return <div>
        <br />
        <br />

        <Input placeholder="Basic usage" placeholder="Search Movies" onChange={e => this.changeUserInput(e.target.value)} />
        <Button
        type="primary"
        shape="circle"
        icon="search"
        onClick={() => this.onSubmit()} />
      </div>;
  }
}

export default Fetched;