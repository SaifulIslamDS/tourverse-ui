const firebaseConfig = {
    apiKey: process.env.TOURVERSE_APP_API_KEY,
    authDomain: process.env.TOURVERSE_APP_AUTH_DOMAIN,
    projectId: process.env.TOURVERSE_APP_PROJECT_ID,
    storageBucket: process.env.TOURVERSE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.TOURVERSE_APP_MESSAGING_SENDER_ID,
    appId: process.env.TOURVERSE_APP_APP_ID,
};
export default firebaseConfig;

console.log(process.env);