
# Code Explainer CLI Application
This is a cli application that can be used to fetch code of the active file and provide its detailed English explanation.

It uses Open API for providing the explanation.

I have provided the .env file as well with the `OPEN_API_KEY` for easy evaluation of my project.

## Tech-Stack used
Node.js

## CLI options
`-h` or `--help`: to show help 

`--version`: to show version number

## Setup
1. Clone the Repository 
   ```bash
   git clone https://github.com/t4nm4y/code-explainer
   ```
2. Install Dependencies
   ```bash
   cd code-explainer
   npm install -g
   ```
   -g is used to install it globally on your system.

3. Set Up OpenAI API Key:
   
   I have already provided it in the .env file.
   
   In case it is not there create a .env file in the root directory and paste your key, value there as:

    OPENAI_API_KEY=your_key

4. Run the CLI:
   
   Go to  directory of your code and run:
   ```bash
   cex .\filename
   ```
   OR in any directory you can run:
    ```bash
    cex path-of-the-code-file
    ```

## Screenshots:

![Screenshot_20231220_223340](https://github.com/t4nm4y/code-explainer/assets/88146479/5207d14e-34de-4b32-a066-ae89a6c30763)



### Made with ❤️ by Tanmay Kumar.

