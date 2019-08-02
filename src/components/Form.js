import React from 'react'
import FeatureList from './FeatureList'

class Form extends React.Component {

  render() {
    return (
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        {/* loops over <FeatureList /> */}
        {/* {this.getFormCategoryJsx()} */}
        <FeatureList 
          appState={this.props.appState}
          features={this.props.features} 
          handleUpdate={this.props.handleUpdate}
        />
      </section>

    )
  }
}

export default Form;