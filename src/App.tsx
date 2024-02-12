import './App.css';
import 'react-responsive-modal/styles.css';
import {FC} from 'react';
import {AppProvider} from "./state/AppContext.tsx";
import {ValentinesPage} from "./pages/ValentinesPage.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ValentinesPage />,
    },
]);

export const App: FC = () => {
    return (
        <AppProvider>
            <RouterProvider router={router} />
        </AppProvider>
    );
};
