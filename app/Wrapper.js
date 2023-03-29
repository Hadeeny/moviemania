'use client'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
const queryClient = new QueryClient()

const Wrapper = ({children}) => {
    return (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      )
} 

export default Wrapper