import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles } from '../actions/files';

const Disk = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector((store) => store.fileReducer.currentDir);
  React.useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);
  return <div>DISK</div>;
};

export default Disk;
