# PWX RaceOS V2

A small **ES5-compatible** SimHub JavaScript extension library with independently editable modules and one generated distribution file.

## First run

```sh
npm install
npm test
```

`npm test` builds `dist/PWX-V2.js` automatically, validates ES5 syntax with Acorn, and runs the tests with a mocked `$prop()`.

To build without tests:

```sh
npm run build
```

## How modules work

`build.manifest.json` defines the source file order. The build script **concatenates** source files; it does **not** transpile modern JS. Therefore `src/*.js` must use **ECMAScript 5.1**: `var`, traditional `function`, no imports, `let`, `const`, classes, arrows, template literals, optional chaining, etc.

Only `00-core.js` declares the namespace `var PWX = {...}`. Subsequent modules add functions, such as `PWX.telemetry.speedMph = function() {...};`. These functions may call other functions via `PWX.core.read()`, etc. No import or require is necessary.

The **Node build scripts** (in `scripts/*.cjs`) and tests may use modern JS because SimHub never sees them.

## SimHub installation

Copy **only** `dist/PWX-V2.js` into your existing SimHub `JavascriptExtensions` directory (for example, many installations use `C:\Program Files (x86)\SimHub\JavascriptExtensions`). You can instead run:

```powershell
npm run build
npm run deploy -- "C:\Program Files (x86)\SimHub\JavascriptExtensions"
```

Use the location from your actual installation; the deploy script won't create it. Restart SimHub if the extension update is not picked up.

Add a **JavaScript** Dash Studio binding with:

```javascript
return PWX.format.speed(PWX.telemetry.speedMph());
```

## Important scope limitation

`JavascriptExtensions` provides shared **functions**, not a guaranteed global shared state or single central update loop. SimHub may pool JavaScript hosts. Do not use variables on `PWX` to coordinate persistent values between dashboards. Read telemetry with `$prop()` **inside functions**, and use `root` only for state local to an individual formula, or a real published-property/plugin solution for cross-device shared state.

## Adding a module

1. Create a new `src/NN-name.js` file using ES5.
2. Add its path to `build.manifest.json` **after** `00-core.js`, in the order dependencies require.
3. Add a test for its behaviour and run `npm test`.
4. Deploy the rebuilt bundle.


## Reference

- https://github.com/SHWotever/SimHub/wiki/Javascript-Formula-Engine


## Symlinking to Simhub
```

$links = @(
    @{
        Source = "C:\Powerworx\Simhub\RaceOS\dist\global\PWX-V2.js"
        Destination = "C:\Program Files (x86)\SimHub\JavaScriptExtensions\PWX-V2.js"
    },
    @{
        Source = "C:\Powerworx\Simhub\RaceOS\dist\systems\PWX-Dash\PWX.dash.js"
        Destination = "C:\Program Files (x86)\SimHub\DashTemplates\PWX-Dash\JavascriptExtensions\PWX.dash.js"
    }
)

foreach ($link in $links) {

    # Confirm the new source exists
    if (-not (Test-Path -LiteralPath $link.Source -PathType Leaf)) {
        throw "Source file not found: $($link.Source)"
    }

    # Remove existing link, but protect real files
    $existing = Get-Item -LiteralPath $link.Destination -Force -ErrorAction SilentlyContinue

    if ($existing) {
        if ($existing.LinkType -ne "SymbolicLink") {
            throw "Destination is not a symbolic link: $($link.Destination)"
        }

        Remove-Item -LiteralPath $link.Destination -Force
    }

    # Create new symbolic link
    New-Item -ItemType SymbolicLink `
        -Path $link.Destination `
        -Target $link.Source

}

```