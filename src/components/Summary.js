import React from 'react'

class Summary extends React.Component {

  summary(key) {
    return (
      <div className="summary__option" key={key}>
        <div className="summary__option__label">{key}  </div>
        <div className="summary__option__value">{this.props.appState.selected[key].name}</div>
        <div className="summary__option__cost">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(this.props.appState.selected[key].cost)}
        </div>
      </div>
    )
  }

  total() {
    return(
    Object.keys(this.props.appState.selected)
      .reduce((acc, curr) => acc + this.props.appState.selected[curr].cost, 0)
    )
  }

  render() {
    return (
      <section className="main__summary">
        <h3>NEW GREENLEAF 2018</h3>

        {Object.keys(this.props.appState.selected)
          .map(key => this.summary(key))
        }

        <div className="summary__total">
          <div className="summary__total__label">Your Price: </div>
          <div className="summary__total__value">
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
              .format(this.total())}
          </div>
        </div>
      </section>
    )
  }
}

export default Summary;