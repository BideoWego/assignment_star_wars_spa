import React from 'react';


const Response = props => {
  const { name, json, isFetching } = props;
  console.log(props);

  const data = <div className="data">
    <pre>{JSON.stringify(json, null, 2)}</pre>
  </div>;

  return  (
    <div className="Response">
      <h1>{name}</h1>
      {data}
    </div>
  );
};


export default Response;
