# Checkly_CLI_MaC_Playwright
 
# Setting up a CLI-driven checkly setup
1. Login to Checkly: npx checkly login
2. Go to the directory holding your current project:
   If using TypeScript, install ts-node and typescript: npm i —save-dev ts-node typescript
4. Create a checkly.config.ts (or checkly.config.js) at the root of your project
  TypeScript & JavaScript example: https://www.checklyhq.com/docs/cli/installation/

# Playwright tests
1. Sync your playwright config file with the checkly config file: npx checkly sync-playwright
2. You can specify the folder that holds all of your Playwright tests, and everytime you do a check, it will check all of the contents in that folder, even new tests. To specify the folder, you can go into checkly.config.ts > defineConfig parameter > checks > browserChecks > testMatch key. Change the value for the testMatch key to the location of the folder containing your test scripts.
3. To perform a check of your Playwright tests run: npx playwright test
4. You can add all of your Playwright checks that have already been added to Checkly by clicking on their name > three dots > Export to Code and adding that into your tests folder

# Alerts via email
1. Create a Browser Check
 MaC checks are usually added in a specific structure. They are inside of a __check__ folder that is inside of a src folder. If you would like to use a different location, keep in mind that you will need to change   the path for the checks in the checkly.config.ts
 define Config parameter > checks > checkMatch
2. Deploy your project: npx checkly deploy
  you will not receive any notifications unless the check was previously set up, or you set it up
3. Setup your environment variables for notifications
  Go into the file containing your browser check and add the alertChannels attribute, which will only contain the email channel in your case:
  alertChannels: [emailChannel]


Browser Checks: https://www.checklyhq.com/docs/cli/constructs-reference/#browsercheck
Environment Variables: https://www.checklyhq.com/docs/cli/using-environment-variables/
Environment Structure: https://www.checklyhq.com/docs/cli/project-structure/


