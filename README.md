# Infra Candidate Exam


### Overview
During this test you will be required to write code, configure environments and build a service to perform a task of getting an input from one location, validating it, and moving it to another location.

### Specification
1. Write a script that will connect to a remote service and retrieve a JSON-formatted output.
1. Parse the JSON and iterate through its structure.
1. Fetch the contents of each URL (i.e. the EXE file).
1. Send the binary, along with the original url to a custom web service that you will build.
1. Have this service maintain some sort of a data structure to hold your data (url and EXE files).
1. Have this code run every five minutes.
1. If files already exist, do not overwrite them. Issue a warning and save the file with an incremented suffix (e.g.: file_2.exe).
1. Commit your code into a source control.

* If you want to impress, add the query param ?expert=True to the entry point and repeat Step 2 above.

### Data
The remote service entry point is:


### Resources
A laptop connected to the Internet. You need to choose the tools most convenient for you to achieve the task.

### Requirements
Must be written in either Python or Node.js

### Timeline
We estimate this task requires up to 3 hours to complete. You may finish this before or after our estimate. The time it will take you to complete the task will be taken into consideration during the grading of your test.
