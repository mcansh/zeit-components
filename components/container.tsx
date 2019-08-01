import React from 'react';
import clsx from 'clsx';

const Container = ({
  vcenter,
  row,
  children,
  preview,
}: {
  vcenter?: boolean;
  row?: boolean;
  children: React.ReactNode;
  preview?: boolean;
}) => (
  <div className={clsx('geist-container', { row, preview })}>
    {children}
    <style jsx>{`
      .geist-container:not(.row) > .geist-container {
        margin-top: 0;
      }

      .geist-container {
        display: flex;
        flex: 1;
        justify-content: flex-start;
        flex-direction: column;
        position: relative;
        min-width: 1px;
        max-width: 100%;
        align-items: ${vcenter ? 'center' : 'stretch'};
      }

      .geist-container.row {
        flex-direction: row;
        flex-wrap: wrap;
      }

      .geist-container.preview {
        padding: var(--geist-gap) 0;
      }
    `}</style>
  </div>
);

export { Container };
