import React from 'react'
import GithubButton from '../../src'
import { shallow } from 'enzyme'

const defaults = {
  label: 'Sign in with Github',
  backgroundColor: '#000000'
}

const disabledStyle = {
  backgroundColor: 'rgba(37, 5, 5, .08)'
}

describe('react-github-button Library', () => {
  describe('exports a component', () => {
    expect(GithubButton).to.exist
  })

  describe('Component', () => {
    let _component

    describe('Default Props', () => {
      beforeEach(() => {
        _component = shallow(<GithubButton />)
      })
      it('Renders div', () => {
        const firstDiv = _component.find('div')
        expect(firstDiv).to.exist
      })

      it('Sets correct label text', () => {
        const firstDiv = _component.find('span')
        expect(firstDiv.first().text()).to.equal(defaults.label)
      })

      it('Applies styles', () => {
        const firstDiv = _component.find('div')
        expect(firstDiv.first()).to.have.style(
          'background-color',
          defaults.backgroundColor
        )
      })
    })

    describe('Custom Label', () => {
      const customLabel = 'Custom Label'

      beforeEach(() => {
        _component = shallow(<GithubButton label={customLabel} />)
      })

      it('Renders div', () => {
        const firstDiv = _component.find('div')
        expect(firstDiv).to.exist
      })

      it('Sets correct label text', () => {
        const firstDiv = _component.find('span')
        expect(firstDiv.first().text()).to.equal(customLabel)
      })
    })

    describe('Disabled', () => {
      beforeEach(() => {
        _component = shallow(<GithubButton disabled />)
      })

      it('Renders div', () => {
        const firstDiv = _component.find('div')
        expect(firstDiv).to.exist
      })

      it('Applies background color', () => {
        const firstDiv = _component.find('div')
        expect(firstDiv.first()).to.have.style(
          'background-color',
          disabledStyle.backgroundColor
        )
      })
    })

    describe('onClick', () => {
      let clickSpy
      beforeEach(() => {
        clickSpy = sinon.spy()
        _component = shallow(<GithubButton onClick={clickSpy} />)
      })

      it('Calls onClick prop when clicked', () => {
        _component.simulate('click')
        expect(clickSpy).to.have.been.calledOnce
      })
    })

    describe('Hover', () => {
      beforeEach(() => {
        _component = shallow(<GithubButton />)
      })

      it('Sets hover style on hover', () => {
        _component.simulate('mouseover')
        const firstDiv = _component.find('div')
        expect(firstDiv.first()).to.have.style(
          'box-shadow',
          '0 0 3px 3px rgba(66,133,244,.3)'
        )
        expect(firstDiv.first()).to.have.style(
          'transition',
          'background-color .218s, border-color .218s, box-shadow .218s'
        )
      })

      it('Sets original style when mouse leave', () => {
        _component.simulate('mouseout')
        const firstDiv = _component.find('div')
        expect(firstDiv.first()).to.have.style(
          'background-color',
          defaults.backgroundColor
        )
        expect(firstDiv.first()).to.have.style(
          'background-color',
          defaults.backgroundColor
        )
      })
    })
  })
})
