import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Layout } from './components/layout'
import { WeatherDashboard } from './pages/weather-dashboard'
import { CityPage } from './pages/city-page'

function App() {
  // Create a client
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Layout>
            <Routes>
              <Route path='/' element={<WeatherDashboard />} />
              <Route path='/city/:cityName' element={<CityPage />} />
            </Routes>
          </Layout>
        </ThemeProvider >
      </BrowserRouter >
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
