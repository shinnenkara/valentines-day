import './App.css';
import 'react-responsive-modal/styles.css';
import {FC} from 'react';
import {ThemeProvider} from "./components/theme-provider.tsx";
import {ValentinesPage} from "./pages/ValentinesPage.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Toaster} from "./components/ui/sonner.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ValentinesPage />,
    },
]);

export const App: FC = () => {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark">
            <RouterProvider router={router} />
            <Toaster />
        </ThemeProvider>
    );
};
