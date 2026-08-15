type BgMessages = typeof import("./src/messages/bg.json");
type EnMessages = typeof import("./src/messages/en.json");

declare interface IntlMessages extends BgMessages, EnMessages {}

declare module "*.scss";

declare module "*.mp4" {
    const src: string;
    export default src;
}