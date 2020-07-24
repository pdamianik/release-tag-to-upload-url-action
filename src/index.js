const core = require("@actions/core");
const github = require("@actions/github");

try {
	const tag = core.getInput("tag");
	let release = github.getOctokit.request('GET /repos/{owner}/{repo}/releases/tags/{tag}', {
		owner: github.context.repo.owner,
		repo: github.context.repo.repo,
		tag: tag
	});
	core.setOutput('uploadUrl', release);
} catch (error) {
	core.setFailed(error.message);
}
