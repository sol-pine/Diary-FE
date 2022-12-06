import React from 'react';
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import {Route, Routes} from "react-router-dom";

import MainPage from "./pages/MainPage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import ResetPage from "./pages/ResetPage";
import UserPage from "./pages/UserPage";

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/login" element={<LogInPage/>}/>
                        <Route path="/signup" element={<SignUpPage/>}/>
                        <Route path="/reset" element={<ResetPage/>}/>
                        <Route path="/user" element={<UserPage/>}/>
                    </Routes>
                    <ReactQueryDevtools/>
                </div>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
