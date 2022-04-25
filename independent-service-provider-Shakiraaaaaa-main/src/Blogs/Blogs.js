import React from 'react';

const Blogs = () => {
    return (
        <div id='blogs'>
            <h1>Question one :  Difference between authorization and authentication</h1>
            <h6>Simply expressed, authentication is the process of confirming a person's identity, whereas authorization is the process of confirming a user's access to specific apps, files, and data. The scenario is similar to that of an airline deciding which passengers are allowed to board. These are the same aims that authentication and authorization achieve. Authentication is a technique for ensuring that people are who they say they are. After this has been verified, authorisation is used to provide the user authority to access various levels of information and execute certain duties, based on the rules defined for various sorts of users.</h6>
            <h1>Question two :  Why are you using firebase? What other options do you have to implement authentication?</h1>
            <h6>By allowing secure access to the database directly from client-side code, the Firebase Realtime Database allows us to create rich, collaborative applications. Data is stored locally, and realtime events continue to trigger even when the user is offline, providing a responsive experience.
                To authenticate users to your project, Firebase Authentication delivers backend services, easy-to-use SDKs, and ready-to-use UI frameworks. It accepts passwords, phone numbers, and prominent federated identity providers like Google, Facebook, and Twitter, among other methods.
            </h6>

        </div>
    );
};

export default Blogs;