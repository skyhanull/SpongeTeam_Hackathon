import React from 'react';
import { Rating } from '@mui/material';
interface RatingComponentProps {
  value: number;
}

export default function RatingComponent({ value }: RatingComponentProps) {
  return <Rating name="half-rating" defaultValue={value} precision={0.5} />;
}
