
// Following are the git notes

//_____________________________________________________________________________

// 1- (git log) -----> Tells the commit and when the commit was done

// 2- (git status) ---> Tells which files are not in the staging area

// 3- (git add .) ---> Push the files into staging area

// 4- (git diff (filename)) ---> Tells the changes you have made in your file

// 5- (git checkout (filename)) --> Allow to restore the previous work that you pushed in the git

//________________________________________________________________________________

// 6- (git rm --cashed -r .) ---> To remove everything from staging area

// 7- (touch .gitignore) ---> To create a file named gitignore and you can put your file names inside it to ignore those files from getting uploaded to git

//___________________________________________________________________________

// 8- (git clone (link)) ---> To clone a remote repository to your local directory

//_________________________________________________________________________________

// 9- (git branch) ---> To look at the current branches of your working directory

// 10- (git branch (name)) ---> To create a branch with particular name

// Note -----> Asterics * shows which branch are you in right now... 
// Note -----> You have to write (git add .) and (git commit -m "") then it will complete the process of branching changes

// 11- (git checkout (name of branch you wanna switch to)) ---> To switch your branch

// Note----> You can make the changes in the other branch and it won't get reflected in the master branch... This is done to make the changes first and ensure that the changes are working absolutely fine and then we can merge the other branch with the main branch and now it will get reflected in the main branch...

// 12- (git checkout (main branch name))--->First go to the main branch
// 13- (git merge (second branch name))

// Note ---> Type (:q!) to save the vim file if you want

//______________________________________________________________________________

// Note --> "Fork" is an option given above the repositories in git and it allows other users to just copy the entire code from someone's repository to their own local repository and then he/she can make the modifications and then they can make a pull request to the author of the code to make changes if he/she likes... The owner can approve or close the pull request