# ark-multiplayer
Enables several players for one ARK installation. Currently only experimential, use at your own risk.

Node.js is required in order to run this script.

# Setup

* Run gpedit.msc as administrator. Grant the right for creating symbolic links to all users required as described on this webpage: http://superuser.com/questions/104845/permission-to-make-symbolic-links-in-windows-7
* Create in every home directory of your local users the folder 'ArkSavedGames'. Copy the original contents of 'C:\Program Files (x86)\steam\steamapps\common\ARK\ShooterGame\Saved' to all folders
* Delete the folder C:\Program Files (x86)\steam\steamapps\common\ARK\ShooterGame\Saved
* Run airklinker.bat the first time, this should create a symbolic link in the ShooterGame directory to your local folder
* Run gpedit.msc again and make sure that the bat file is run everytime a user logs in. See here: http://superuser.com/questions/640771/run-windows-batch-files-at-startup-or-when-any-user-logs-on

Now everytime a user with a local ARK profile logs in, his file is linked into the ARK directory. Have fun!

# Licence
MIT, ©2016 Christian Kuster
