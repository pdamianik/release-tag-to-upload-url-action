const core = require("@actions/core");
const github = require("@actions/github");

try {
	const tag = core.getInput("tag").replace('refs/tags/', '');
	console.log(`tag: ${tag}`);
	const token = core.getInput(`token`);
	console.log(`token: ${token}`);

	const oktokit = github.getOctokit(token);

	const owner = github.context.repo.owner;
	console.log(`owner: ${owner}`);
	const repo = github.context.repo.repo;
	console.log(`repo: ${repo}`)

	oktokit.repos.getReleaseByTag({
		owner,
		repo,
		tag
	}).then((value) => core.setOutput('uploadUrl', value.data.upload_url)).catch((reason) => core.setFailed(reason));
	// let release = github.request('GET /repos/{owner}/{repo}/releases/tags/{tag}', {
	// 	owner: github.context.repo.owner,
	// 	repo: github.context.repo.repo,
	// 	tag: tag
	// });
} catch (error) {
	core.setFailed(error.message);
}
