# judge-trial

A test repo for trying temple-bar on real GitHub, where a pull request can't
fake it: the judge (which only runs from the default branch), setup's
rulesets and CodeQL. Not a real project.

`check.js` stands in for a project's gate: CI fails whenever a file named
`broken` exists, so a trial pull request can pass or fail on purpose.

Trial branches and pull requests are closed once their trial is finished.
