import React from 'react'
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
} from 'react-native'
import { connect } from 'react-redux'

import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends React.Component {
  componentWillUpdate() {
    LayoutAnimation.spring()
  }

  renderDescription() {
    const { library, expanded } = this.props

    if (expanded) {
      return (
        <CardSection>
          <Text style={styles.descriptionStyle}>{library.description}</Text>
        </CardSection>
      )
    }
  }

  render() {
    const { id, title } = this.props.library

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  descriptionStyle: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id
  return { expanded }
  // Above works really well in more complex apps
}

export default connect(mapStateToProps, actions)(ListItem)
// What 'actions' does
// 1. Mutates action creator which is a dumb function that just returns an object into something special, so whenever it is called, it automatically dispatches the returned action to the store.
// 2. Takes all the actions and passes them all to the props
