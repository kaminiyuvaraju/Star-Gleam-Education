import React, { FC } from 'react';
import Course from './Course';
import math1 from './pdfs/M1.pdf';
import math2 from './pdfs/M2.pdf';

interface MathProps {}

const myItems: {
  subject: string;
  value: string[];
} = {
  subject: 'Maths',
  value: [math1, math2],
};

const English: FC<MathProps> = () => {
  return <Course items={myItems}></Course>;
};

export default English;