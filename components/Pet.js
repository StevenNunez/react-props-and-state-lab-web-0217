const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();
    this.handleAdopt = this.handleAdopt.bind(this)
  }

  genderIcon(){
    if (this.props.pet.gender == "male") {
      return '♂'
    } else if (this.props.pet.gender == "female"){
      return '♀'
    }
  }

  handleAdopt(){
    this.props.onAdoptPet(this.props.pet.id)
  }

  adoptionButton(){
    if (this.props.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    }else{
      return <button onClick={this.handleAdopt} className="ui primary button">Adopt pet</button>
    }
  }

  render() {
    let pet = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">{pet.name} ({this.genderIcon()})</a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight} </p>
          </div>
        </div>
        <div className="extra content">
        { this.adoptionButton() }
        </div>
      </div>
    );
  }
}

module.exports = Pet;
