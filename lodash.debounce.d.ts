declare module 'lodash.debounce' {
    interface DebounceSettings {
      leading?: boolean;
      maxWait?: number;
      trailing?: boolean;
    }
  
    interface Cancelable {
      cancel(): void;
      flush(): any;
    }
  
    // You can adjust the types below according to your needs.
    function debounce<F extends (...args: any[]) => any>(
      func: F,
      wait?: number,
      options?: DebounceSettings
    ): F & Cancelable;
  
    export default debounce;
  }
  