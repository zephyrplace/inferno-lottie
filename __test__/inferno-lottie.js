import { render } from 'inferno'
import pinjump from './pinjump.json'

import Lottie from '../index'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: pinjump,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

describe('inferno-lottie', function () {
  describe('#render', function () {
    it('should render with default options', function () {
      const component = <Lottie options={defaultOptions} />
      const div = document.createElement('div')
      render(component, div)
    })
  })
})
