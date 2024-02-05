FROM "ubuntu":latest

WORKDIR $HOME/lastName_firstName_ui_garden

COPY . $HOME/lastName_firstName_ui_garden

RUN apt update -y && apt update -y

RUN apt install -y npm

CMD [ "npm","run","dev" ]

EXPOSE 3000
