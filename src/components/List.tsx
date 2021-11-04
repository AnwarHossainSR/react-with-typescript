import React from "react";

interface IProps {
  people: {
    name: string;
    age: number;
    img: string;
    note?: string;
  }[];
}

const List: React.FC<IProps> = ({ people }) => {
  return <div>iam list</div>;
};

export default List;
