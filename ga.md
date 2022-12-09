
- You can configure a GitHub Actions workflow (defined by a YAML file checked in to your repository at  .github/workflows) to be **triggered** when an event occurs in your repository
    -  such as a pull request being opened or an issue being created. (Event)
- Your workflow contains one or more jobs which can run in:
    -  sequential order or
    -  parallel.

- Workflow can be triggered by an event in your repository, or they can be triggered manually, or at a defined schedule.

- Each repository can have multiple workflows, each of which can perform a different set of tasks

```
 Similar to each awk statement consists of a pattern with an associated action.
```


 - [ Continuous Integration (CI) with GitHub Actions ](https://www.youtube.com/watch?v=2fjqhwgwgCE)

- Event (say: Commit, Pull Request, Issues, ..., can be filtered)
	- Triggers Workflow
		- Execute Jobs
			- Steps -> Actions
		
- Workflow (.yml file in .github/workflows folder)
	- Jobs
		- Steps	
## References
- [Understanding GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)
