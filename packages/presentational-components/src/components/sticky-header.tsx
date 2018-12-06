import * as React from "react";

type StickyHeaderProps = {
  children: JSX.Element,
}

export class StickyHeader extends React.Component<StickyHeaderProps, {}> {
  render() {
    return (
      <header>
        {this.props.children}
        <style jsx>{`
          header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            // TODO: Need to remove this once header is in a separate div
            z-index: 2;
            background-color: var(--theme-title-bar-bg, rgb(250, 250, 250));
            padding: var(--nt-spacing-m) var(--nt-spacing-xl);
            box-sizing: border-box;
          }
        `}</style>
      </header>
    );
  }
}

