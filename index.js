const core = require('@actions/core');
const github = require('@actions/github');

try {
  const nameToGreet = core.getInput('projects-path');
  console.info(`Beyong packages rename running !`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.info(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}