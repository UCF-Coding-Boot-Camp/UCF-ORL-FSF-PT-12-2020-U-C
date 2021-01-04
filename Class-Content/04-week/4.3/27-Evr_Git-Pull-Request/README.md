# Git Pull Requests

Previously, we practiced creating a new feature branch, committing and pushing the work, and then merging the finished feature branch with the core codebase. That basic workflow makes sense for a small solo project, but what about larger projects, with multiple developers working on several features simultaneously? Luckily, Github's pull request feature accommodates team development work!

A **pull request** allows us to collaborate on features after they're finished and before they're merged into a development branch or main codebase. Once a feature branch is finished and ready for review, we can open a pull request and invite team members to review the code, comment on it, and even push their own commits. Pull requests not only provide a chance to catch bugs before merging but also enable developers to discuss new features and any necessary modifications before moving forward.

In this activity, you'll open a pull request for a feature branch. For now, you'll only leave comments on and review  your own code. In future activities, you'll learn more about collaboration on GitHub and have the chance to work with others. Once the review is finished, you'll merge the pull request and delete the feature branch.

## Instructions

Just like other projects, we'll start by creating a new GitHub repository.

### Create the GitHub Repository

Navigate to your GitHub account and create a new repository called `pull-request-demo`. Make sure to select the "Add a README file" checkbox. You should see something like the following image:

![On the "Create a new repository" page, the user has named the repo "pull-request-demo" and selected the "Add a README file" option.](images/01-create-repo.png)

### Clone the New Repository

Now let's clone the newly created repository to the local machine. We can start to do so by clicking the green Code button, selecting the SSH option, and copying the value provided.

Before you perform the clone operation, use the `cd` command to navigate to the location where you want the repo cloned. Then, to clone it, you'll need to run the `git clone` command from your command line.

### Create a New Feature Branch

Once the repository is done cloning to your machine, navigate to the cloned repo's directory by using the `cd` command.

In the directory of this repo, create and switch to a new branch by running the following command:

```bash
 git checkout -b 01-my-new-feature
```
### Make a Change in the Browser

Time to update the project's README.md file. Go ahead and open it in your VS Code editor. 

For now, you should see just the name of the repository listed, along with `#`, which is the Markdown equivalent of an HTML `<h1>` element. Add more to this file to create some changes for Git to track&mdash;you can enter a message of your choice or copy the following markdown text to the bottom of the README.md file:

```md
Now, I am a demo for a Pull Request!
```

Great! Now let's run the following commands to add, commit, and push the changes:

```bash
  git add -A
  git commit -m "<commit message>"
  git push origin 01-my-new-feature
```

> **Note:** Don't forget to include a descriptive message to your commit.

You've made changes, committed, and pushed your new feature. Now it's time to open a pull request!

### Open a Pull Request in the Browser

After making these changes to the new feature, you'll need to open a pull request. Navigate to the repo page in your browser. You might see a message like the one shown in the following image: 

![Near the top of the pull-request-demo repo page, a pink arrow points to the green "Compare & pull request" button.](images/07-create-new-pr.png)

If you see this message, select the "Compare & pull request" button. If you don't see this message, don't worry! You can click on the "Pull requests" tab at the top of the screen. This will take you to the pull request hub. On this page, you can open a pull request by clicking on the green "New pull request" button, like in the following image:

![Near the top-right corner of the pull request hub page, a pink circle highlights the green "New pull request" button.](images/08-new-pr.png)

Now you should see a form for opening a pull request. First, make sure that you are comparing the feature branch that you've been working on to the correct base. In a larger dev environment, you'll likely base your feature branch off of a `dev` branch to avoid corrupting the core codebase. In this case, because the project is so tiny, you'll compare `01-my-new-feature` to the base branch, `main`. 

> **Deep Dive:** For more information, read this [Atlassian article on comparing workflows](https://www.atlassian.com/git/tutorials/comparing-workflows).

Give your pull request a descriptive title, and leave comments or reviews for teammates. A comment should include details about the changes in your feature branch that you want to merge.

The side panel offers other optional settings for your pull request. You can assign a reviewer (in this case, you'll review your own work), add assignees, or add labels to help organize your pull requests. These options are especially useful when working on bigger projects, but you can leave them blank for now.

Once you've filled out the form, click on the green "Create pull request" button at the bottom, as shown in the following image:

![At the top of the form to open a pull request, you can select base and comparison branches; to the right, you can assign and request reviews.](images/09-fill-out-pr.png)

Now you're ready to review your pull request!

### Review Pull Request

Once you've successfully opened your pull request, select the "Files changed" tab, which should take you to a page where you can view all of the changes that have been made. You can comment on these changes by clicking the plus sign (+) that appears when the cursor points at the code.

You can also begin a review of the changes on this page. Click on the green "Review changes" button on the right, as shown in the following image:

![On the "Files changed" tab, changes in the code appear in green and red, and a green "Review changes" button appears in the top right.](images/10-files-changed-review-button.png)

Once you click on the "Review changes" button, a box will appear. Enter a comment in the comment box (maybe something like, "Looks good to me!"). You can choose to provide feedback without approval, approve the merge, or request changes to be completed before merging. Select the first option, "Comment", and then click the green "Submit review" button, as shown in the following image:

![A comment box provides space to leave comments, with the "Comment" option selected over the "Submit review" button.](images/11-review-box.png)

On submitting, you'll be redirected to the "Conversation" tab, where you'll see the comment that you just left in your review, a histoy of commits, and a button to merge the pull request. It will look something like the following image:

![The Conversation tab displays the commit history, the comment from the review, and a green "Merge pull request" button at the bottom.](images/12-conversation-tab.png)

### Merge and Close Pull Request

Now that you've left a review and you don't need to make any more changes to your feature branch, you can merge and close your pull request!

Select the green "Merge pull request" button. Then you should get a request asking you to confirm the merge. Select the green "Confirm merge" button, as shown in the following image:

![A pink circle highlights the green "Confirm merge" button.](images/13-confirm-merge.png)

Success! At this point, Git offers the option to delete the remote feature branch. We're finished with the feature, so go ahead and select "Delete branch", as shown in the following image:

![A purple "Merged" label under the name of the pull request indicates success, with a "Delete branch" button at the bottom of the page.](images/14-merge-success.png)

Great! Now let's delete the feature branch locally.

### Delete Local Branch

Imagine how many branches you might open when working on a larger project with many features. To stay organized, it's good practice to delete a local branch once you've merged your feature. You've already deleted the remote feature branch in the browser, so now you'll delete the local feature branch. 

Navigate to the repo directory in your CLI, if you aren't there already. Run the following commands to switch to `main`, pull changes, and begin your next feature:

  ```bash
  git checkout main
  git pull origin main
  git branch -d 01-my-new-feature
  git checkout -b 02-my-next-feature
  ```

That's it!

### Recap

Think about everything you just accomplished. You've completed the following tasks:

* Created a new repo and a new feature branch. 

* Made changes to the repo on your feature branch.

* Added your changes, committed changes with a message, and pushed those changes to the remote branch. 

* Opened a pull request, comparing your feature branch with the base, `main`. 

* Left a review of your changes, merged the feature branch with `main`, and deleted the feature branch remotely. 

* Pulled the changes to your local `main` branch and deleted the local feature branch.

In the process, you gained valuable experience with some key Git workflows.

### Hints

Ask an instructor or TA if you get stuck or have any questions!

For more help, see the [Atlassian guide on Git pull requests](https://www.atlassian.com/git/tutorials/making-a-pull-request).

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
