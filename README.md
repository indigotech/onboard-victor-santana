# OnboardProject
## Environment

**Technologies:**
- React-Native 0.70.6

This project was tested using:

- MacOS Monterey 12.6.2
  - Xcode 13.4.1
  - Android Studio Chipmunk | 2021.2.1 Patch 2
  - Node v14.12.0

### Setting up the development environment

<details open>
<summary><b>Taqtile ONLY</b></summary>

```
⚠️⚠️⚠️ NEVER use sudo, NEVER ⚠️⚠️⚠️
```

Follow the instructions HERE (instead of the ones found on [React Native](https://reactnative.dev/))

#### Node

Ensure your are using Node version from `.nvmrc` file

- Run `$ nvm use`
- If it errors because you don't have it, install Node - `$ nvm install`

#### Watchman

Ensure you have `watchman`

- Run `$ watchman -v`
- If it errors, install Watchman - `$ brew install watchman`

#### Ruby gems

Ensure you are using ruby version **2.7.5**

- Run `$ rvm use 2.7.5`
- If it errors because you don't have it, install Ruby - `$ rvm install 2.7.5`

Install Ruby gems

- Run `$ bundle install`
- If it errors because you don't have `bundler`, install Bundler - `$ gem install bundler`

#### JDK and Android Studio

Ensure you have JDK 11 or newer

- Run `$ java -version`
- If it errors or if it is older, install JDK 11 - `$ brew cask install adoptopenjdk/openjdk/adoptopenjdk11`

If you don't have Android Studio, follow the [instructions here](https://reactnative.dev/docs/environment-setup) (section `Android development environment` for macOS / Android)

</details>

<details>
<summary><b>Non Taqtile</b></summary>

Follow the instructions found on [React Native](https://reactnative.dev/docs/environment-setup)

</details>

### Project setup

Install Node dependencies

- Run `$ npm install`

## Workflow

```
⚠️⚠️⚠️ Don't forget to check `Environment` and `Setting up the development environment` sections above ⚠️⚠️⚠️
```

### npm Commands `$ npm run <command>`:

- `<ios|android>` - runs the project on the selected emulator or physical device (i.e `$ npm run android`)
