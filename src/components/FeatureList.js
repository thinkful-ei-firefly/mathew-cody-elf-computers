import React from 'react'
import FeatureItem from './FeatureItem'

class FeatureList extends React.Component {

  render() {
    // console.log(this.props.appState)
    return (
      <div className='main__form'>
        {Object.keys(this.props.features).map((key, index) => {
          return (
            <div className='feature' key={index}>
              <h3>{key}</h3>
              <FeatureItem
                selected={this.props.appState.selected[key]}
                store={this.props.AppState}
                item={this.props.features[key]}
                handleUpdate={this.props.handleUpdate}
                featureKey={key}
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default FeatureList;