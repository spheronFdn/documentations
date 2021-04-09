---
# id: doc1
title: Angular
# sidebar_label: Configure Build
# slug: /
---

Angular is a component-based open source framework for building enterprise-grade single-page applications (SPAs) with client-side routing. Scully, an open source static site generator, is built specifically for Angular apps.

# Key features

These features provide important benefits for Angular projects, including ones built and deployed with ArGo.

- **Robust integrated tooling.** Using declarative templates, you can extend Angular’s template language for more customization. You can also get immediate Angular-specific help and feedback with popular IDEs and editors.
- **Helpfully opinionated.** As a framework, Angular predetermines certain project decisions, but this reduces the number of choices a team has to make. Using features like the ng generate command and without relying on third-party libraries, your team can focus on building an app, not the setup.
- **Supported by Google**. Angular is Google's largest application and has the reliability of being backed and maintained by the company. The team also adheres to Long-Term Support (LTS) and has a public roadmap.
- **Built with TypeScript.** When building out Angular applications, you can take advantage of type safety and tooling using TypeScript. Strict mode can help you avoid type errors before hitting production.
  In addition to the Angular-specific items above, ArGo gives you control over branch and deploy settings. This allows you to set up continuous deployment according to your project needs, such as only deploying particular branches or creating Deploy Previews on git push.

## ArGo integration

Angular applications on ArGo can benefit from integrations such as automatic framework detection and built-in redirects functionality.

## Automatic framework detection

When you link a repository for a project, ArGo tries to detect the framework your site is using. If your site is built with Angular, ArGo provides a suggested build command and publish directory: ng build --prod and dist/. You can add the necessary subdirectory to the publish directory. If you’re using the CLI to run ArGo Dev for a local development environment, ArGo also suggests a dev command and port: ng serve and 4200. You can override suggested values or set them in a configuration file instead, but automatic framework detection may help simplify the process of setting up an Angular app on ArGo.

## Redirects

Although we recommend prerendering your Angular app with Angular Universal or using Scully to produce static files, you may need to use redirects to enable Angular routing and page refresh functionality for pages with client-side rendering. You can use a \_redirects file or a ArGo configuration file to configure these.

In \_redirects:
