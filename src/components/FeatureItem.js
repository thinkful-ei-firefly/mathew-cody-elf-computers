import React from 'react'

class FeatureItem extends React.Component {

  makeItemJsx(item, index) {
    const selectedClass = item.name === this.props.selected.name ? 'feature__selected' : '';
    const featureClass = 'feature__option ' + selectedClass;
    return (
      <li
        key={index}
        className={featureClass}
       onClick={e => this.props.handleUpdate(this.props.featureKey, item)}
      >
        {item.name}
        ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
          .format(item.cost)})
      </li>
    )
  }


  render() {
    // console.log(this.props.appState)
    return (
      <ul className="feature__list">
        {this.props.item.map((item, index) => {
          // console.log('FeatureItem: ',this.props.selected)
          return this.makeItemJsx(item, index)
        })}
      </ul>
    )
  }

}

export default FeatureItem;