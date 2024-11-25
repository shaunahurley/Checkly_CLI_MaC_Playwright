
import { SmsAlertChannel, EmailAlertChannel } from 'checkly/constructs'

require('dotenv').config()

const sendDefaults = {
  sendFailure: true,
  sendRecovery: true,
  sendDegraded: false,
}

export const emailChannel = new EmailAlertChannel('email-channel-1', {
  address: 'hurleyshauna7@gmail.com',
  ...sendDefaults
})

module.exports = {
  emailChannel
}

