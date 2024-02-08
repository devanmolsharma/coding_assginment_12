FROM node:21.6.1

WORKDIR /usr/sharma_anmol_ui_garden

COPY ./ ./

RUN npm install

CMD ["npm","run", "storybook"]

EXPOSE 6006