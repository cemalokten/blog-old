import styled from 'styled-components'

const Span = styled.span`
  transition: transform 0.15s;
  font-family: 'LuculentRegular';
  font-size: 1.5vw;
  position: relative;
  z-index: 3;

  display: inline-block;
  vertical-align: baseline;
  min-width: 1.75vw;
  padding: 0.6vw 0.7vw 0.4vw;

  text-align: center;
  line-height: 0.8;
  cursor: pointer;

  border: ${(props) => (props.border ? 'solid 1px' : 'none')};
  border-radius: ${(props) => (props.round ? '2vw' : 'none')};

  background-color: ${(props) =>
    props.background ? props.background : 'white'};
  color: ${(props) => (props.color ? props.color : 'black')};
`

const Tag = styled.span`
  transition: transform 0.15s;
  font-family: 'LuculentRegular';
  font-size: 1.5vw;
  position: relative;
  z-index: 3;

  display: inline-block;
  vertical-align: baseline;
  min-width: 1.75vw;
  height: 1vw;
  padding: 0.6vw 0.7vw 0.4vw;

  text-align: center;
  line-height: 0.8;
  cursor: pointer;

  border: ${(props) => (props.border ? 'solid 1px' : 'none')};
  border-radius: ${(props) => (props.round ? '2vw' : 'none')};

  background-color: ${(props) =>
    props.background ? props.background : 'white'};
  color: ${(props) => (props.color ? props.color : 'black')};

  &:hover {
    /* animation: marquee 32s linear infinite; */
    color: white;
  }
  /* 
  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  } */
`

const Content = styled.div`
  width: 100vw;
  height: 50vh;
  border-radius: 2vw;
  display: flex;
  background-color: #f3f3f3;
  justify-content: center;
`

const H1 = styled.h1`
  display: flex;
  font-weight: 400;
  font-size: 5vw;
`
const H2 = styled.h2`
  font-weight: 400;
  font-size: 3vw;
`

export { Span, H1, H2, Tag, Content }
