## Code Style

When modifying existing code, match the patterns already in the file.
If the file uses callbacks, don't switch to async/await.
If the file uses class components, don't refactor to hooks.
Match the existing style, even if you'd do it differently.

## Abstractions

Do not create abstractions unless they reduce real, measurable complexity.
No interfaces with a single implementation.
No factory functions that produce one type.
No wrapper classes that just delegate to another class.
Three similar lines of code is better than a premature abstraction.

## Tests

Never modify existing tests unless the change intentionally updates the behaviour they cover.
If a test fails after your change, that means YOUR change is wrong, not the test.
Fix your code to make the existing test pass.

## Comments

Default to writing no comments.
Only add a comment when the WHY is non-obvious.
Never comment WHAT the code does.
Never reference the current task, ticket, or fix in a comment.

## Scope

Keep changes scoped to exactly what was requested.
Don't "improve" adjacent code.
Don't refactor things that aren't broken.
Don't add features that weren't asked for.

## Error Handling

Don't add error handling for scenarios that can't happen.
Trust internal function contracts.
Only validate at system boundaries: user input, API responses, file reads.

## Stack

- Runtime: Node.js 24.14
- Framework: Laravel 13 with InertiaJS and VueJS
- Database: MariaDB
- Styling: Tailwind CSS 4
- Testing: pest
- Package manager: pnpm

## Frontend Shared Library

- Components, helpers and composables are auto-loaded from `@evomark/evo-shared`. Components can be used using the 'EvoShared' prefix, e.g. `EvoSharedInputAddress`. Composables and helpers are loaded via unplugin-auto-import. Always prefer these to recreating versions locally.

## Project Structure

- `app/` - Main Laravel area
- `resources/js/components/` - Reusable UI components
- `resources/js/pages/` - InertiaJS/VueJS Page templates

## Naming Conventions

- Files: kebab-case (user-profile.js)
- Components: PascalCase (UserProfile.vue)
- Functions: camelCase
- Database tables: snake_case with plural
- Environment variables: SCREAMING_SNAKE_CASE

<!-- - Test files:  -->

## Imports

All VueJS components are auto loaded using prefix Evo and their appropriate directory name within sync or async.
Use path aliases: layouts: resolve("./resources/js/layouts"),
images: resolve("./resources/images"),
"~": resolve("./resources/css"),
Never use relative imports that go up more than one level.
Prefer named exports over default exports.

## Database

All database queries go through Eloquent.
Never write raw SQL.
Use transactions for multi-table operations.

## Verification

## Security

Never commit .env files, API keys, tokens, or credentials.
Never log sensitive data.
Never put secrets in comments or test fixtures.

## Git

Use conventional commit format: type(scope): description
Types: feat, fix, refactor, test, docs, chore
Keep commits focused on one change.
Don't mention AI or "generated" in commit messages.

## Dependencies

Don't add new dependencies for something a few lines of code can handle.
Don't add new dependencies when existing ones cover the use case.

## Communication

When done, explain what you changed and why in 2-3 sentences.
If you found something unexpected, mention it.
If you made a judgement call, explain your reasoning.
