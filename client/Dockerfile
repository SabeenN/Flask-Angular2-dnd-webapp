FROM alexsuch/angular-cli:latest


COPY . /quickstart/

WORKDIR /quickstart/


RUN npm config set registry http://registry.npmjs.org/ \
  && npm config set strict-ssl false \
  && npm cache clear \
#  && npm install --save intl \
#  && npm install --save classlist.js \
#  && npm install --save web-animations-js \
  && npm install
#  && npm install ng2-dragula --save

EXPOSE 4200

#in case any error occurs while building the image comment the line for npm install and CMD
#and uncomment ENTRYPOINT. Build the image again. Run the docker image and then use following command to get inside the container and run npm install
#while in the container. This step will show in detail what went wrong:
# docker exec -ti (container id or name) sh
# npm --https-proxy=http://10.254.67.4:8080 install

#ENTRYPOINT ["tail", "-f", "/dev/null"]

#CMD ["ng", "serve","--host 0.0.0.0","--disable-host-check"]

CMD ["npm","start"]
