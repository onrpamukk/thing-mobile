declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production';
  }
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}
declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.avif' {
  const src: string;
  export default src;
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const value: any;
  export default value;
}

declare module '*.md' {
  const content: string;
  export = content;
}
declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const src: string;
  export default src;
}
