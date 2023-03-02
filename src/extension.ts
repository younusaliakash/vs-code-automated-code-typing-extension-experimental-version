// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "auto-enter-press" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "auto-enter-press.automatedCoding",
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user

      let intervalId: NodeJS.Timeout;

      //   const text = `const projectName : string = "VS Code Automated Coding Extension"
      //   	const version : string = "v1.1.1"
      //   	const useFor : string = "VS Code"
      //   	const developerName : string = "Younus Ali Akash"
      //   `;
      const text = `const projectFeature = { 
		   name : "VS Code Automated Coding Extension",
	  	 version : "v1.1.1",
	  	 useFor : "VS Code",
	  	 developerName : "Younus Ali Akash",
		   exampleFunc : function calculate(x, y, op) {
        var answer;
        if ( op = "add" ) {
          answer = x + y;
        }
        else if ( op = "sub" ) {
          answer = x - y;
        }
        else if ( op = "multi" ) {
          answer = x * y;
        }
        else if ( op = "divide" ) {
          answer = x / y;
        }
        else {
          answer = "Error";
        }
        return answer;
      }
      }
	  `
        .split("\n")
        .map((s) => s.trim())
        // If you want to remove empty lines.
        .filter(Boolean)
        .join("\n");

      const delay = 100; // Delay between each character (in milliseconds)

      // Start the interval timer when the extension is activated
      //   intervalId = setInterval(() => {
      let index = 0;
      function type() {
        vscode.commands.executeCommand("type", {
          text: `${text.charAt(index)}`,
        });
        // process.stdout.write(text.charAt(index));
        index++;
        if (index < text.length) {
          setTimeout(type, delay);
        } else {
          vscode.commands.executeCommand("type", {
            text: ` \n`,
          });
        }
      }

      type();

      // Press the Enter key
      // vscode.commands.executeCommand("type", {
      //   text: `"${text.charAt(index)} ${new Date().toLocaleString()}" \n`,
      // });

      // Show a notification for every key press
      vscode.window.showInformationMessage("Automated Coding Start");
      //   }, 9000);

      context.subscriptions.push({
        dispose: () => {
          // Stop the interval timer when the extension is deactivated
          clearInterval(intervalId);
        },
      });

      vscode.window.showInformationMessage("Automated Coding Start");
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
