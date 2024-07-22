# about

Unsorted notes on errors and their solutions.
As the file will be big, it needs to be grouped and transferred to separate files

## PowerShell

### "CategoryInfo : SecurityError: (:) [], PSSecurityException"

- Reproduction
  ```text
  Open the PowerShell terminal and execute the command, which is a script "*.ps1"
    yarn : File C:\Users\USER\AppData\Roaming\npm\yarn.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see
    about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
    At line:1 char:1
    + yarn
    + ~~~~
        + CategoryInfo          : SecurityError: (:) [], PSSecurityException
        + FullyQualifiedErrorId : UnauthorizedAccess
  ```
- [Cause and solution](https://g.co/gemini/share/c6be8864a261)

  ```text
  # Cause
  Windows user does not have permission to run unsafe scripts

  # Solution
  # Give the current user permission to run such scripts.
  # executing in the terminal
  PS > Set-ExecutionPolicy -Scope CurrentUser Unrestricted
  ```
