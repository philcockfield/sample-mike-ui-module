import * as React from 'react';

export interface IFooProps {}

/**
 * primitive
 */
export class Foo extends React.Component<IFooProps, void> {
  public render() {
    return (
      <div>Foo</div>
    );
  }
}
