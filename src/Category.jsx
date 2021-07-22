import React from "react";

class Category extends React.Component {
  state = {
    allGenre: [],
  };

  componentDidMount() {
    fetch("/genre")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        this.setState({ allGenre: json });
      });
  }
  render() {
    return (
      <ul class="list-group">
        <li class="list-group-item"  onClick={
          ()=>{
           this.props.SetGenre("All Genre"); 
          }
        }>All Genre</li>
        {this.state.allGenre.map((el) => {
          return (
            <li class="list-group-item" key={el._id} onClick={
              ()=>{
               this.props.SetGenre(el.name); 
              }
            } >
              {el.name}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Category;
