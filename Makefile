deploy:
	git checkout main
	git pull
	git checkout develop
	git pull
	git rebase main
	git checkout main
	git merge develop
	git push