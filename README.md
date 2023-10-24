# Jupyterlab Scicap Verdant

This project is an adaptation of the Verdant project for Science Capsule. Events from Verdant are intercepted and sent to an API so that jupyter events can be stored with other Science Capsule events.

## Verdant

🌱🌿🌱 Verdant is a JupyterLab extension that automatically records history of all experiments you run in a Jupyter notebook, and stores them in a tidy .ipyhistory JSON file designed to be work alongside and compliment any other version control you use, like SVN or Git. Verdant also visualizes history of individual cells, code snippets, markdown, and outputs for you, for quick checks and references as you work.

For design discussion and the research behind this check out the [paper](https://marybethkery.com/projects/Verdant/Towards_effective_foraging_by_data_scientists.pdf):

> Mary Beth Kery, Bonnie E. John, Patrick O’Flaherty, Amber Horvath, and
> Brad A. Myers. 2019. Towards Effective Foraging by Data Scientists to Find
> Past Analysis Choices. In Proceedings of ACM SIGCHI, Glasgow, UK, May
> 2019 (CHI’19), 11 pages. DOI: 10.475/123 4

## Install for Local Development

If developing and making changes to the package locally, run the following commands after making changes:

```bash
# Install package in development mode
pip install -e .
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Enable the server extension
jupyter server extension enable jupyterlab_scicap_verdant
# Rebuild extension Typescript source after making changes
jlpm run build
```

Check that the extension is installed and enabled:

```bash
jupyter labextension list
```

Run jupyterlab:

```bash
jupyter lab
```

## Build and Publish

First rebuild the labextension and commit changes.

```
jlpm run build
pip install -e .
git commit add .
git commit -m "My updates"
```

Then upgrade the package version using npm.

```
npm version patch
```

Then build the python distribution.

```
jlpm run build:dist
```

Then publish the `.whl` file to pypi.

```
jlpm run publish
```

In order to publish, you will have to authenticate with pypi and your account must have permission to administer the [jupyterlab-scicap-verdant package](https://pypi.org/project/jupyterlab-scicap-verdant/) on pypi.

## Acknowledgements

The original Verdant library was authored by Mary Beth Kery. Research has been funded by Bloomberg L.P. and has been conducted at the Bloomberg L.P. and at the [Natural Programming Group](https://www.cs.cmu.edu/~NatProg/) at the [Human-Computer Interaction Institute](https://hcii.cmu.edu/) at Carnegie Mellon University. Thank you to the [JupyterLab project](https://github.com/jupyterlab/jupyterlab) and also to all our awesome study participants for volunteering early design feedback!
