# Bookmark Landing Page - Sprint 1 (Final Implementation)

This repository contains the final implementation of the landing page for the Bookmark project. The development was built incrementally across three iterations, applying different technologies and methodologies in each phase.

1.  **Iteration 1:** Initial build using semantic HTML5, CSS3 (with a *Mobile First* approach), and vanilla JavaScript for interactivity.
2.  **Iteration 2:** A complete refactor of the CSS to **SASS (SCSS)**, modularizing the code into partials, variables, and mixins.
3.  **Iteration 3:** A final refactor using the **Bootstrap 5** library, customized via SASS to faithfully match the original design.

## Features Implemented (Iteration 3)

The final page uses Bootstrap components for rapid and responsive layout:

* **Header & Navigation:** Implemented with Bootstrap's `navbar` component, it is fully responsive and uses the Bootstrap *Toggler* for the mobile menu.
* **Hero Section:** Laid out with Bootstrap's **Grid System** (`row` and `col-`) for a responsive two-column layout.
* **"Features" Section:** Uses Bootstrap's `nav-tabs` component, customized with SASS to add the red bottom border on the active tab.
* **"Download" Section:** Uses the Bootstrap Grid and **utility classes** (`shadow-lg`, `rounded-3`, `p-4`, `mt-lg-4`) to create the card design with its staggered effect.
* **"FAQ" Section:** Implemented with Bootstrap's `accordion-flush` component. The arrows and colors were customized by overriding Bootstrap's SASS variables.
* **Contact Form:** Uses the `input-group` component and Bootstrap's **form validation** system to display errors natively.

## Technologies Used

* **HTML5 (Semantic):** Tags like `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` were used to structure the content.
* **Bootstrap 5:** This is the core of the implementation. It's used for the Grid System, components (Navbar, Tabs, Accordion, Buttons, Forms), and utility classes (spacing, flex, shadows).
* **SASS (SCSS):** Used strategically to **customize Bootstrap 5**. Bootstrap's default SASS variables (like `$primary`, `$danger`, `$font-family-sans-serif`) were overridden, and custom styles were added in partials.
* **JavaScript:** Primarily used to enable Bootstrap's form validation script. The interactivity of components (tabs, accordion, navbar) is managed by the **Bootstrap JS Bundle**.
* **npm:** Used to install Bootstrap 5 as a project dependency.
* **Git & GitHub:** For version control and project organization into branches (`feature/vanilla-implementation`, `feature/sass-implementation`, `feature/bootstrap-implementation`).

## Getting Started

To view this project, you need to compile the custom SASS files.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/nataliarose98/bookmark-landing-page
    ```
2.  **Navigate to the project folder:**
    ```bash
    cd bookmark-landing-page
    ```
3.  **Install dependencies (Bootstrap):**
    ```bash
    npm install
    ```
4.  **Run the SASS compiler:**
    This command will watch your main SASS file and compile it into the CSS file used by the HTML every time you save a change.
    ```bash
    sass --watch scss/custom_bootstrap.scss:css/custom_bootstrap.css
    ```
5.  **Open `index.html` in your browser:**
    You can open the file directly or (recommended) use an extension like "Live Server" in Visual Studio Code.
