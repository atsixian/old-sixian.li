const semver = require("semver");
const { promisify } = require("util");
const exec = promisify(require("child_process").exec);

(async function () {
  try {
    // get the latest version from npm
    const versionData = await exec(`yarn info lisixian version --json`);
    const version = JSON.parse(versionData.stdout).data;
    console.error(versionData.stderr);
    // generate new version
    const newVersion = semver.inc(
      version,
      Math.random() > 0.8 ? "minor" : "patch"
    );
    const clean = await exec("yarn clean");
    console.log(clean.stdout);
    console.error(clean.stderr);
    const build = await exec("yarn build", {
      env: {
        ...process.env,
        GATSBY_BUILD_VERSION: newVersion,
      },
    });
    console.log(build.stdout);
    console.error(build.stderr);
    const publish = await exec(
      `git config --global user.email lisixian579@gmail.com; git config --global user.name "Sixian"; yarn publish --new-version ${newVersion}`
    );
    console.log(publish.stdout);
    console.error(publish.stderr);
  } catch (error) {
    console.error(error);
    process.exit(-1);
  }
})();
