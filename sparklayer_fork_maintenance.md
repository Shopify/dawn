# Keeping this fork up to date

Steps for updating this repo with a new published version from upstream.

1. Clone this repo to your local machine
2. Configure upstream with `git remote add upstream git@github.com:Shopify/dawn`
3. Run `git fetch upstream`
4. Create a branch off of main named after the [latest](https://github.com/Shopify/dawn/releases) available version in the upstream repo (eg. v10) and switch to it
5. Merge the changes from the upstream tag, eg. `git merge v10.0.0`
6. Resolve any merge conflicts and commit
7. Push your branch to GitHub and open a PR
