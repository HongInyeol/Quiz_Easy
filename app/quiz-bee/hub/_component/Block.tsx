import { categoryType } from '@/type';
import { css } from '@emotion/css';
import React from 'react';

export default function Block({ id, category }: categoryType) {
  const _onClick = () => {
    console.log(id, category);
  };

  return (
    <div
      className={css`
        background-color: #fff;
        width: 25%;
        flex-grow: 1;
        aspect-ratio: 1;
        font-size: 24px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.05);
        transition: 0.1s;
        :hover {
          transform: scale(1.1);
          box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
        }
        :active {
          transform: scale(1.05);
        }

        ${category.length > 5 &&
        css`
          font-size: 18px;
          font-weight: 500;
        `}

        ${category.length > 7 &&
        css`
          font-size: 14px;
          font-weight: 700;
        `}
      `}
    >
      <span>{category}</span>
    </div>
  );
}
