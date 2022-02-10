import React from "react";
import Modal from '../Modal'

interface LoadingProps {
  isLoading: boolean;
}
const LoadingScreen = ({ isLoading}: LoadingProps) => {
  return (<Modal isOpen={isLoading}/>
  );

}

export default LoadingScreen;