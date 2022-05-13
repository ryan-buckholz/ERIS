# ERIS

# Building The Mobile App

You must use Visual Studio 2019 or Visual Studio 2022 in order to build the mobile app because Xamarin depends on Visual Studio.

## Setup your environment

### Visual Studio Setup

* [Visual Studio](https://visualstudio.microsoft.com/downloads/)
* Mobile development with .NET (Through Visual Studio Installer. Includes Xamarin.)
* Xamarin.Essentials (Through NuGet Package manager in Visual Studio.)
* Xamarin.CommunityToolkit (Through NuGet Package manager in Visual Studio)
* Newtonsoft.Json (Through NuGet Package manager in Visual Studio.)

## Setup Deployment Device or Emulator

### Android Device
* [Set Up Device for Development (Microsoft)](https://docs.microsoft.com/en-us/xamarin/android/get-started/installation/set-up-device-for-development/)

### Android Emulator
We use the emulator that comes packaged with Visual Studio.

#### You MUST use Hardware Acceleration with the emulator.
* Emulation speed without hardware acceleration is too slow for successful deployment.

### You need to add a line of code to the applicationhost.config file, which is in a hidden folder
* To view hidden files use this doc (https://support.microsoft.com/en-us/windows/view-hidden-files-and-folders-in-windows-97fbc472-c603-9d90-91d0-1166d1d9f4b5)
* Go to the root ERIS folder -> .vs -> ERIS -> config -> applicationhost.config
* Then add this line of code after line 163 - (binding protocol="http" bindingInformation="*:50188:127.0.0.1")

#### Installation
* Visual Studio will automatically open the installation process when trying to build the mobile app for the first time.
* These emulator tools can be also be accessed through the tool bar: Tools -> android
* [Official Microsoft documentation can help with any installation issues](https://docs.microsoft.com/en-us/xamarin/android/get-started/installation/android-emulator/)

## Deploying and Running the WebApi
1) Open ERIS.sln using Visual Studio
2) Set the ERIS.MobileWebApi project as the Startup Project3) 
4) "Start" the project in Visual Studio with ISS Express

## Deploying and Running the Mobile App
1) Set the ERIS.Mobile.Android project as the Startup Project.
2) Connect your android device or ensure the emulator is setup.
3) "Start" the project in Visual Studio.

## Running the Web App
1) Set the ERIS.Web project as the Startup Project
2) "Start" the project in Visual Studio 

# The Code Forge Team Commit Rules:

Our rules depend on the Flying Donut scrum software.

### All work shall be done in their own "feature" branches
  * Feature branches will be created when starting a user story/card.
  * Name branches with the card number.

### Nothing should be committed if it is not functional. (You must run and test the software)
  * Use the staging technique.

### Comments should be added to commits, containing the card number followed by similar description of the feature from the card

### If multiple people are working on the same card/branch, merge conflicts should be resolved between them, and if necessary put to a team vote.

### Branch Structure:
main -> featureBranch

### Code review:
  Group for code review: Review pull requests, before pushing to main.
  Review individually at first, then as a group discuss notes.
  would need a card on Flying Donut
  Document and review every sprint (Spring 2022)

# Sub-Team Membership:
  ### Web:
    Jason Fares
    Nataly Kurylov
  ### Mobile:   
    Trey Hillard        
    Gia-Huy Gonzalez
  ### Database: 
    Ryan Buckholz
    Mei Peng
    Preston Boumann
