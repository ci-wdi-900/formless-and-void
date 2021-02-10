# Formless and Void

A form-inputs-and-git-collaboration project.

### The Basics

You'll be working **in groups** to make a form, with:

- The content that you (and your partners) decide on... be creative!
- Whatever form field types you want... go wild!
- Automatic printing of results thanks to the bit of JavaScript in `main.js`... don't touch!

### What Form Types Can I Include?

You can find [a list of form input types here](https://www.w3schools.com/html/html_form_input_types.asp). All of them _should_ work expect for `radio` and `checkbox`, though they also may not have their full functionality without some JavaScript. Experiment to see what works and what you like!

### The Basic Workflow For Adding A Form Input Field In This Project

1. Add an input tag of the type you want to the `#form` `div`, making SURE to give the input tag an `id`.
2. Add an `h1` tag to the `#results` `div`, making SURE to give it the exact same `class` as the input's `id`. (Note which one of those is an `id` and which is a `class`, and check your spelling!)
3. Fill out the form and hit the submit button. The JavaScript in `main.js` will do the rest!

### Git Collaboration

You're going to work on this together using `git`. Here are your basic steps.

- One teammate will fork this repo. This will be the repo that everyone submits as an assignment.
- That teammate will add the other team members as "Collaborators".
  - First, go to "Settings" for your FORKED repo (with your username in the url!). It's a tab on top.
  - Then, "Manage Access" on the left.
  - Finally, hit "Invite teams or people" and enter the usernames of your collaborators.
  - Now the collaborators just have to follow the link in their email!
- You will all `git clone` the repository to your machines.
- When it's someone else's turn to "drive", the current driver can push up (`git add` and `git commit -m "[some message]"` first!), and the new driver will do a `git pull` to get the changes the previous driver added.
- Always always _always_ `pull` before you start working.
- Repeat until you're done! (Make sure to push one final time.)

### Resources

[All form input types.](https://www.w3schools.com/html/html_form_input_types.asp)
[Resolving merge conflicts.](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts)
