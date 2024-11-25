import { defineConfig } from 'checkly'

export default defineConfig({
  projectName: 'Website Monitoring',
  logicalId: 'website-monitoring-1',
  repoUrl: 'https://github.com/acme/website',
  checks: {
    checkMatch: '**/**/*.check.ts',
    playwrightConfig: {
      use: {},
    },
    browserChecks: {
      testMatch: '**/*.spec.ts',
    },
  },
  cli: {
    runLocation: 'eu-west-1',
  }
})






