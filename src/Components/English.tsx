import React, { FC } from 'react';
import Course from './Course';
import english from './pdfs/ASSP.pdf';
import english2 from './pdfs/ASSP2.pdf';

interface EnglishProps {}

const myItems: {
  subject: string;
  value: string[];
} = {
  subject: 'English',
  value: [english, english2],
};

const English: FC<EnglishProps> = () => {
  return <Course items={myItems}></Course>;
};

export default English;