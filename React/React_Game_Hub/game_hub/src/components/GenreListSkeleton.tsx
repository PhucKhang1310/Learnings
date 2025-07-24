import {
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

const GenreListSkeleton = () => {
  return (
    <ListItem>
      <SkeletonText />
    </ListItem>
  );
};

export default GenreListSkeleton;
