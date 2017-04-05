const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
    this.onFilterChange = this.onFilterChange.bind(this)
    this.onFindPets = this.onFindPets.bind(this)
    this.onAdoptPet = this.onAdoptPet.bind(this)
  }

  onFilterChange(filter){
    this.setState({
      filters: {
        type: filter
      }
    })
  }

  onAdoptPet(id){
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  onFindPets(){
    let resp
    let {state: {filters: {type}}} = this
    if (type === "all") {
      resp = fetch("/api/pets")
    } else {
      resp = fetch(`/api/pets?type=${type}`)
    }
    resp.then((resp) =>{
      return resp.json()
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.onFindPets} onChangeType={this.onFilterChange} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
