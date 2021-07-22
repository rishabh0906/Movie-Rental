import React from "react";
import NavBar from "./NavBar";
import Category from "./Category";
import Search from "./Search";
import Table from "./Table";
class App extends React.Component {

state={

  Search:"",
  Genre:"All Genre"
}


   SetGenre=(genre)=>{
     this.setState({Genre:genre});
   }
  SetSearch=(params)=>{
    this.setState({Search:params});
  }

render()
{
  return (
    <React.Fragment>
   

      <div className="row">
        <div className="col-2 p-4">
          <Category  SetGenre={this.SetGenre} />
        </div>

        <div className="col-10 p-4">
          <div className="row">
            <div className="col-4">
              <Search SetSearch={this.SetSearch} />
            </div>
          </div>

          <div className="row">
            <div className="col-8">
              <Table   Search={this.state.Search} Genre={this.state.Genre} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
}

export default App;
