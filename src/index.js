const core = require("@actions/core");
const github = require("@actions/github");

try {
	const tag = core.getInput("tag").replace('refs/tags/', '');
	const token = core.getInput("token");

	const oktokit = github.getOctokit(token);

	const owner = github.context.repo.owner;
	const repo = github.context.repo.repo;

	let release;
	oktokit.repos.getReleaseByTag({
		owner,
		repo,
		tag
	}).then((value) => release = value).catch((reason) => core.setFailed(reason));
	// let release = github.request('GET /repos/{owner}/{repo}/releases/tags/{tag}', {
	// 	owner: github.context.repo.owner,
	// 	repo: github.context.repo.repo,
	// 	tag: tag
	// });
	core.setOutput('uploadUrl', release);
} catch (error) {
	core.setFailed(error.message);
}
