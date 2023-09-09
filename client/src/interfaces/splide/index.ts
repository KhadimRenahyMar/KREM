export type SplideOptions = {
  hasTrack: boolean;
  className: string;
  tag: "div" | "section" | "header" | "footer" | "nav" | undefined;
  ariaLabel: string;
  options: {
    rewind?: boolean;
    type?: string;
    autoplay?: boolean;
    pauseOnHover?: boolean;
    pauseOnFocus?: boolean;
    perPage?: number;
    perMove?: number;
    snap?: boolean;
    pagination?: boolean;
    arrows?: boolean;
    drag?: boolean | "free";
    lazyLoad?: boolean | "nearby" | "sequential" | undefined;
  };
}