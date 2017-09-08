import React from 'react';
import CardList from './CardList';
import CardForm from './CardForm';

class FlashCardApp extends React.Component {
  state = {cards: [
      {question: "Who won the superbowl?",
      answer: "New England", id: 0},
      {question: 'Who is the greatest?',
      answer: 'Chuck Norris', id: 1}
    ]
  , id: 2 }

  addCard = (question, answer) => {
    let { cards, id } = this.state;
    let card = { question, answer, id }
    this.setState({
      cards: [...cards, card],
      id: id + 1
    });
  }

  deleteCard = (id) => {
      let cards = this.state.cards.filter( card => card.id !== id )
      this.setState({ cards });
    }

  render() {
    return (
      <div>
        <div className="container center-align">
          <div className="container center-align blue-grey darken-1 wide">
            <CardForm addCard={this.addCard} />
          </div>
        </div>
        <div className="row">
        <CardList
        cards={this.state.cards}
        deleteCard={this.deleteCard}
        />
        </div>
      </div>
    )
  }
}

export default FlashCardApp;
