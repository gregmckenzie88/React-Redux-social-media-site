import React from 'react';

const PageLoading = () => {
  return(
    <div style={{padding: '40px', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <span style={{fontSize: '40px'}} className="glyphicon glyphicon-refresh"></span>
    </div>
  );
}


export default PageLoading;
