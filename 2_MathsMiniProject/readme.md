## To run this project on your local device you must have python and pip installed on your local device

# Setting up the project on your local device

## 1_ Create a virtual environment 
note : Optional step
### `python -m venv env`
this will create a directory named env you will have to start this environment before going further 

step 1: `cd env/scripts` <!--move to scripts -->
step 2: `./activate` <!-- activate the environment  -->
step 3: `cd ../../` <!-- move to base directory -->


## 2_ download all the dependencies 

open a terminal in this directory and run the following command to download all the dependencies 

### `pip install -r requirements.txt`

## 3_ start jupyter notebook

after installation of all the dependencies you can run the following command to start a local server to run and edit temp.ipynb

### `jupyter notebook`

# following command works on windows command may vary for diffrent os
[Virtual_env_docs](https://docs.python.org/3/library/venv.html)
[jupyterNotebook_docs](https://jupyter-notebook.readthedocs.io/en/stable/)