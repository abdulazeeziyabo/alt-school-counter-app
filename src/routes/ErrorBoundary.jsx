import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props){
    super(props);
    this.state = {hasError: false};
  }
  static getDerivedStateFromError(error){
    //update state so the next render will show the fallback UI
    return{hasError:true};
  }
  componentDidCatch(error,errorInfo){

  }
  render(){
    if(this.state.hasError){
      return <h1>Something went wrong from the error boundary</h1>
    }
  }
}

export default ErrorBoundary