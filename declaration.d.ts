declare module "*.mp4" {
    const src: string;
    export default src;
  }

  declare namespace JSX {
    interface IntrinsicElements {
      'ion-icon': any;
    }
  }