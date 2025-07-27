# Setup Ruby Virtual Environment
echo -e
echo "INFO: Install Project Version of Ruby with Rbenv"
# $HOME/.rbenv/versions/3.4.5
project_ruby_version="$(cat .ruby-version)"
echo "INFO: Project Ruby Version: $project_ruby_version"
rbenv versions | grep -q $project_ruby_version || rbenv install $project_ruby_version

echo -e
echo "INFO: Activating Virtual Environment"
rbenv local $project_ruby_version

# Download Project Libraries
echo -e
echo "INFO: Installing Libraries (Gemfile)"
bundle config set --local path '.vendor/bundle'   # stores gems in ./vendor
bundle config set --local binstubs .bin           # set binstubs directory
bundle install                                    # install gems
bundle binstubs --all --path=.bin                 # generate binstubs for all gems
export PATH="$PWD/.bin:$PATH"
