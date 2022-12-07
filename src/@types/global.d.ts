/**
 * If you import a dependency which does not include its own type definitions,
 * TypeScript will try to find a definition for it by following the `typeRoots`
 * compiler option in tsconfig.json. For this project, we've configured it to
 * fall back to this folder if nothing is found in node_modules/@types.
 *
 * Often, you can install the DefinitelyTyped
 * (https://github.com/DefinitelyTyped/DefinitelyTyped) type definition for the
 * dependency in question. However, if no one has yet contributed definitions
 * for the package, you may want to declare your own. (If you're using the
 * `noImplicitAny` compiler options, you'll be required to declare it.)
 *
 * This is an example type definition which allows import from `module-name`,
 * e.g.:
 * ```ts
 * import something from 'module-name';
 * something();
 * ```
 * 
 * Usually if you have internal d.ts file like this, it contains ambient types not defined in your module, 
 * but are present on the system. You are telling typescript "trust me, this stuff exists". 
 * Those kind of types should not be a part of your packaged npm module types. 
 * Your client is responsible for providing those (because client is responsible for setting up environment).
 */
/* Add your own types here */
declare module 'google-spreadsheet';
interface bleh {}

