# Template

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) and currently runs on Angular 22.

## Prerequisites

- [Node.js](https://nodejs.org/) version 26 (see `.nvmrc` — run `nvm use` if you use nvm)
- An SSL certificate for local HTTPS (see below) — required before running `npm start`

## HTTPS setup (required for `npm start`)

The dev server runs over HTTPS and expects two files in the project root:

- `localhost.crt` — the certificate
- `localhost.key` — the private key

These files are gitignored, so you need to generate them once after cloning. Choose one of the options below.

### Option 1: mkcert (recommended)

[mkcert](https://github.com/FiloSottile/mkcert) creates certificates that are automatically trusted by your browser — no security warnings.

```bash
# Install mkcert (macOS)
brew install mkcert

# Install the local certificate authority (one-time setup)
mkcert -install

# Generate the certificate and key in the project root
mkcert -cert-file localhost.crt -key-file localhost.key localhost 127.0.0.1 ::1
```

On Windows use `choco install mkcert` or `scoop install mkcert`; on Linux see the [mkcert installation guide](https://github.com/FiloSottile/mkcert#installation).

### Option 2: OpenSSL (self-signed)

No extra tooling needed, but the browser will show a security warning that you must accept manually (e.g. click "Advanced" → "Proceed to localhost").

```bash
openssl req -x509 -newkey rsa:2048 -nodes -sha256 \
  -keyout localhost.key -out localhost.crt \
  -days 365 \
  -subj "/CN=localhost" \
  -addext "subjectAltName=DNS:localhost,IP:127.0.0.1"
```

> **Note:** Never commit certificate or key files. They are already excluded via `.gitignore` (`*.crt`, `*.key`).

## Development server

Run `npm start` for a dev server with HTTPS. It opens `https://localhost:4200/` automatically. The application will reload if you change any of the source files.

To serve over plain HTTP instead, run `ng serve` and navigate to `http://localhost:4200/`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Vitest](https://vitest.dev/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
