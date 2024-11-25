import { BrowserCheck, Frequency } from 'checkly/constructs'
import { emailChannel } from '../../alert-channels'
import * as path from 'path'

new BrowserCheck('example-browser-check', {
  name: 'Example',
  code: {
    entrypoint: '../tests/example.spec.ts'
  },
  alertChannels: [emailChannel]
})
