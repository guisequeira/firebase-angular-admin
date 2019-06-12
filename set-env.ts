import { writeFile } from 'fs';
import { argv } from 'yargs';

// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file
require('dotenv').config();

// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object
const environment = argv.environment;
const isProd = environment === 'prod';

const targetPath = `./src/environments/environment.${environment}.ts`;
const envConfigFile = `
export const environment = {
  production: ${isProd},
  NDB_API_KEY: '${process.env.NDB_API_KEY}',
  firebase: {
    apiKey: '${process.env.FIREBASE_API_KEY}',
    authDomain: 'cms-curso.firebaseapp.com',
    databaseURL: 'https://cms-curso.firebaseio.com',
    projectId: 'cms-curso',
    storageBucket: 'cms-curso.appspot.com',
    messagingSenderId: '${process.env.FIREBASE_MESSAGING_SENDER_ID}'
  }
};
`
writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
});
