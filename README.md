# Getting Started

1. `make` or `make serve`

to build the website, serve the website on <a href="http://localhost:4200/">http://localhost:4200/</a>, and watch for any changes to the development files and rebuild on any change and re-serve the website automatically. It will also fire Live Reload events for the web browser to automatically reload after every rebuild.

2. `make open`

will open the web browser pointing to this website.

3. Enable LiveReload with the web browser (install the <a href="https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en">LiveReload extension</a> if not installed). This means the web browser will automatically reload the page every time a new build is made.

4. Develop away. :)

To create a distribution:

`make build`

and the built website is in the `dist` folder.

# Broccoli

The `Brocfile.js` file is well annotated with explanations of what the various things do.

# Makefile

The `Makefile` is just a simpler alternative to having a `Gruntfile.js` for task runners.

# Contact

Please do feel free to raise an issue here or tweet me at <a href="//twitter.com/bjfletcher">@bjfletcher</a>.