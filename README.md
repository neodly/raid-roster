## Raid Roster

## Django and react app to present a raid roster

# Backend
```
 curl -L https://raw.githubusercontent.com/yyuu/pyenv-installer/master/bin/pyenv-installer | bash 
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install -y make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev git

echo "export PATH="~/.pyenv/bin:$PATH" \ 
eval "$(pyenv init -)" \ 
eval "$(pyenv virtualenv-init -)" >> ~/.bashrc

pyenv install 3.8.0
pip install pipenv

pipenv install 
pipenv python manage.py runserver
```

# Frontend
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

echo "export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" \
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"" >> ~/.bashrc
cd frontend
nvm install --lts
npm -g yarn
yarn install
yarn dev
```