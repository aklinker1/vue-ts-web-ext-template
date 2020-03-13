// declare interface Global extends NodeJS.Global {
//   document: Document;
//   window: Window;
// }

// declare var global: Global;

// declare namespace NodeJS {
//   interface Global {
//     document: Document;
//     window: Window;
//   }
// }

declare namespace NodeJS {
  interface Global {
    browser: any;
    document: Document;
    window: Window;
  }
}

// declare namespace NodeJS {
//   interface Process {
//     browser: boolean;
//   }
// }
