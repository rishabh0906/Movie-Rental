import React from "react";

class Table extends React.Component {
  state = {
    AllMovies: [],
    currPage: 1,
  };

  componentDidMount() {
    fetch("/movies")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({ AllMovies: json });
      });
  }
  render() {
    let movieToDisplay = this.state.AllMovies;
     
    if(this.props.Genre!="All Genre")
    {
      movieToDisplay=movieToDisplay.filter((ele)=>{
          
        return this.props.Genre==ele.genre;
      });
    }

    if (this.props.Search) {
      let Search = this.props.Search.toLowerCase();
      movieToDisplay = movieToDisplay.filter((ele) => {
        return ele.title.toLowerCase().includes(Search);
      });
    }

    let NumberOfPages = Math.ceil(movieToDisplay.length / 5);
    let arr = [];
    for (let i = 1; i <= NumberOfPages; i++) {
      arr.push(i);
    }

    let start = (this.state.currPage - 1) * 5;
    let end = this.state.currPage * 5 - 1;

    let CurrMovies = movieToDisplay.slice(
      start,
      Math.min(movieToDisplay.length - 1, end) + 1
    );

    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Ratings</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {CurrMovies.map((ele) => {
              return (
                <tr key={ele.id}>
                  <td>{ele.title}</td>
                  <td>{ele.genre}</td>
                  <td>{ele.stock}</td>
                  <td>{ele.rate}</td>

                  <td
                    onClick={() => {
                      let allMovies = this.state.AllMovies;

                      let index = allMovies.findIndex((e) => e.id == ele.id);

                      allMovies[index].liked
                        ? (allMovies[index].liked = false)
                        : (allMovies[index].liked = true);

                      this.setState({ AllMovies: allMovies });
                    }}
                  >
                    {ele.liked ? "Liked!" : "Like"}
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => {
                        let newAllmovies = this.state.AllMovies.filter((el) => {
                          return el.id != ele.id;
                        });

                        this.setState({ AllMovies: newAllmovies });
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <nav>
          <ul class="pagination">
            <li
              class="page-item"
              onClick={() => {
                if (this.state.currPage > 1) {
                  this.setState({ currPage: this.state.currPage - 1 });
                }
              }}
            >
              <a class="page-link">Previous</a>
            </li>

            {arr.map((ele) => {
              return (
                <li
                  class="page-item"
                  onClick={() => {
                    this.setState({ currPage: ele });
                  }}
                >
                  <a class="page-link">{ele}</a>
                </li>
              );
            })}

            <li
              class="page-item"
              onClick={() => {
                if (this.state.currPage < NumberOfPages) {
                  this.setState({ currPage: this.state.currPage + 1 });
                }
              }}
            >
              <a class="page-link">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Table;
