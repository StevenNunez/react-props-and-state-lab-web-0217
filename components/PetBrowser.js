const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  hasBeenAdopted(pet){
    return this.props.adoptedPets.includes(pet.id)
  }

  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map((pet) => {
          return <Pet
                  key={pet.id}
                  pet={pet}
                  onAdoptPet={this.props.onAdoptPet}
                  isAdopted={this.hasBeenAdopted(pet)}
                  />
        })}
      </div>
    );
  }
}

module.exports = PetBrowser;
