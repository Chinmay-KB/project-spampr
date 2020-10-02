[![Starware](https://img.shields.io/badge/⭐-Starware-f5a91a?labelColor=black)](https://github.com/zepfietje/starware)
*The probot app is currently in review for being pulished in the Github Matketplace"
# project-spampr

> A GitHub App built with [Probot](https://github.com/probot/probot). A probot app to try label spammy pull requests. Upon listening to the news of how people were spamming legit repos with spammy PRs for a Hacktoberfest T-shirt, I decided to take matter in my own hands😎😎

## What it does
If the bot feels the PR is a spammy pr, it will add "spam", "invalid", "spamprbot-reject" and "spamtober" tags in the pr, along with a *personalized* comment!
If the bot feels the PR is legit, it adds a "spamprbot-accept" tag and a simple comment.
The maintainer then can view all the pull requests by this tag and close them if required.

## How it does
*Assumptions were made*
The bot takes a dumb assumption that if a user has been assigned an issue, only then will his/her PR be seen as a legit PR. If someone who is not assigned any issue makes a contribution, their PR will me marked invalid.
This may not be a perfect use case, but may be helpful for repositories who are getting tens and hundreds of such spammy PRs for hacktoberfest. If this workflow can hinder your contributions in the PR, then kindly do not use this bot

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```
This will run the bot in localhost. You can install it in your repositories from localhost itself.
## Contributing

If you have suggestions for how project-spampr could be improved, or want to report a bug, open an issue! I'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2020 Chinmay Kabi <chinmay.kabi@live.com>

## Starware

project-spampr is Starware.  
This means you're free to use the project, as long as you star its GitHub repository.  
Your appreciation makes us grow and glow up. ⭐
