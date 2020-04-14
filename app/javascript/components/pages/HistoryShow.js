import React, { Component } from 'react'

class HistoryShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editable: false,
      histories: [],
      favorites: []
    }
  }

  handleEdit = (history) => {
    const { editable } = this.state

    if (editable) {
      this.handleUpdate(history)
      console.log("handleEdit(history.comment)=", history.comment)
    }

    // editable switches in between 'false' and 'true'
    this.setState({editable: !editable})
  }

  handleUpdate = (history) => {
    // UPDATING the comment in this specific history
    history.comment = this.comment.value

    // fetch method gets specific history with the id in our back-end and UPDATES it
    fetch(`/histories/${history.id}`,
    {
      method: 'PUT',
      // put in the new history!!!!
      body: JSON.stringify({history: history}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        response.json().then((response) => {
          this.updateHistory(history)
        })
      })
  }

  updateHistory = (history) => {
    // make a new list newHistories that has all the histories except the one we just updated
    let newHistories = this.props.histories.filter((value) => value.id !== history.id)

    // pushing new history into the newHistories array
    newHistories.push(history)
    console.log("newHistories", newHistories)

    this.setState({
      histories: newHistories
    })
  }

  // when user clicks 'add to favorites' this method will be triggered (this method will post a new favorite into our favorites database):

  addFavorite = (history) => {
    console.log("addFavorite(history):",history)
    let newFavorite = {
      film_id: history.id,
      title: history.title,
      overview: history.overview,
      vote_average: history.vote_average,
      release_date: history.release_date,
      comment: history.comment
    }

    // fetch method gets specific history with the id in our back-end and UPDATES it
    fetch("/favorites",
    {
      method: 'POST',
      body: JSON.stringify(newFavorite),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    console.log("newFavorite:", JSON.stringify(newFavorite))
  }
  

  render() {
    let { editable } = this.state;
    const { id } = this.props.match.params
    const history = this.props.histories.find((v) => v.id === parseInt(id))

    console.log(history)

    return (
      <>
      {history &&
        <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <div>
            <div className="decision-box">
              <h4>{history.title}</h4>
              <small><strong>Release date:</strong> {history.release_date}</small>
              <br/>
              <small><strong>Summary:</strong>{history.overview}</small>
              <br/>
              <div className='comment'>
                <small><strong>Comment:</strong></small>
                {editable === true &&
                  <input type='text' ref={input => this.comment = input} defaultValue={history.comment}/>
                }

                { editable === false &&
                  <p>{history.comment}</p>
                }
                <button onClick={() => this.handleEdit(history)}>{editable ? 'Submit' : 'Edit'}</button>
              </div>
              <button onClick={() => this.addFavorite(history)}>add to favorites</button>
            </div>
            <br/>
            <br/>
            <br/>
          </div>
          <br/>
          <br/>
          <br/>
        </div>
      }
      </>
    )
  }
}

export default HistoryShow
