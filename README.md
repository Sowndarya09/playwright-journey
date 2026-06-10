#  Playwright Enterprise Test Framework

![CI](https://github.com/Sowndarya09/playwright-journey/actions/workflows/playwright.yml/badge.svg)
![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow)
![BDD](https://img.shields.io/badge/pattern-BDD%20%7C%20POM-blue)
![License](https://img.shields.io/badge/license-MIT-green)

> Production-grade Playwright automation framework built to enterprise standards —
> BDD with Cucumber/Gherkin, Page Object Model, API testing, CI/CD via GitHub Actions, and Docker.

---

##  Why This Framework Exists

Most Playwright repos demonstrate syntax. This one demonstrates **engineering decisions**.

Built to reflect the patterns I used at scale for Lululemon's e-commerce platform — where flaky tests cost release confidence and slow pipelines cost money. Every design choice here has a production reason behind it.

---

##  Architecture & Key Design Decisions

| Decision | Why |
|---|---|
| **Page Object Model (POM)** | Decouples test logic from UI structure — one page change = one file update, not 20 test fixes |
| **Cucumber/Gherkin BDD** | Enables product owners and QA to co-own acceptance criteria — tests become living documentation |
| **GitHub Actions CI/CD** | Tests run on every push/PR — no broken code reaches main |
| **Docker containerization** | Eliminates "works on my machine" — consistent execution across local, CI, and staging |
| **API test layer** | Validates backend contracts independently of UI — faster feedback, earlier defect detection |

---

##  Project Structure
---

##  Tech Stack

- **Framework:** Playwright + Cucumber.js
- **Language:** JavaScript (Node.js)
- **Pattern:** BDD + Page Object Model
- **CI/CD:** GitHub Actions
- **Containerization:** Docker
- **Test types:** UI functional, API (GET/POST/PUT/DELETE), smoke, regression

---

##  Running Tests

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run BDD/Cucumber scenarios
npm run cucumber

# Run in headed mode (see the browser)
npm run test:headed

# Run in Docker
docker-compose up
```

---

##  CI/CD Pipeline

Every push to `main` triggers the GitHub Actions workflow:
1. Install dependencies
2. Run full test suite (headless, Chromium)
3. Generate HTML report
4. Upload test artifacts on failure

---

