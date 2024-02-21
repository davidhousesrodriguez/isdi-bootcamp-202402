# GIT

Command interface commands typical in GIT HUB.

## git log (show all the repository commits )

```sh
$ git log
commit afeffa743736479982b404b9c647691403420962 (HEAD -> feature/arrays, origin/feature/arrays)
Author: davidhousesrodriguez <davidhouses@hotmail.com>
Date:   Fri Feb 16 18:32:40 2024 +0100
    add new forEach function #197```

## git status (shows the working directory state in wich we are working in )

```sh
$ git status
On branch feature/arrays
Your branch is up to date with 'origin/feature/arrays'.
nothing to commit, working tree clean

## git branch (shows the different branches on your repository, in green colour and * the one you are in)

```sh
$ git branch
  develop
* feature/arrays
  feature/playground
  feature/space-invaders
  
## git branch <Branch name> (creates a new branch)

```sh
$ git Branch 
  	Git Branch feature/playground
## git checkout <Branch name> (changes to another created branch

```sh
$ git checkout
  	git checkout feature/strings

## git checkout - b <Branch name> (creates a new Branch and gets into it)
```sh
$ git checkout -b
  	git checkout -b feature/playground


## git add <file path> (adds a file to the repository as a  first step, take care you are in the right branch)

```sh
$ git add <file path>
  	git add staff/davidhouses/feature/playground


## git commit -m ‘<imperative order> #<issue code>’ (commits a file to the right repository being specified by the code, mandatory an imperative instruction)

```sh
$ git commit -m ‘<imperative order> #<issue code>’
  	git commit -m’add playground updating code #123’
	git commit -m’WIP add playground updating code #123’ (means work in progress when it won’t be the very last one commit. As recomendation, don´t use more tan one WIP

## git push  (pushes the already done commit to repository)

```sh
$ git push
  	git push


## git push -f (in case the simple push goes wrong, it can be forced once the push instruction is asking you to do it)

```sh
$ git push -f
  	git push -f

## git add + git commit + git push  (complete sequence for any file updating)

```sh
$ git add + git commit +git push 
1-git add staff/davidhouses/feature/playground
2-git commit -m’add playground updating code #123’
3- git push
## git commit - - amend -m’imperative order #<issue code>’ (commits against last commit)

```sh
$ git commit  - -amend -m’imperative order #code’
	git commit  - -amend -m’imperative order #123’
	take care as this comand has to be part of the before explained sequence

## git commit - - amend - -no-edit ’ (commits against an specified commit as a temporary solution, a git add should be done but NO git push)( as the task isn´t finished, the complete sequence has to be done )

```sh
$ git commit - - amend - -no-edit
## git log - -graph( shows the branches as commits in master )

```sh
$ git commit - - graph
* commit afeffa743736479982b404b9c647691403420962 (HEAD -> feature/arrays, origin/feature/arrays)
| Author: davidhousesrodriguez <davidhouses@hotmail.com>
| Date:   Fri Feb 16 18:32:40 2024 +0100
|
|     add new forEach function #197
|
* commit c7f0b90b002c988025b96ea275c5ff0e03e4ebdf
| Author: davidhousesrodriguez <davidhouses@hotmail.com>
| Date:   Thu Feb 15 12:04:12 2024 +0100
|
|     add arrays code #197
|
* commit 126a7e6cd6d22fb98265db0fee8d66c71dcf73a4 (origin/develop, develop)
## git config - -list	( shows all Git config properties throughout all of the variously scoped Git files.)

```sh
$ git commit - - graph
	diff.astextplain.textconv=astextplain
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
