import { styled } from "@linaria/react";

export const LoadingIcon = styled.img`
  width: 2.25rem;
  height: 2.25rem;
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

const Loading: React.FC = () => {
  return <LoadingIcon src="icons/loading.svg" />;
};

export default Loading;
