type BgMessages = typeof import("./src/messages/bg.json");
type EnMessages = typeof import("./src/messages/en.json");

declare interface IntlMessages extends BgMessages, EnMessages {}

declare module "*.mp4" {
    const src: string;
    export default src;
  }

  declare namespace JSX {
    interface IntrinsicElements {
      'ion-icon': any;
    }
  }