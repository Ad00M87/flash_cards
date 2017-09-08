import React from 'react'
import CardButtonList from './CardButtonList'
import EditCardForm from './EditCardForm'

class Card extends React.Component{
  state = {showAnswer: false, edit: false, question: this.props.question, answer: this.props.answer}

  flipCard = () => {
    this.setState({showAnswer: !this.state.showAnswer})
  }

  saveCard = (question, answer) => {
    this.setState({showAnswer: false, edit: false, question: question, answer: answer});
  }

  edit = () => {
    if (!this.state.edit)
      this.setState({edit: true})
  }

  cardBody = () => {
    if (!this.state.edit){
      if (!this.state.showAnswer)
        return <span ref="question">{this.state.question}</span>
      else
        return <span ref="answer">{this.state.answer}</span>
      }
    else {
      return( <EditCardForm question={this.props.question} answer={this.props.answer} saveCard={this.saveCard} />)
    }
  }

  render() {
    return(
      <div className="col s4">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
        {this.cardBody()}
        </div>
        <div className="card-action">
        <CardButtonList id={this.props.id} onFlip={this.flipCard} onEdit={this.edit} onDelete={this.props.deleteCard} />
        </div>
        </div>
      </div>
    )
  }

}

export default Card
