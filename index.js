const core = require('@actions/core');
const github = require('@actions/github');
const path = require('path');

try {
  const projectsPath = core.getInput('projects-path') || './projects';
  const oldPrefix = core.getInput('old-prefix') || 'sixense';
  const newPrefix = core.getInput('new-prefix') || 'sxd-platform';
  const publishRegistry= core.getInput('publish-registry') || 'https://npm.pkg.github.com/';

  console.info(`Beyong packages rename running !`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.info(`The event payload: ${payload}`);

  glob.sync(`${projectsPath}/**/package.json`).forEach((file) => {
    const package = require(path.resolve(file));
    if (package.name) {
      package.publishConfig = {
        registry: publishRegistry,
      };
      package.name = package.name.replace(oldPrefix, newPrefix);
      require('fs').writeFileSync(file, JSON.stringify(package, null, 2));
    }
    console.info(`Beyond packages renamed !`,package.name);
  });


} catch (error) {
  core.setFailed(error.message);
}