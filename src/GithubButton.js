import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { GithubIcon } from './icons'
import { darkStyle, lightStyle, disabledStyle, hoverStyle } from './styles'

export default class GithubButton extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    disabled: PropTypes.bool,
    tabIndex: PropTypes.number,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['light', 'dark']),
    style: PropTypes.object
  }

  static defaultProps = {
    label: 'Sign in with Github',
    disabled: false,
    type: 'dark',
    tabIndex: 0,
    onClick: () => {}
  }

  state = {
    hovered: false
  }

  getStyle = propStyles => {
    const baseStyle = this.props.type === 'dark' ? darkStyle : lightStyle
    if (this.state.hovered) {
      return { ...baseStyle, ...hoverStyle, ...propStyles }
    }
    if (this.props.disabled) {
      return { ...baseStyle, ...disabledStyle, ...propStyles }
    }
    return { ...baseStyle, ...propStyles }
  }

  mouseOver = () => {
    if (!this.props.disabled) {
      this.setState({ hovered: true })
    }
  }

  mouseOut = () => {
    if (!this.props.disabled) {
      this.setState({ hovered: false })
    }
  }

  click = e => {
    if (!this.props.disabled) {
      this.props.onClick(e)
    }
  }

  render() {
    const { label, style, ...otherProps } = this.props

    return (
      <div
        {...otherProps}
        role="button"
        onClick={this.click}
        style={this.getStyle(style)}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
      >
        <GithubIcon {...this.props} />
        <span>{label}</span>
      </div>
    )
  }
}
