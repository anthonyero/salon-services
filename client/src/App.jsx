import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


function App() {
  const [count, setCount] = useState(0)

  return (
    <ApolloProvider client={client}>
      <div>
      <h1>Test</h1>
        <Outlet />
      </div>
    </ApolloProvider>
  )
}

export default App;
