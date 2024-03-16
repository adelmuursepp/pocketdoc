# PocketDoc

Facilitating the appointment process through AI

Check out our [technical demo](https://www.youtube.com/watch?v=iepbyKEVYv4)!

## 💡Inspiration

10 million Canadians will be without a family doctor in the next three to four years.​ This crisis disproportionately affects specific communities, including senior citizens, international students, and low-income individuals.​ The healthcare industry is facing a widespread doctor shortage, resulting in burdened healthcare professionals and prolonged wait times. Patient needs must be streamlined — currently, despite the nature of an appointment, doctors still have to go through the diagnostic process, which can be inefficient.​

Introducing PocketDoc.

## 🔍 What it does

PocketDoc is a healthcare AI app dedicated to providing patients with accurate medical information about themselves. Jump right into it by calling our AI agent who will ask you about your symptoms and pinpoint the problem. If needed, the agent will also direct you to the nearest clinic to get the appropriate treatment. Once the call is over, PocketDoc saves the conversation and displays some helpful recommendations that the patient can follow before or after their appointment.

We also built an admin dashboard for the doctors themselves, who can toggle optional check-ins with their patients. If a check-in is suggested, our AI agent will call the patient, asking them some follow-up questions to ensure the patient is recovering properly.

## ⚙️ How we built it

We constructed the front end with React, JavaScript, and TailwindCSS. We built the backend with Python, Flask, and MongoDB. We also leveraged Thoughtly for the AI agent communication, Zapier for integration between the agent and the saved transcript, and Google Cloud to grab the data in our backend and store/retrieve it through our database. Finally, we used OpenAI's API to provide recommendations based on the user transcript. The backend is deployed on Heroku and the frontend is on Netlify.

<img width="841" alt="Screenshot 2024-03-16 at 2 56 09 PM" src="https://github.com/Ezzhingy/pocketdoc/assets/86681988/40689c70-9358-49ae-9da5-a3998c86e7bb">

## 🚧 Challenges we ran into

Integrating all the APIs together proved to be a bit of a challenge. However, it was well worth it once everything clicked into place.

## ✔️ Accomplishments that we're proud of

<ul>
  <li>The integration of Thoughtly with Zapier, Google Cloud, & Google Sheets</li>
  <li>Mapping out the user journey and flow</li>
</ul>

## 📚 What we learned

<ul>
<li>How to successfully take a full-stack project end-to-end in < 24 hours as a team of two developers</li>
<li>How to scope and bring out the business aspect of our application</li>
</ul>

## 🔭 What's next for PocketDoc!

<ul>
<li>Migrating to CRMs and switching over to Airtable for cloud scalability</li>
<li>Integrating the concept of memory into our AI agent, giving it the ability to remember past consultations with patients.</li>
<li>We are planning on scaling PocketDoc to a national audience. As we wrap up our financial modelling, we hope to pitch our idea at incubators and toward potential investors</li>
</ul>
