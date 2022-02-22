import styled from 'styled-components';
import variables from './variables';

const PositionsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .helper-text {
    font-size: 1.25rem;
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 0;
    height: 3rem;
  }
  label {
    display: block;
    text-align: center;
  }
  form p {
    text-align: center;
    font-size: 2rem;
    margin: 1rem 0 0 0;
    line-height: 1;
  }
  label[for="input"] { 
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  @media (max-width: ${variables.sm}) {
    form {
      width: 100%;
    }
    grid-column: 2 / 3;
    margin-bottom: 0;
    align-items: flex-end;
  }
`;

const PositionsField = styled.div`
  height: 200px;
  position: relative;
  background: ${variables.grey100};
  border-radius: 1rem;
  img {
    width: 75px;
    position: absolute;
  }
  &.above {
    img.avatar-1 {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    img.avatar-2 {
      left: 50%;
      transform: translate(-50%);
    }
    img.avatar-3 {
      display: none;
    }
  }
  &.beside {
    img.avatar-1 {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    img.avatar-2 {
      top: 50%;
      transform: translateY(-50%);
    }
    img.avatar-3 {
      display: none;
    }
  }
  &.under {
    img.avatar-1 {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    img.avatar-2 {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    img.avatar-3 {
      display: none;
    }
  }
  &.between {
    img.avatar-1 {
      top: 50%;
      transform: translateY(-50%);
    }
    img.avatar-2 {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    img.avatar-3 {
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &.front {
    img.avatar-1 {
      top: 40%;
      left: 60%;
      transform: translate(-50%, -50%);
    }
    img.avatar-2 {
      top: 55%;
      left: 45%;
      transform: translate(-50%, -50%);
      z-index: 10;
    }
    img.avatar-3 {
      display: none;
    }
  }
  &.behind {
    img.avatar-1 {
      top: 55%;
      left: 45%;
      transform: translate(-50%, -50%);
      z-index: 10;
    }
    img.avatar-2 {
      top: 40%;
      left: 60%;
      transform: translate(-50%, -50%);
    }
    img.avatar-3 {
      display: none;
    }
  }
`;

export { PositionsContainer, PositionsField };