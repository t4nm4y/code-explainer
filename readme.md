
# Code Explainer CLI Application
This is a CLI application that can be used to fetch the code of the active file and provide its detailed English explanation.

It uses Open API to provide the explanation.

I have provided the .env file as well with the `OPEN_API_KEY` for easy evaluation of my project.

## Extra features added
- Analyse the code for any errors.

## Tech-Stack used
Node.js

## CLI options
`-h` or `--help`: to show help 

`--version`: to show version number

`--er`: to find any error in the code

## Setup
1. Clone the Repository 
   ```bash
   git clone https://github.com/t4nm4y/code-explainer
   ```
2. Install Dependencies
   ```bash
   cd code-explainer
   npm install
   npm install -g
   ```
   You have to run both these commands:
   
   npm install: to install all the required packages.
   
   npm install -g: to install the CLI globally on your system.

   Run this command to check if the CLI is properly installed on your system.
   ```bash
   cex --version
   ```
   It should display the version no. eg: 1.0.0. if it's correctly installed.

4. Set Up OpenAI API Key:
   
   I have already provided it in the .env file.
   
   In case it is not there create a .env file in the root directory and paste your key, value there as:

    OPENAI_API_KEY=your_key

5. Run the CLI:
   
   Go to  directory of your code and run:
   ```bash
   cex .\filename
   ```
   OR in any directory you can run:
    ```bash
    cex path-of-the-code-file
    ```
6. To Uninstall the CLI run:
   ```bash
   npm uninstall -g code-explainer
   ```
## Demo Video:

https://github.com/t4nm4y/code-explainer/assets/88146479/5dd197c9-3208-4feb-8b5f-894fbfd352b3



## Screenshots:
Code explanation:

![Screenshot_20231220_223340](https://github.com/t4nm4y/code-explainer/assets/88146479/5207d14e-34de-4b32-a066-ae89a6c30763)

Finding errors:
![Screenshot_20231220_233844](https://github.com/t4nm4y/code-explainer/assets/88146479/b7f0b5ed-8db0-4043-8efd-64ae844ef25b)



### Made with ❤️ by Tanmay Kumar.
