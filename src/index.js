const core = require("@actions/core");
const github = require("@actions/github");

try {
	const tag = core.getInput("tag");
	const token = core.getInput("token");

	const oktokit = github.getOctokit(token);

	let release;
	oktokit.repos.getReleaseByTag(tag).then((value) => release = value);
	// let release = github.request('GET /repos/{owner}/{repo}/releases/tags/{tag}', {
	// 	owner: github.context.repo.owner,
	// 	repo: github.context.repo.repo,
	// 	tag: tag
	// });
	core.setOutput('uploadUrl', release);
} catch (error) {
	core.setFailed(error.message);
}
