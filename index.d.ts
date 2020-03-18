import * as React from 'react';

interface GithubButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  type?: "dark" | "light";
  disabled?: boolean;
}

/**
 * A React Component that renders a button that follows Github's Styleguide
 */
declare class GithubButton extends React.Component<GithubButtonProps, any> {

}

export default GithubButton;
