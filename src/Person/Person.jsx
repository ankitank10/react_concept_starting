// import './Person.css';

import styled from 'styled-components';

const StyledPersonDiv = styled.div`
  width: 50%;
  background-color: ${(props) => (props.primary ? 'lightgray' : 'red')};
  margin: auto;
  margin-bottom: 20px;
  padding: 16px;
  border: 1px solid lightgray;
  box-shadow: 0 2px 3px gray;
  text-align: center;

  @media (min-width: 500px) {
    width: 400px;
  }
`;

const Person = (props) => {
  const personStyle = {
    color: 'black',
    '@media (min-width:500px)': {
      width: '400px',
    },
  };
  return (
    <StyledPersonDiv primary={props.name.length}>
      <div className="Person" style={personStyle}>
        <h1>I am person comp</h1>
        <h2>Name : {props.name || 'ank'}</h2>
        <h2>Age : {props.age}</h2>
        {props.children}
        <input onChange={props.nameChangeHandler} value={props.name}></input>
        <button onClick={props.deleteHandler}>Delete Me</button>
      </div>
    </StyledPersonDiv>
  );
};

export default Person;
